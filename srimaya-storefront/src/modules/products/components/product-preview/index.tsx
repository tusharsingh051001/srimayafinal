import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const pricedProduct = await listProducts({
    regionId: region.id,
    queryParams: { id: [product.id!] },
  }).then(({ response }) => response.products[0])

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex txt-compact-medium mt-4 grid grid-row-2 md:grid-col-2">
          <Text className="text-ui-fg-subtle" data-testid="product-title">
            <span className="font-cormorant text-xl">{product.title}</span>
          </Text>
          <div className="flex items-center gap-x-2">
          <span className="text-xl">{cheapestPrice && <PreviewPrice price={cheapestPrice} />}</span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
