import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container w-screen">
      <RefinementList sortBy={sort} />
      <div className="w-full">
        <div className="mb-8 text-3xl font-cormorant">
          <h1>{collection.title}</h1>
        </div>
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={collection.products?.length}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}




// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const BlocksPage = () => {
//   return (
//     <main className="w-screen bg-white py-10">
//       <div className="max-w-7xl mx-auto px-4 grid grid-rows-2 md:grid-cols-1 gap-8">
//         {/* Block 1 */}
//         <div className="relative group overflow-hidden rounded-lg shadow-lg">
//           <Image
//             src="/sanjhsavera/image.JPG"
//             alt="Saanjh Savera Collection"
//             width={1400}
//             height={600}
//             className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#4a0600] bg-opacity-50 p-10">
//             <h2 className="font-snell text-white text-5xl font-semibold mb-2">
//               Sanjh Savera
//             </h2>
//             <h3 className="font-snell text-white text-3xl mb-4">
//               The Poetry of Dawn & Dusk
//             </h3>
//             <p className="text-white text-2xl mb-6 font-cormorant text-justify">
//               The Saanjh Savera collection is a celebration of timeless beauty and effortless elegance, inspired by the soft glow of dawn and the serene embrace of dusk. Designed for the modern woman who moves seamlessly between tradition and contemporary life, this collection brings together the best of heritage craftsmanship and everyday wearability.
//               <br /><br />
//               Crafted with gold-plated alloys and adorned with pearls, tourmaline, and semi-precious gemstones, each piece reflects the ever-changing hues of nature. From the Royal Dawn Dangles, which shimmer like the first morning light, to the Phooljhadi Drops, reminiscent of festive evenings, every design is meant to be worn with ease and confidence.
//               <br /><br />
//               With fluid silhouettes, delicate floral motifs, and lightweight comfort, Saanjh Savera is more than just jewellery—it&apos;s an everyday essential for the woman who embraces grace, tradition, and modernity in equal measure.
//               <br /><br />
//               A collection where every sunrise and sunset is woven into gold—versatile, radiant, and effortlessly chic.
//             </p>
//             <Link
//               // href="/collections/sanjhsavera"
//               href="/store"
//               className="bg-[#052715] text-white py-3 px-6 text-2xl rounded hover:bg-[#333] transition font-cormorant"
//             >
//               Check it out
//             </Link>
//           </div>
//         </div>

//         {/* Block 2 */}
//         <div className="relative group overflow-hidden rounded-lg shadow-lg">
//           <Image
//             src="/mainslide/image3.jpeg"
//             alt="Ratna Raga Collection"
//             fill
//             className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#4a0600] bg-opacity-50 p-10">
//             <h2 className="font-snell text-white text-5xl font-semibold mb-2">
//               Ratna Raga
//             </h2>
//             <h3 className="font-snell text-white text-3xl mb-4">
//               A Symphony of Gemstones and Heritage
//             </h3>
//             <p className="text-white text-2xl mb-6 font-cormorant text-justify">
//               The Ratna Raga collection is an exquisite ode to Indian craftsmanship, where the timeless beauty of semi-precious gemstones meets the rhythm of tradition. Inspired by the fluid elegance of Indian classical melodies, each piece in this collection tells a story of grace, heritage, and delicate femininity.
//               <br /><br />
//               Crafted with silver alloy dipped in 24-carat gold plating, the designs feature Belur Polki, Tourmaline, Semi-Emeralds, Freshwater Pearls, and Swarovski crystals, evoking the grandeur of royal jewellery while retaining an ethereal, contemporary charm.
//               <br /><br />
//               From intricately designed Lotus-inspired rings to elegant neckpieces adorned with pearls and polki, each piece reflects the essence of traditional motifs blended with modern sophistication. Adjustable rings, stem-push earrings, and delicate bracelets ensure versatility, making the collection perfect for both festive and everyday elegance.
//               <br /><br />
//               Ratna Raga is not just jewellery—it is an expression of the soul, a dance of light on gold, and a tribute to the timeless beauty of the Indian woman.
//             </p>
//             <Link
//               href="/page1"
//               className="bg-[#052715] text-white py-3 px-6 text-2xl rounded hover:bg-[#333] transition font-cormorant"
//             >
//                 Coming soon
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default BlocksPage;
