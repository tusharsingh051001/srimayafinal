'use client'

import { useState } from 'react'

export default function OrderLookup() {
  const [searchValue, setSearchValue] = useState('')
  const [orderDetails, setOrderDetails] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleOrderLookup(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setOrderDetails([])

    try {
      const res = await fetch('/api/orderlookup/fetchdetails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: searchValue.trim() }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Order not found')
      }

      const data = await res.json()
      setOrderDetails(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Group by order ID
  const groupedOrders = orderDetails.reduce((acc, order) => {
    const id = order.id
    if (!acc[id]) acc[id] = []
    acc[id].push(order)
    return acc
  }, {} as Record<string, any[]>)

  return (
    <div className="min-h-[55vh] flex items-center justify-center bg-gray-100">
      <section className="w-full max-w-2xl px-6 pt-10">
        <form
          onSubmit={handleOrderLookup}
          className="bg-[#4a0600] p-8 text-white rounded-lg shadow-lg h-full"
        >
          <input
            className="w-full p-4 text-black rounded mb-4 text-lg font-cormorant"
            placeholder="Enter your Phone Number/Email ID to view orders"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#c1ab8f] text-black py-3 rounded text-xl font-semibold font-cormorant"
          >
            {loading ? 'Searching...' : 'Lookup Order'}
          </button>
          {error && <p className="text-red-300 mt-4">{error}</p>}
        </form>

        {Object.keys(groupedOrders).length > 0 && (
          <div className="mt-8 space-y-6 pb-10">
            {Object.entries(groupedOrders).map(([orderId, items]) => {
              const { email, phone, status } = items[0]
              return (
                <div
                  key={orderId}
                  className="p-6 border rounded shadow bg-white text-black"
                >
                  {/* <p><strong>Order ID:</strong> {orderId}</p> */}
                  <p><strong>Email:</strong> {email}</p>
                  <p><strong>Phone:</strong> {phone || 'N/A'}</p>
                  <p><strong>Status:</strong> {status}</p>
                  <div className="mt-4 space-y-4">
                    {items.map((item, idx) => (
                      <div key={idx} className="border-t pt-4">
                        <p><strong>Title:</strong> {item.title}</p>
                        <p><strong>Collection:</strong> {item.product_collection || 'N/A'}</p>
                        <p><strong>Quantity:</strong> {item.quantity || 'N/A'}</p>
                        {/* {item.thumbnail && (
                          <img
                            src={item.thumbnail}
                            alt="Product"
                            className="mt-2 w-32 rounded shadow"
                          />
                        )} */}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
