// "use client"

// import { isManual, isStripe } from "@lib/constants"
// import { placeOrder } from "@lib/data/cart"
// import { HttpTypes } from "@medusajs/types"
// import { Button } from "@medusajs/ui"
// import { useElements, useStripe } from "@stripe/react-stripe-js"
// import React, { useState } from "react"
// import ErrorMessage from "../error-message"

// type PaymentButtonProps = {
//   cart: HttpTypes.StoreCart
//   "data-testid": string
// }

// const PaymentButton: React.FC<PaymentButtonProps> = ({
//   cart,
//   "data-testid": dataTestId,
// }) => {
//   const notReady =
//     !cart ||
//     !cart.shipping_address ||
//     !cart.billing_address ||
//     !cart.email

//   const paymentSession = cart.payment_collection?.payment_sessions?.[0]

//   switch (true) {
//     case isStripe(paymentSession?.provider_id):
//       return (
//         <StripePaymentButton
//           notReady={notReady}
//           cart={cart}
//           data-testid={dataTestId}
//         />
//       )
//     case isManual(paymentSession?.provider_id):
//       return (
//         <ManualTestPaymentButton notReady={notReady} data-testid={dataTestId} />
//       )
//     default:
//       return <Button disabled>Select a payment method</Button>
//   }
// }

// const StripePaymentButton = ({
//   cart,
//   notReady,
//   "data-testid": dataTestId,
// }: {
//   cart: HttpTypes.StoreCart
//   notReady: boolean
//   "data-testid"?: string
// }) => {
//   const [submitting, setSubmitting] = useState(false)
//   const [errorMessage, setErrorMessage] = useState<string | null>(null)

//   const onPaymentCompleted = async () => {
//     await placeOrder()
//       .catch((err) => {
//         setErrorMessage(err.message)
//       })
//       .finally(() => {
//         setSubmitting(false)
//       })
//   }

//   const stripe = useStripe()
//   const elements = useElements()
//   const card = elements?.getElement("card")

//   const session = cart.payment_collection?.payment_sessions?.find(
//     (s) => s.status === "pending"
//   )

//   const disabled = !stripe || !elements ? true : false

//   const handlePayment = async () => {
//     setSubmitting(true)

//     if (!stripe || !elements || !card || !cart) {
//       setSubmitting(false)
//       return
//     }

//     await stripe
//       .confirmCardPayment(session?.data.client_secret as string, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name:
//               cart.billing_address?.first_name +
//               " " +
//               cart.billing_address?.last_name,
//             address: {
//               city: cart.billing_address?.city ?? undefined,
//               country: cart.billing_address?.country_code ?? undefined,
//               line1: cart.billing_address?.address_1 ?? undefined,
//               line2: cart.billing_address?.address_2 ?? undefined,
//               postal_code: cart.billing_address?.postal_code ?? undefined,
//               state: cart.billing_address?.province ?? undefined,
//             },
//             email: cart.email,
//             phone: cart.billing_address?.phone ?? undefined,
//           },
//         },
//       })
//       .then(({ error, paymentIntent }) => {
//         if (error) {
//           const pi = error.payment_intent

//           if (
//             (pi && pi.status === "requires_capture") ||
//             (pi && pi.status === "succeeded")
//           ) {
//             onPaymentCompleted()
//           }

//           setErrorMessage(error.message || null)
//           return
//         }

//         if (
//           (paymentIntent && paymentIntent.status === "requires_capture") ||
//           paymentIntent.status === "succeeded"
//         ) {
//           return onPaymentCompleted()
//         }

//         return
//       })
//   }

//   return (
//     <>
//       <Button
//         disabled={disabled || notReady}
//         onClick={handlePayment}
//         size="large"
//         isLoading={submitting}
//         data-testid={dataTestId}
//       >
//         Place order
//       </Button>
//       <ErrorMessage
//         error={errorMessage}
//         data-testid="stripe-payment-error-message"
//       />
//     </>
//   )
// }

// const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
//   const [submitting, setSubmitting] = useState(false)
//   const [errorMessage, setErrorMessage] = useState<string | null>(null)

//   const onPaymentCompleted = async () => {
//     await placeOrder()
//       .catch((err) => {
//         setErrorMessage(err.message)
//       })
//       .finally(() => {
//         setSubmitting(false)
//       })
//   }

//   const handlePayment = () => {
//     setSubmitting(true)

//     onPaymentCompleted()
//   }

//   return (
//     <>
//       <Button
//         disabled={notReady}
//         isLoading={submitting}
//         onClick={handlePayment}
//         size="large"
//         data-testid="submit-order-button"
//       >
//         Place order
//       </Button>
//       <ErrorMessage
//         error={errorMessage}
//         data-testid="manual-payment-error-message"
//       />
//     </>
//   )
// }

// export default PaymentButton




// "use client"

// import { placeOrder } from "@lib/data/cart"
// import { HttpTypes } from "@medusajs/types"
// import { Button } from "@medusajs/ui"
// import React, { useState } from "react"
// import ErrorMessage from "../error-message"

// type PaymentButtonProps = {
//   cart: HttpTypes.StoreCart
//   "data-testid": string
// }

// const PaymentButton: React.FC<PaymentButtonProps> = ({
//   cart,
//   "data-testid": dataTestId,
// }) => {
//   const notReady = !cart || !cart.email

//   return (
//     <RazorpayPaymentButton
//       notReady={notReady}
//       cart={cart}
//       data-testid={dataTestId}
//     />
//   )
// }

