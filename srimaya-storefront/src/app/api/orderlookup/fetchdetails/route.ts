import { createPool } from '@vercel/postgres'
import { NextResponse } from 'next/server'

const connectionString = 'postgresql://srimaya_owner:npg_xdsq7Z6ySckT@ep-lucky-cake-a19yzk1f-pooler.ap-southeast-1.aws.neon.tech/srimaya?sslmode=require&channel_binding=require' // your pooled URL

export async function POST(req: Request) {
  const pool = createPool({ connectionString })
  const client = await pool.connect()

  try {
    const { input } = await req.json()

    if (typeof input !== 'string') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const cleanedInput = input.trim()
    const isPhone = /^\d{10}$/.test(cleanedInput)
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanedInput)

    if (!isPhone && !isEmail) {
      return NextResponse.json({ error: 'Invalid phone or email format' }, { status: 400 })
    }

    const query = `
      SELECT 
        o.id,
        o.customer_id,
        o.status,
        o.email,
        a.phone,
        l.title,
        l.thumbnail,
        l.product_collection
      FROM public.order o
      JOIN order_address a ON o.shipping_address_id = a.id
      JOIN order_item i ON i.order_id = o.id
      JOIN order_line_item l ON i.item_id = l.id
      WHERE ${isPhone ? 'a.phone' : 'o.email'} = $1
      ORDER BY o.created_at DESC
    `

    console.log('QUERY:', query)
    console.log('VALUES:', [cleanedInput])

    const { rows } = await client.query(query, [cleanedInput])

    if (rows.length === 0) {
      return NextResponse.json({ error: 'No orders found' }, { status: 404 })
    }

    return NextResponse.json(rows)
  } catch (err) {
    console.error('Order Lookup Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  } finally {
    await client.release() // release back to pool
  }
}
