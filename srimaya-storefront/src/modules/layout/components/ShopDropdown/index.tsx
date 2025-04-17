"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const timeoutRef = useRef(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setOpenCategory(null);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/store"
        className="font-cormorant text-3xl px-4 py-2 hover:text-gray-900 transition-colors duration-200"
      >
        Shop
      </Link>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded-md z-50">
          <ul className="py-2">
            <li className="px-4 py-2">
              <button
                onClick={() => toggleCategory("Categories")}
                className="flex items-center justify-between w-full text-left hover:bg-gray-200 px-2 py-1 rounded font-cormorant text-xl"
              >
                CATEGORIES <span>{openCategory === "Categories" ? "▲" : "▼"}</span>
              </button>
              {openCategory === "Categories" && (
                <ul className="mt-1 ml-4 border-l border-gray-300 font-cormorant">
                  <li className="px-4 py-2 hover:bg-gray-200 text-xl">
                    <Link href="/categories/Earrings">EARRINGS</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 text-xl">
                    <Link href="/categories/pants/joggers">NECKLACE</Link>
                    {openCategory === "Categories" && (
                       <p className="px-4 py-2 hover:bg-gray-200 text-xl">coming soon</p>
                    )}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 text-xl">
                    <Link href="/categories/pants/formal">RINGS</Link>
                    {openCategory === "Categories" && (
                       <p className="px-4 py-2 hover:bg-gray-200 text-xl">coming soon</p>
                    )}
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2">
              <button
                onClick={() => toggleCategory("Collections")}
                className="flex items-center justify-between w-full text-left hover:bg-gray-200 px-2 py-1 rounded font-cormorant text-xl"
              >
                COLLECTIONS <span>{openCategory === "Collections" ? "▲" : "▼"}</span>
              </button>
              {openCategory === "Collections" && (
                <ul className="mt-1 ml-4 border-l border-gray-300 font-cormorant">
                  <li className="px-4 py-2 hover:bg-gray-200 text-xl">
                    <Link href="/collections/sanjhsavera">SANJH SAVERA</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 text-xl">
                    <Link href="/collections/ratnaraga">RATNA RAGA</Link>
                    {openCategory === "Categories" && (
                       <p className="px-4 py-2 hover:bg-gray-200 text-xl">coming soon</p>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
