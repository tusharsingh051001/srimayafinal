import { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "./paginated-products"
import Link from "next/link";


const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page, 10) : 1
  const sort = sortBy || "created_at"

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-10 px-6 content-container space-y-8 small:space-y-0 small:space-x-8"
      data-testid="category-container"
    >
      <RefinementList sortBy={sort} />

      <div className="w-full">
        <div className="mb-8 text-3xl-semi font-snell">
          <h1 data-testid="store-page-title">All products</h1>
        </div>
        <div className="w-full flex gap-6 mb-12">
          <Link href="/collections" className="bg-[#052715] text-white py-6 text-3xl font-snell rounded-lg hover:bg-maroon-800 transition w-1/2 text-center">
              Shop by Collection
          </Link>
          <Link href="/category" className="bg-[#052715] text-white py-6 text-3xl font-snell rounded-lg hover:bg-maroon-800 transition w-1/2 text-center">
              Shop by Category
          </Link>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
