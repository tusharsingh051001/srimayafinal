import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import ShopDropdown from "@modules/layout/components/ShopDropdown"
import Link from "next/link"
import Image from "next/image"


// export default function Nav() {
//   return (
//     <div className="sticky top-0 inset-x-0 z-50">
//       <header className="w-full border-b bg-white border-ui-border-base">
//         {/* Top Bar */}
//         <div
//           className="w-full flex items-center justify-end px-4 py-2 bg-[#4a0600] font-bloverly text-white"
//         >
//           <LocalizedClientLink
//             className="hover:text-white transition-colors duration-200 mr-6"
//             href="/account"
//             data-testid="nav-account-link"
//           >
//             Account
//           </LocalizedClientLink>
//           <Suspense
//             fallback={
//               <LocalizedClientLink
//                 className="hover:text-white transition-colors duration-200"
//                 href="/cart"
//                 data-testid="nav-cart-link"
//               >
//                 Cart (0)
//               </LocalizedClientLink>
//             }
//           >
//             <CartButton />
//           </Suspense>
//         </div>

//         {/* Main Nav */}
//         <div className="w-full bg-white px-4 py-3 font-bloverly">
//           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//             {/* Left Navigation */}
//             <nav className="flex items-center space-x-6 md:space-x-16">
//               <Link
//                 href="/"
//                 className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
//               >
//                 About Us
//               </Link>
//               <Suspense
//                 fallback={
//                   <Link
//                       href="/store"
//                       className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
//                     >
//                       Shop
//                     </Link>
//                       }
//                     >
//                 <ShopDropdown />
//               </Suspense>
//             </nav>

//             {/* Center Logo */}
//             <Link href="/" className="my-4 md:my-0">
//               <div className="relative w-48 h-16">
//                 <Image
//                   src="/logo/image.png"
//                   alt="Logo"
//                   layout="intrinsic"
//                   width={200}
//                   height={70}
//                   className="object-contain"
//                 />
//               </div>
//             </Link>

//             {/* Right Navigation */}
//             <nav className="flex items-center space-x-6 md:space-x-12">
//               <Link
//                 href="/collections"
//                 className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
//               >
//                 Collections
//               </Link>
//               <Link
//                 href="/contact"
//                 className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
//               >
//                 Contact Us
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </div>
//   )
// }



export default function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="w-full border-b bg-white border-ui-border-base">

        {/* Top Bar */}
        <div className="w-full flex items-center justify-end px-4 py-2 bg-[#4a0600] font-bloverly text-white">
          <LocalizedClientLink
            className="hover:text-white transition-colors duration-200 mr-6"
            href="/account"
            data-testid="nav-account-link"
          >
            Account
          </LocalizedClientLink>
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-white transition-colors duration-200"
                href="/cart"
                data-testid="nav-cart-link"
              >
                Cart (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>

        {/* Desktop Nav – visible on large screens and above */}
        <div className="hidden lg:flex max-w-7xl mx-auto items-center justify-between bg-white px-4 py-3 font-bloverly">
          <div className="max-w-7xl mx-auto flex flex-row items-center justify-between w-full">
            {/* Left Navigation */}
            <nav className="flex items-center space-x-6 lg:space-x-16">
              <Link
                href="/"
                className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
              >
                About Us
              </Link>
              <Suspense
                fallback={
                  <Link
                    href="/store"
                    className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
                  >
                    Shop
                  </Link>
                }
              >
                <ShopDropdown />
              </Suspense>
            </nav>

            {/* Center Logo */}
            <Link href="/" className="my-4 lg:my-0">
              <div className="relative w-48 h-16">
                <Image
                  src="/logo/image.png"
                  alt="Logo"
                  layout="intrinsic"
                  width={200}
                  height={70}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Right Navigation */}
            <nav className="flex items-center space-x-6 lg:space-x-12">
              <Link
                href="/collections"
                className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
              >
                Collections
              </Link>
              <Link
                href="/contact"
                className="font-cormorant text-3xl hover:text-gray-900 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile & Tablet Nav – visible on screens smaller than lg */}
        <div className="lg:hidden px-4 py-4">
          {/* Wrapper for toggle + logo + menu */}
          <div className="relative">
            {/* Hidden checkbox controls the toggle */}
            <input type="checkbox" id="menu-toggle" className="hidden peer" />

            {/* Hamburger Icon and Logo */}
            <div className="flex items-center justify-between">
              <label htmlFor="menu-toggle" className="cursor-pointer">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>

              {/* Center logo */}
              <Link href="/" className="mx-auto">
                <div className="relative w-36 h-12">
                  <Image 
                    src="/logo/image.png" 
                    alt="Logo" 
                    layout="fill" 
                    objectFit="contain" 
                  />
                </div>
              </Link>

              <div className="w-8 h-8" /> {/* Empty spacer for symmetry */}
            </div>

            {/* Dropdown menu that toggles on checkbox */}
            <div className="mt-4 hidden flex-col space-y-4 peer-checked:flex bg-white shadow-lg p-4 z-50 absolute left-0 right-0">
              <Link href="/" className="font-cormorant text-xl hover:text-gray-900 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="font-cormorant text-xl hover:text-gray-900 transition-colors duration-200">
                About Us
              </Link>
              <Link href="/store" className="font-cormorant text-xl hover:text-gray-900 transition-colors duration-200">
                Shop
              </Link>
              <Link href="/collections" className="font-cormorant text-xl hover:text-gray-900 transition-colors duration-200">
                Collections
              </Link>
              <Link href="/contact" className="font-cormorant text-xl hover:text-gray-900 transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}
