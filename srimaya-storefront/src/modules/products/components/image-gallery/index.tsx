// import { HttpTypes } from "@medusajs/types"
// import { Container } from "@medusajs/ui"
// import Image from "next/image"

// type ImageGalleryProps = {
//   images: HttpTypes.StoreProductImage[]
// }

// const ImageGallery = ({ images }: ImageGalleryProps) => {
//   return (
//     <div className="flex items-start relative">
//       <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
//         {images.map((image, index) => {
//           return (
//             <Container
//               key={image.id}
//               className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
//               id={image.id}
//             >
//               {!!image.url && (
//                 <Image
//                   src={image.url}
//                   priority={index <= 2 ? true : false}
//                   className="absolute inset-0 rounded-rounded"
//                   alt={`Product image ${index + 1}`}
//                   fill
//                   sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                   style={{
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//             </Container>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ImageGallery
"use client"
import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  // Track which image is displayed in the main (hero) view
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex items-start gap-x-4 p-10">
      {/* Left Column: Thumbnails */}
      <div className="flex flex-col gap-y-4">
        {images.map((image, index) => (
          <Container
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className="relative w-20 h-20 overflow-hidden bg-ui-bg-subtle cursor-pointer"
          >
            {!!image.url && (
              <Image
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover rounded-rounded"
              />
            )}
          </Container>
        ))}
      </div>

      {/* Right Column: Main (Hero) Image */}
      <div className="flex-1">
        <Container className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle">
          {!!images[selectedIndex]?.url && (
            <Image
              src={images[selectedIndex].url}
              alt={`Product image ${selectedIndex + 1}`}
              fill
              className="absolute inset-0 rounded-rounded object-cover"
              // Keep your responsive sizes if needed:
              sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            />
          )}
        </Container>
      </div>
    </div>
  )
}

export default ImageGallery
