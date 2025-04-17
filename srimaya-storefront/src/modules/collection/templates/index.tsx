// import { Suspense } from "react"

// import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
// import RefinementList from "@modules/store/components/refinement-list"
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
// import PaginatedProducts from "@modules/store/templates/paginated-products"
// import { HttpTypes } from "@medusajs/types"

// export default function CollectionTemplate({
//   sortBy,
//   collection,
//   page,
//   countryCode,
// }: {
//   sortBy?: SortOptions
//   collection: HttpTypes.StoreCollection
//   page?: string
//   countryCode: string
// }) {
//   const pageNumber = page ? parseInt(page) : 1
//   const sort = sortBy || "created_at"

//   return (
//     <div className="flex flex-col small:flex-row small:items-start py-6 content-container w-screen">
//       <RefinementList sortBy={sort} />
//       <div className="w-full">
//         <div className="mb-8 text-2xl-semi">
//           <h1>{collection.title}</h1>
//         </div>
//         <Suspense
//           fallback={
//             <SkeletonProductGrid
//               numberOfProducts={collection.products?.length}
//             />
//           }
//         >
//           <PaginatedProducts
//             sortBy={sort}
//             page={pageNumber}
//             collectionId={collection.id}
//             countryCode={countryCode}
//           />
//         </Suspense>
//       </div>
//     </div>
//   )
// }


import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlocksPage = () => {
  return (
    <main className="w-screen bg-white py-10">
  <div className="max-w-7xl mx-auto px-4 grid grid-rows-2 md:grid-cols-1 gap-8">
    {/* Block 1 */}
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] sm:h-[700px]">
      <Image
        src="/sanjhsavera/image.JPG"
        alt="Saanjh Savera Collection"
        fill
        className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#4a0600] bg-opacity-50 p-4 sm:p-6 md:p-10">
        <h2 className="font-snell text-white text-4xl sm:text-5xl font-semibold mb-2 text-center">
          Sanjh Savera
        </h2>
        <h3 className="font-snell text-white text-2xl sm:text-3xl mb-4 text-center">
          The Poetry of Dawn & Dusk
        </h3>
        <p className="text-white text-base sm:text-xl mb-4 sm:mb-6 font-cormorant text-justify sm:text-center sm:px-4">
          The Saanjh Savera collection is a celebration of timeless beauty and effortless elegance, inspired by the soft glow of dawn and the serene embrace of dusk...
          <br />
          Crafted with gold-plated alloys and adorned with pearls, tourmaline, and semi-precious gemstones, each piece reflects the ever-changing hues of nature...
          <br />
          A collection where every sunrise and sunset is woven into gold—versatile, radiant, and effortlessly chic.
        </p>
        <Link
          href="/store"
          className="bg-[#052715] text-white py-3 px-6 text-lg rounded hover:bg-[#333] transition font-cormorant"
        >
          Check it out
        </Link>
      </div>
    </div>

    {/* Block 2 */}
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] sm:h-[700px]">
      <Image
        src="/mainslide/image3.jpeg"
        alt="Ratna Raga Collection"
        fill
        className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#4a0600] bg-opacity-50 p-4 sm:p-6 md:p-10">
        <h2 className="font-snell text-white text-4xl sm:text-5xl font-semibold mb-2 text-center">
          Ratna Raga
        </h2>
        <h3 className="font-snell text-white text-xl sm:text-3xl mb-4 text-center">
          A Symphony of Gemstones and Heritage
        </h3>
        <p className="text-white text-base sm:text-xl mb-4 sm:mb-6 font-cormorant text-justify sm:text-center sm:px-4">
          The Ratna Raga collection is an exquisite ode to Indian craftsmanship, where the timeless beauty of semi-precious gemstones meets the rhythm of tradition...
          <br />
          Crafted with silver alloy dipped in 24-carat gold plating, the designs feature Belur Polki, Tourmaline, Semi-Emeralds, Freshwater Pearls, and Swarovski crystals...
          <br />
          Ratna Raga is not just jewellery—it is an expression of the soul, a dance of light on gold, and a tribute to the timeless beauty of the Indian woman.
        </p>
        <Link
          href="/page1"
          className="bg-[#052715] text-white py-3 px-6 text-lg rounded hover:bg-[#333] transition font-cormorant"
        >
          Coming soon
        </Link>
      </div>
    </div>
  </div>
</main>

  );
};

export default BlocksPage;
