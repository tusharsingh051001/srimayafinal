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

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <form
          onSubmit={handleOrderLookup}
          className="bg-[#4a0600] p-6 text-white rounded-lg shadow-lg"
        >
          <input
            className="w-full p-3 text-black rounded mb-4"
            placeholder="Phone, Email"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#c1ab8f] text-black py-2 rounded"
          >
            {loading ? 'Searching...' : 'Lookup Order'}
          </button>
          {error && <p className="text-red-300 mt-4">{error}</p>}
        </form>

        {orderDetails.length > 0 && (
          <div className="mt-8 space-y-6">
            {orderDetails.map((order, idx) => (
              <div
                key={idx}
                className="p-6 border rounded shadow bg-white text-black"
              >
                <h2 className="text-2xl font-bold mb-2">Order ID: {order.id}</h2>
                <p><strong>Email:</strong> {order.email}</p>
                <p><strong>Phone:</strong> {order.phone || 'N/A'}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Title:</strong> {order.title}</p>
                <p><strong>Collection:</strong> {order.product_collection || 'N/A'}</p>
                {order.thumbnail && (
                  <img
                    src={order.thumbnail}
                    alt="Product"
                    className="mt-2 w-32 rounded shadow"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
