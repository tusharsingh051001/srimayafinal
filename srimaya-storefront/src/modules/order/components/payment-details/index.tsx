// import { Container, Heading, Text } from "@medusajs/ui"

// import { isStripe, paymentInfoMap } from "@lib/constants"
// import Divider from "@modules/common/components/divider"
// import { convertToLocale } from "@lib/util/money"
// import { HttpTypes } from "@medusajs/types"

// type PaymentDetailsProps = {
//   order: HttpTypes.StoreOrder
// }

// const PaymentDetails = ({ order }: PaymentDetailsProps) => {
//   const payment = order.payment_collections?.[0].payments?.[0]

//   return (
//     <div>
//       <Heading level="h2" className="flex flex-row text-3xl-regular my-6">
//         Payment
//       </Heading>
//       <div>
//         {payment && (
//           <div className="flex items-start gap-x-1 w-full">
//             <div className="flex flex-col w-1/3">
//               <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                 Payment method
//               </Text>
//               <Text
//                 className="txt-medium font-cormorant"
//                 data-testid="payment-method"
//               >
//                 {paymentInfoMap[payment.provider_id].title}
//               </Text>
//             </div>
//             <div className="flex flex-col w-2/3">
//               <Text className="txt-medium-plus text-ui-fg-base mb-1">
//                 Payment details
//               </Text>
//               <div className="flex gap-2 txt-medium font-cormorant items-center">
//                 <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
//                   {paymentInfoMap[payment.provider_id].icon}
//                 </Container>
//                 <Text data-testid="payment-amount">
//                   {isStripe(payment.provider_id) && payment.data?.card_last4
//                     ? `**** **** **** ${payment.data.card_last4}`
//                     : `${convertToLocale({
//                         amount: payment.amount,
//                         currency_code: order.currency_code,
//                       })} paid at ${new Date(
//                         payment.created_at ?? ""
//                       ).toLocaleString()}`}
//                 </Text>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <Divider className="mt-8" />
//     </div>
//   )
// }

// export default PaymentDetails



import { Container, Heading, Text } from "@medusajs/ui"

import { isStripe, paymentInfoMap } from "@lib/constants"
import Divider from "@modules/common/components/divider"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type PaymentDetailsProps = {
  order: HttpTypes.StoreOrder
}

const PaymentDetails = ({ order }: PaymentDetailsProps) => {
  const payment = order.payment_collections?.[0]?.payments?.[0]

  const getPaymentDetailsText = () => {
    if (!payment) return ""

    const date = new Date(payment.created_at ?? "").toLocaleString()
    const amount = convertToLocale({
      amount: payment.amount,
      currency_code: order.currency_code,
    })

    // Stripe: show card details if available
    if (isStripe(payment.provider_id)) {
      const last4 = payment.data?.card_last4
      const brand = payment.data?.card_brand
      if (last4) {
        return `${brand ? brand + " " : ""}**** **** **** ${last4}`
      } else {
        return `${amount} paid at ${date}`
      }
    }

    // Razorpay: show Razorpay ID or fallback text
    if (payment.provider_id === "razorpay") {
      const rzpId = payment.data?.razorpay_payment_id || payment.data?.id
      return `${amount} paid via Razorpay${rzpId ? ` (ID: ${rzpId})` : ""} at ${date}`
    }

    // Fallback
    return `${amount} paid at ${date}`
  }

  return (
    <div>
      <Heading level="h2" className="flex flex-row text-3xl-regular font-cormorant">
      Payment
      </Heading>

      {payment && (
        <div className="flex items-start gap-x-1 w-full">
          <div className="flex flex-col w-1/3">
            <Text className="txt-medium-plus font-cormorant text-xl mb-1">
              Payment method
            </Text>
            <Text
              className="text-lg font-cormorant"
              data-testid="payment-method"
            >
              {paymentInfoMap[payment.provider_id]?.title ?? payment.provider_id}
            </Text>
          </div>

          <div className="flex flex-col w-2/3">
            <Text className="txt-medium-plus font-cormorant text-xl text mb-1">
              Payment details
            </Text>
            <div className="flex gap-2 txt-medium font-cormorant text-lg items-center">
              <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                {paymentInfoMap[payment.provider_id]?.icon}
              </Container>
              <Text className="font-cormorant" data-testid="payment-amount">{getPaymentDetailsText()}</Text>
            </div>
          </div>
        </div>
      )}

      <Divider className="mt-8" />
    </div>
  )
}

export default PaymentDetails
