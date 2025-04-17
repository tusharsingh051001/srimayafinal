import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import EmptyCartMessage from "@modules/cart/components/empty-cart-message"


export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

export default async function Cart() {
  const cart = await retrieveCart()
  const customer = await retrieveCustomer()

  if (!cart) {
    return (
      <div className="flex items-center justify-center p-10">
  <EmptyCartMessage />
</div>)
  }

  return <CartTemplate cart={cart} customer={customer} />
}
