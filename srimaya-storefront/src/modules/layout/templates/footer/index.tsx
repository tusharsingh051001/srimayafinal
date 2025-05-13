import Image from "next/image"

export default async function Footer() {
  return (
    <footer className="text-gray-600 bg-white body-font w-screen flex flex-wrap flex-col md:flex-row items-center border-t border-black">
      <div className="container mx-auto px-2 py-8 w-full flex flex-col md:flex-row items-center justify-between">
        <section className="flex flex-col md:flex-row items-center md:items-start">
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
        <nav className="flex flex-col md:flex-row flex-grow justify-evenly mt-8 md:mt-0">
  <div className="text-center md:text-left p-4 pl-8">
    <h2 className="mb-3 text-xl font-cormorant font-medium tracking-widest text-black font-semibold text-sm md:text-base">
      CONTACT US
    </h2>
    <ul className="space-y-1 list-none">
      <li className="font-serif text-gray-600 hover:text-gray-800 text-sm md:text-base">
        <span className="font-semibold">Phone Number</span> <br />
        +91 9899900486
      </li>
      <li className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
        <span className="font-semibold">Email</span> <br />
        contact@srimaya.in
      </li>
    </ul>
  </div>
  <div className="text-center md:text-left p-4">
    <h2 className="mb-3 text-xl font-cormorant font-medium tracking-widest text-black font-semibold text-sm md:text-base">
      CATEGORIES
    </h2>
    <ul className="space-y-1 list-none">
      <li>
        <a href="/terms" className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
          TERMS OF SERVICE
        </a>
      </li>
      <li>
        <a href="/returns" className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
          REFUNDS AND EXCHANGE POLICY
        </a>
      </li>
      <li>
        <a href="/sp" className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
          SHIPPING POLICY
        </a>
      </li>
      <li>
        <a href="/privacypolicy" className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
          PRIVACY POLICY
        </a>
      </li>
    </ul>
  </div>
  <div className="text-center md:text-left p-4">
    <h2 className="mb-3 text-xl font-cormorant font-medium tracking-widest text-black font-semibold text-sm md:text-base">
      QUICK LINKS
    </h2>
    <ul className="space-y-1 list-none">
      <li>
        <a href="/store" className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
          SHOP
        </a>
      </li>
      <li>
        <a href="/faq" className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
          FAQs
        </a>
      </li>
      <li>
        <a href="/about" className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
          ABOUT US
        </a>
      </li>
    </ul>
  </div>
</nav>

      </div>

      <div className="bg-[#4a0600] w-full py-4">
  <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
    {/* Left Side - Text */}
    <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left mb-2 sm:mb-0">
      ©2025 DarkModeSolutions
      <a className="text-gray-400 ml-1" target="_blank" rel="noopener noreferrer">
        @darkmodesolutions
      </a>
    </p>

    {/* Right Side - Social Icons */}
    <div className="flex items-center justify-center space-x-4">
      <a href="https://www.facebook.com/share/15MG3Kb3o8/?mibextid=wwXIfr" className="text-gray-400 hover:text-white transition">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/srimaya_official?igsh=MWpvbWQ4d2ZzamU4bg%3D%3D&utm_source=qr" className="text-gray-400 hover:text-white transition">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
    </div>
  </div>
</div>

    </footer>
  );
}
