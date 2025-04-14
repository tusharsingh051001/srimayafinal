// import { listProducts } from "@lib/data/products"
// import { getRegion } from "@lib/data/regions"
// import { HttpTypes } from "@medusajs/types"
// import Product from "../product-preview"

// type RelatedProductsProps = {
//   product: HttpTypes.StoreProduct
//   countryCode: string
// }

// export default async function RelatedProducts({
//   product,
//   countryCode,
// }: RelatedProductsProps) {
//   const region = await getRegion(countryCode)

//   if (!region) {
//     return null
//   }

//   // edit this function to define your related products logic
//   const queryParams: HttpTypes.StoreProductParams = {}
//   if (region?.id) {
//     queryParams.region_id = region.id
//   }
//   if (product.collection_id) {
//     queryParams.collection_id = [product.collection_id]
//   }
//   if (product.tags) {
//     queryParams.tag_id = product.tags
//       .map((t) => t.id)
//       .filter(Boolean) as string[]
//   }
//   queryParams.is_giftcard = false

//   const products = await listProducts({
//     queryParams,
//     countryCode,
//   }).then(({ response }) => {
//     return response.products.filter(
//       (responseProduct) => responseProduct.id !== product.id
//     )
//   })

//   if (!products.length) {
//     return null
//   }

//   return (
//     <div className="product-page-constraint">
//       <div className="flex flex-col items-center text-center mb-8">
//         {/* <span className="text-base-regular text-gray-600 mb-6">
//           Related products
//         </span> */}
//         <p className="text-3xl font-cormorant font-bold max-w-lg">
//         You may also like
//         </p>
//       </div>

//       <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-3 gap-x-6 gap-y-8">
//         {products.map((product) => (
//           <li key={product.id}>
//             <Product region={region} product={product} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }



import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const queryParams: HttpTypes.StoreProductParams = {}
  if (region?.id) {
    queryParams.region_id = region.id
  }
  if (product.collection_id) {
    queryParams.collection_id = [product.collection_id]
  }
  if (product.tags) {
    queryParams.tag_id = product.tags
      .map((t) => t.id)
      .filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await listProducts({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    return response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  })

  // Limit to only 3 products to render exactly one row of three products.
  const displayProducts = products.slice(0, 3)

  if (!displayProducts.length) {
    return null
  }

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-8">
        <p className="text-3xl font-cormorant font-bold max-w-lg">
          You may also like
        </p>
      </div>

      <ul className="grid grid-cols-3 gap-x-6 gap-y-8">
        {displayProducts.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
