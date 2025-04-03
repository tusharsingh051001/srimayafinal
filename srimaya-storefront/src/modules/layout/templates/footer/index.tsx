import Image from "next/image"

export default async function Footer() {
  return (
<footer className="text-gray-600 bg-white body-font w-screen flex flex-wrap flex-col md:flex-row items-center border-t border-black">
<div className="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between">
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex justify-center">
            <a aria-label="Homepage" href="/" className="block">
              <div className="w-[320px] h-[260px] relative">
                <Image
                  src="/logo/logo2.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
        </section>

        {/* Navigation Links */}
        <nav className="flex flex-grow justify-evenly mt-8 md:mt-0">
        <div className="text-center md:text-left">
        <h2 className="mb-3 text-xl font-cormorant font-medium tracking-widest text-black font-semibold">
        CONTACT US
            </h2>
            <ul className="space-y-1 list-none">
              {/* <li className="font-cormorant text-gray-600 hover:text-gray-800">
                  Address<br/>
              </li> */}
              <li className="font-cormorant text-gray-600 hover:text-gray-800">
                  <span className="font-semibold">Phone Number</span> <br/>
                  +91 9899900486
              </li>
              <li className="font-cormorant text-gray-600 hover:text-gray-800">
              <span className="font-semibold">Email</span> <br/>
                  contact@srimaya.in
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-3 text-xl font-cormorant font-medium tracking-widest text-black font-semibold">
              CATEGORIES
            </h2>
            <ul className="space-y-1 list-none">
              <li>
                <a href="/terms" className="font-cormorant text-gray-600 hover:text-gray-800">
                  TERMS OF SERVICE
                </a>
              </li>
              <li>
                <a href="/returns" className="font-cormorant text-gray-600 hover:text-gray-800">
                  REFUNDS AND EXCHANGE POLICY
                </a>
              </li>
              <li>
                <a href="/sp" className="font-cormorant text-gray-600 hover:text-gray-800">
                  SHIPPING POLICY
                </a>
              </li>
              <li>
                <a href="/privacypolicy" className="font-cormorant text-gray-600 hover:text-gray-800">
                  PRIVACY POLICY
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-3 text-xl font-cormorant font-medium tracking-widest text-black font-semibold">
              QUICK LINKS
            </h2>
            <ul className="space-y-1 list-none">
              <li>
                <a href="/store" className="font-cormorant text-gray-600 hover:text-gray-800">
                  SHOP
                </a>
              </li>
              <li>
                <a href="/faq" className="font-cormorant text-gray-600 hover:text-gray-800">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/about" className="font-cormorant text-gray-600 hover:text-gray-800">
                  ABOUT US
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

  <div className="bg-[#4a0600] w-full py-4">
  <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
  
    {/* Left Side - Text */}
    <p className="text-gray-500 text-sm text-center sm:text-left">
      ©2025 DarkModeSolutions
      <a href="https://twitter.com/" className="text-gray-400 ml-1" target="_blank" rel="noopener noreferrer">
        @darkmodesolutions
      </a>
    </p>

    {/* Right Side - Social Icons */}
    <span className="inline-flex space-x-4">
      <a className="text-gray-400 hover:text-white transition">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="text-gray-400 hover:text-white transition">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="text-gray-400 hover:text-white transition">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="text-gray-400 hover:text-white transition">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>

  </div>
</div>
</footer>
  );
}