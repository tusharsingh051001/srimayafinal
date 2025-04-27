import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import ShopDropdown from "@modules/layout/components/ShopDropdown"
import Link from "next/link"
import Image from "next/image"
import MobileNavMenu from "./MobileNavMenu"

export default function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="w-full border-b bg-white border-ui-border-base">
        {/* Top Bar */}
        <div className="w-full flex items-center justify-end px-4 py-2 bg-[#4a0600] font-bloverly text-white">
          <LocalizedClientLink
            className="hover:text-white transition-colors duration-200 mr-6"
            href="/account"
          >
            Account
          </LocalizedClientLink>
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-white transition-colors duration-200"
                href="/cart"
              >
                Cart (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-full bg-white px-4 py-3 font-bloverly">
  <div className="max-w-7xl mx-auto flex items-center justify-between w-full relative m-5">
    {/* Left Nav */}
    <nav className="flex items-center space-x-6 md:space-x-16 flex-grow">
      <Link href="/" className="font-cormorant text-3xl hover:text-gray-900">Home</Link>
      <Link href="/about" className="font-cormorant text-3xl hover:text-gray-900">About Us</Link>
      <Suspense fallback={<Link href="/store" className="font-cormorant text-3xl">Shop</Link>}>
        <ShopDropdown />
      </Suspense>
    </nav>

    {/* Logo */}
    <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 my-4 md:my-0">
      <div className="relative w-48 h-16">
        <Image src="/logo/image.png" alt="Logo" layout="intrinsic" width={200} height={70} />
      </div>
    </Link>

    {/* Right Nav */}
    <nav className="flex items-center space-x-6 md:space-x-12 flex-grow justify-end">
      <Link href="/collections" className="font-cormorant text-3xl hover:text-gray-900">Collections</Link>
      <Link href="/contact" className="font-cormorant text-3xl hover:text-gray-900">Contact Us</Link>
    </nav>
  </div>
</div>


        {/* Mobile Menu (only visible on mobile) */}
        <div className="md:hidden px-4 py-4">
          <MobileNavMenu />
        </div>
      </header>
    </div>
  )
}
