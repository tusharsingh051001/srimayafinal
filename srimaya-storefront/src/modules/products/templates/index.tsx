import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container flex flex-col small:flex-row small:items-start py-6 relative font-cormorant"
        data-testid="product-container"
      >
        <div className="block w-1/2 relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="pt-10 w-1/2">
        <div className="flex flex-col small:top-48 small:py-0 small:max-w-full w-full py-8 gap-y-6 p-10 pt-5">
        <ProductInfo product={product} />
          {/* <ProductOnboardingCta /> */}
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col small:top-48 small:py-0 small:max-w-1/2 w-full py-8 gap-y-6 p-10 pt-5">
          <ProductTabs product={product} />
        </div>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-5"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
