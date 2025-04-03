"use client"

import { setAddresses } from "@lib/data/cart"
import { CheckCircleSolid } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import Spinner from "@modules/common/icons/spinner"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useActionState } from "react"
import ShippingAddress from "../shipping-address"
import ErrorMessage from "../error-message"
import PaymentButton from "../payment-button"
import { isNull } from "lodash"


const Addresses = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const isOpen = searchParams.get("step") === "address"
  const handleEdit = () => {
    router.push(pathname + "?step=address")
  }
  const [message, formAction] = useActionState(setAddresses, null)

  return (
    <div className="bg-white font-cormorant text-xl">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className="flex flex-row text-3xl gap-x-2 items-baseline font-cormorant text-3xl"
        >
          Shipping Address
          {!isOpen && <CheckCircleSolid />}
        </Heading>
        {!isOpen && cart?.shipping_address && (
          <Text>
            <button
              onClick={handleEdit}
              className="font-cormorant text-xl"
              data-testid="edit-address-button"
            >
              Edit
            </button>
          </Text>
        )}
      </div>
      {isOpen ? (
        <form action={formAction}>
          <div className="pb-8">
            <ShippingAddress
              customer={customer}
              cart={cart}
              checked={true}
            />
            <ErrorMessage error={message} data-testid="address-error-message" />
          </div>
        </form>
      ) : (
        <div>
          <div className="pb-8">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                  <div className="flex flex-col w-1/2">
                    <Text className="font-cormorant text-xl mb-1">
                      Shipping Address
                    </Text>
                    <Text className="font-cormorant text-xl">
                      {cart.shipping_address.first_name}{" "}
                      {cart.shipping_address.last_name}
                    </Text>
                    <Text className="font-cormorant text-xl">
                      {cart.shipping_address.address_1}{" "}
                      {cart.shipping_address.address_2}
                    </Text>
                    <Text className="font-cormorant text-xl">
                      {cart.shipping_address.postal_code},{" "}
                      {cart.shipping_address.city}
                    </Text>
                    <Text className="font-cormorant text-xl">
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </Text>
                  </div>

                  <div
                    className="flex flex-col w-1/3"
                    data-testid="shipping-contact-summary"
                  >
                    <Text className="font-cormorant text-xl mb-1">
                      Contact
                    </Text>
                    <Text className="font-cormorant text-xl">
                      {cart.shipping_address.phone}
                    </Text>
                    <Text className="font-cormorant text-xl">
                      {cart.email}
                    </Text>
                  </div>
              </div>
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </div>
        </div>
      )}
      <PaymentButton cart={cart} data-testid="submit-order-button" />
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses
