// "use client"
// import { useState } from "react"
// import { HttpTypes } from "@medusajs/types"
// import { Container } from "@medusajs/ui"
// import Image from "next/image"

// type ImageGalleryProps = {
//   images: HttpTypes.StoreProductImage[]
// }

// const ImageGallery = ({ images }: ImageGalleryProps) => {
//   // Track which image is displayed in the main (hero) view
//   const [selectedIndex, setSelectedIndex] = useState(0)

//   return (
//     <div className="flex items-start gap-x-4 p-10">
//       {/* Left Column: Thumbnails */}
//       <div className="flex flex-col gap-y-4">
//         {images.map((image, index) => (
//           <Container
//             key={image.id}
//             onClick={() => setSelectedIndex(index)}
//             className="relative w-20 h-20 overflow-hidden bg-ui-bg-subtle cursor-pointer"
//           >
//             {!!image.url && (
//               <Image
//                 src={image.url}
//                 alt={`Thumbnail ${index + 1}`}
//                 fill
//                 className="object-cover rounded-rounded"
//               />
//             )}
//           </Container>
//         ))}
//       </div>

//       {/* Right Column: Main (Hero) Image */}
//       <div className="flex-1">
//         <Container className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle">
//           {!!images[selectedIndex]?.url && (
//             <Image
//               src={images[selectedIndex].url}
//               alt={`Product image ${selectedIndex + 1}`}
//               fill
//               className="absolute inset-0 rounded-rounded object-cover"
//               // Keep your responsive sizes if needed:
//               sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//             />
//           )}
//         </Container>
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
import { ChevronLeft, ChevronRight } from "lucide-react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const prev = () =>
    setSelectedIndex((i) => (i - 1 + images.length) % images.length)
  const next = () =>
    setSelectedIndex((i) => (i + 1) % images.length)

  if (!images.length) return null

  return (
    <>
      {/* Desktop & Tablet */}
      <div className="hidden md:flex items-start gap-x-4 p-10">
        {/* Thumbnails */}
        <div className="flex flex-col gap-y-4">
          {images.map((img, i) => (
            <Container
              key={img.id}
              onClick={() => setSelectedIndex(i)}
              className="relative w-20 h-20 overflow-hidden bg-ui-bg-subtle cursor-pointer"
            >
              {img.url && (
                <Image
                  src={img.url}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover rounded-rounded"
                />
              )}
            </Container>
          ))}
        </div>
        {/* Hero */}
        <div className="flex-1">
          <Container className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle">
            {images[selectedIndex].url && (
              <Image
                src={images[selectedIndex].url}
                alt={`Image ${selectedIndex + 1}`}
                fill
                className="absolute inset-0 rounded-rounded object-cover"
                sizes="(max-width: 992px) 480px, 800px"
              />
            )}
          </Container>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden h-[50vh]">
        {/* Hero fills full width with correct aspect ratio */}
        <Container className="relative w-full h-full overflow-hidden bg-ui-bg-subtle">
          {images[selectedIndex].url && (
            <Image
              src={images[selectedIndex].url}
              alt={`Image ${selectedIndex + 1}`}
              fill
              className="absolute inset-0 rounded-rounded object-cover"
              sizes="100vw"
            />
          )}
        </Container>
        {/* Buttons below */}
        <div className="flex justify-center gap-x-6 mt-4">
          <button
            onClick={prev}
            aria-label="Previous image"
            className="flex items-center justify-center w-10 h-10 bg-ui-bg-subtle rounded-full shadow"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="flex items-center justify-center w-10 h-10 bg-ui-bg-subtle rounded-full shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  )
}

export default ImageGallery
