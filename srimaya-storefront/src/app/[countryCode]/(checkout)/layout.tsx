// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import ChevronDown from "@modules/common/icons/chevron-down"

// export default function CheckoutLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="w-screen bg-white relative small:min-h-screen">
//       <div className="h-16 bg-[#4a0600] border-b w-full">
//         <nav className="flex h-full items-center content-container justify-between bg-[#4a0600] w-full">
//           <LocalizedClientLink
//             href="/cart"
//             className="text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0"
//             data-testid="back-to-cart-link"
//           >
//             <ChevronDown className="rotate-90 text-white" size={20} />
//             <span className="text-md font-cormorant uppercase text-white hover:text-grey-700">
//               Back to shopping cart
//             </span>
//           </LocalizedClientLink>
//           <LocalizedClientLink
//             href="/"
//             className="text-3xl font-cormorant uppercase text-white hover:text-grey-700"
//             data-testid="store-link"
//           >
//             Srimaya
//           </LocalizedClientLink>
//           <div className="flex-1 basis-0" />
//         </nav>
//       </div>
//       <div className="relative" data-testid="checkout-container">{children}</div>
//     </div>
//   )
// }


import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import Script from "next/script"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-screen bg-white relative small:min-h-screen">
      {/* Razorpay Script */}
      <link rel="preload" href="https://checkout.razorpay.com/v1/checkout.js" as="script" />

      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />

      <div className="h-16 bg-[#4a0600] border-b w-full">
        <nav className="flex h-full items-center content-container justify-between bg-[#4a0600] w-full">
          <LocalizedClientLink
            href="/cart"
            className="text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90 text-white" size={20} />
            <span className="text-md font-cormorant uppercase text-white hover:text-grey-700">
              Back to shopping cart
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="text-3xl font-cormorant uppercase text-white hover:text-grey-700"
            data-testid="store-link"
          >
            Srimaya
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
    </div>
  )
}
