// import { Badge } from "@medusajs/ui"

// const PaymentTest = ({ className }: { className?: string }) => {
//   return (
//     <Badge color="orange" className="whitespace:nowrap" {className}>
//       <span className="font-semibold">Attention:</span> A seperate payment link will be sent to you within a few hours of placing the order. 
//       Kindly complete the payment on the link to confirm the order
//     </Badge>
//   )
// }

// export default PaymentTest

import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={`w-full block font-cormorant text-sm ${className ?? ""}`}>
      <span className="font-semibold font-cormorant">Attention:</span> A separate payment link will be sent to you within a few hours of placing the order.
    </Badge>
  )
}

export default PaymentTest
