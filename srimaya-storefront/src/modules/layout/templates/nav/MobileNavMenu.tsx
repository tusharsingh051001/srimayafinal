"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Toggle button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="relative w-36 h-12 mx-auto">
          <img src="/logo/image.png" alt="Logo" className="w-full h-full object-contain" />
        </div>

        <div className="w-8 h-8" /> {/* Right spacing */}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="flex flex-col bg-white mt-4 p-4 rounded-md shadow-md space-y-4 font-cormorant text-2xl">
          <button onClick={() => handleLinkClick("/")}>Home</button>
          <button onClick={() => handleLinkClick("/about")}>About Us</button>
          <button onClick={() => handleLinkClick("/store")}>Shop</button>
          <button onClick={() => handleLinkClick("/collections")}>Collections</button>
          <button onClick={() => handleLinkClick("/contact")}>Contact Us</button>
        </div>
      )}
    </>
  )
}
