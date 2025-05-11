"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Delivery",
      component: <ShippingInfoTab />,
    },
    // {
    //   label: "Buyback Info",
    //   component: <Buyback />,
    // }
  ]

  return (
    <div className="w-full font-semibold text-xl font-cormorant">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={<span className="font-cormorant text-xl">
            {tab.label}
          </span>}
            headingSize="medium"
            value={tab.label}
            font="cormorant"
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="text-lg font-cormorant">Material</span>
            <p className="text-sm">Made in brass with 22k Gold Plating.</p>
          </div>
          <div>
            <span className="text-lg font-cormorant">Country of origin</span>
            <p className="text-sm">India</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="text-lg font-cormorantfont-semibold">Weight</span>
            <p className="text-sm">{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="text-lg font-cormorant">Size (Length)</span>
            <p className="text-sm">
              {product.length
                ? `${product.length}cm`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="text-xl">Fast delivery</span>
            <p className="max-w-sm text-sm">
            Your delivery time begins from the date your order is confirmed. 
            We typically ship products within 1-2 working business days from the date the order is placed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// const Buyback = () => {
//   return (
//     <div className="text-small-regular py-8">
//       <div className="grid grid-cols-1 gap-y-8">
//         <div className="flex items-start gap-x-2">
//           <div>
//             <span className="font-semibold">Fast delivery</span>
//             <p className="max-w-sm">
//               Your package will arrive in 3-5 business days at your pick up
//               location or in the comfort of your home.
//             </p>
//           </div>
//         </div>
//         <div className="flex items-start gap-x-2">
//           <div>
//             <span className="font-semibold">Simple exchanges</span>
//             <p className="max-w-sm">
//               Is the fit not quite right? No worries - we&apos;ll exchange your
//               product for a new one.
//             </p>
//           </div>
//         </div>
//         <div className="flex items-start gap-x-2">
//           <div>
//             <span className="font-semibold">Easy returns</span>
//             <p className="max-w-sm">
//               Just return your product and we&apos;ll refund your money. No
//               questions asked – we&apos;ll do our best to make sure your return
//               is hassle-free.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


export default ProductTabs