// const RazorpayPaymentButton = ({
//   cart,
//   notReady,
//   "data-testid": dataTestId,
// }: {
//   cart: HttpTypes.StoreCart
//   notReady: boolean
//   "data-testid"?: string
// }) => {
//   const [submitting, setSubmitting] = useState(false)
//   const [errorMessage, setErrorMessage] = useState<string | null>(null)

//   const onPaymentCompleted = async () => {
//     await placeOrder()
//       .catch((err) => {
//         setErrorMessage(err.message)
//       })
//       .finally(() => {
//         setSubmitting(false)
//       })
//   }

//   const handlePayment = async () => {
//     setSubmitting(true)

//     if (!cart) {
//       setSubmitting(false)
//       return
//     }

//     try {
//       const response = await fetch("http://localhost:3000/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           amount: cart.total,
//           currency: "INR",
//           receipt: cart.id,
//           notes: { cartId: cart.id },
//         }),
//       })

//       const order = await response.json()

//       if (!order || !order.id) {
//         throw new Error("Failed to create order.")
//       }

//       // ✅ Ensure Razorpay SDK is loaded
//       if (typeof window === "undefined" || typeof (window as any).Razorpay === "undefined") {
//         throw new Error("Payment system not ready. Please refresh the page.")
//       }

//       const razorpay = new (window as any).Razorpay({
//         key: "rzp_test_WnHmddUeak6QfC", // Replace with your Razorpay key
//         amount: order.amount,
//         currency: order.currency,
//         order_id: order.id,
//         handler: (response: any) => {
//           fetch("http://localhost:3000/api/verify-payment", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               razorpay_order_id: order.id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             }),
//           }).then(() => {
//             onPaymentCompleted()
//           }).catch((err) => {
//             setErrorMessage("Payment verification failed. Please try again.")
//             setSubmitting(false)
//           })
//         },
//         prefill: {
//           name: `${cart.billing_address?.first_name ?? ""} ${cart.billing_address?.last_name ?? ""}`,
//           email: cart.email,
//           contact: cart.billing_address?.phone ?? "",
//         },
//         notes: {
//           address: cart.billing_address?.address_1 ?? "",
//         },
//         theme: {
//           color: "#6366F1",
//         },
//       })

//       razorpay.open()
//     } catch (err: any) {
//       setErrorMessage(err.message || "Payment failed. Please try again.")
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <>
//       <Button
//         disabled={notReady}
//         onClick={handlePayment}
//         size="large"
//         isLoading={submitting}
//         data-testid={dataTestId}
//       >
//         Continue to Payment
//       </Button>
//       <ErrorMessage
//         error={errorMessage}
//         data-testid="razorpay-payment-error-message"
//       />
//     </>
//   )
// }

// export default PaymentButton



"use client"

import { placeOrder } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import React, { useState, useEffect } from "react"
import ErrorMessage from "../error-message"

type PaymentButtonProps = {
  cart: HttpTypes.StoreCart
  "data-testid": string
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  const notReady = !cart || !cart.email

  return (
    <RazorpayPaymentButton
      notReady={notReady}
      cart={cart}
      data-testid={dataTestId}
    />
  )
}

const RazorpayPaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: HttpTypes.StoreCart
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [razorpayScriptLoaded, setRazorpayScriptLoaded] = useState(false)

  useEffect(() => {
    // Function to check if Razorpay script is loaded
    const checkRazorpayScript = () => {
      if (typeof window !== "undefined" && typeof (window as any).Razorpay !== "undefined") {
        setRazorpayScriptLoaded(true)
      } else {
        setTimeout(checkRazorpayScript, 500) // Retry every 500ms
      }
    }

    // Dynamically load Razorpay script if not present
    if (typeof window !== "undefined" && typeof (window as any).Razorpay === "undefined") {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = checkRazorpayScript
      document.body.appendChild(script)
    } else {
      checkRazorpayScript()
    }

    return () => {
      // Cleanup the script if needed
      const script = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')
      // if (script) {
      //   document.body.removeChild(script)
      // }
    }
  }, [])

  const onPaymentCompleted = async () => {
    await placeOrder()
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const handlePayment = async () => {
    setSubmitting(true)

    if (!cart) {
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch("http://localhost:3000/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: cart.total,
          currency: "INR",
          receipt: cart.id,
          notes: { cartId: cart.id },
        }),
      })

      const order = await response.json()

      if (!order || !order.id) {
        throw new Error("Failed to create order.")
      }

      // Wait for Razorpay SDK to be ready
      if (!razorpayScriptLoaded) {
        setErrorMessage("Payment system not ready. Please refresh the page.")
        setSubmitting(false)
        return
      }

      const razorpay = new (window as any).Razorpay({
        key: "rzp_test_WnHmddUeak6QfC", // Replace with your Razorpay key
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        handler: (response: any) => {
          fetch("http://localhost:3000/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: order.id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          }).then(() => {
            onPaymentCompleted()
          }).catch((err) => {
            setErrorMessage("Payment verification failed. Please try again.")
            setSubmitting(false)
          })
        },
        prefill: {
          name: `${cart.billing_address?.first_name ?? ""} ${cart.billing_address?.last_name ?? ""}`,
          email: cart.email,
          contact: cart.billing_address?.phone ?? "",
        },
        notes: {
          address: cart.billing_address?.address_1 ?? "",
        },
        theme: {
          color: "#6366F1",
        },
      })

      razorpay.open()
    } catch (err: any) {
      setErrorMessage(err.message || "Payment failed. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Button
        disabled={notReady || !razorpayScriptLoaded}
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
        data-testid={dataTestId}
      >
        Continue to Payment
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="razorpay-payment-error-message"
      />
    </>
  )
}

export default PaymentButton
