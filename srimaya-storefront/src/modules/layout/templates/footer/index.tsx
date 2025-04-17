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
      <li className="font-cormorant text-gray-600 hover:text-gray-800 text-sm md:text-base">
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
        <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
          {/* Left Side - Text */}
          <p className="text-gray-500 text-sm text-center sm:text-left text-xs md:text-sm">
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

// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-white text-gray-600 border-t border-black w-full font-cormorant">
//       {/* Top Section */}
//       <div className="container mx-auto px-6 md:px-24 py-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
//           {/* Logo */}
//           <div className="flex justify-center md:justify-start">
//             <div className="w-40 md:w-64">
//               <Image
//                 src="/logo/logo2.png"
//                 alt="Logo"
//                 layout="responsive"
//                 width={320}
//                 height={260}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Contact Us */}
//           <div className="text-center md:text-left">
//             <h2 className="text-black font-semibold mb-2">CONTACT US</h2>
//             <ul className="space-y-1">
//               <li>
//                 <span className="font-semibold">Phone:</span><br/>
//                 +91 9899900486
//               </li>
//               <li>
//                 <span className="font-semibold">Email:</span><br/>
//                 contact@srimaya.in
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div className="text-center md:text-left">
//             <h2 className="text-black font-semibold mb-2">CATEGORIES</h2>
//             <ul className="space-y-1">
//               <li><a href="/terms" className="hover:text-gray-800">Terms of Service</a></li>
//               <li><a href="/returns" className="hover:text-gray-800">Refund & Exchange Policy</a></li>
//               <li><a href="/sp" className="hover:text-gray-800">Shipping Policy</a></li>
//               <li><a href="/privacypolicy" className="hover:text-gray-800">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div className="text-center md:text-left">
//             <h2 className="text-black font-semibold mb-2">QUICK LINKS</h2>
//             <ul className="space-y-1">
//               <li><a href="/store" className="hover:text-gray-800">Shop</a></li>
//               <li><a href="/faq" className="hover:text-gray-800">FAQs</a></li>
//               <li><a href="/about" className="hover:text-gray-800">About Us</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-[#4a0600] py-4 text-white text-sm">
//         <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center">
//           <p>
//             ©2025 DarkModeSolutions
//             <a
//               href="https://twitter.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ml-1 text-gray-300 hover:text-white"
//             >
//               @darkmodesolutions
//             </a>
//           </p>

//           {/* Social Icons */}
//           <div className="flex justify-center space-x-4">
//             {/* Facebook */}
//             <a href="#" className="text-gray-300 hover:text-white">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
//               </svg>
//             </a>
//             {/* Twitter */}
//             <a href="#" className="text-gray-300 hover:text-white">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
//               </svg>
//             </a>
//             {/* Instagram */}
//             <a href="#" className="text-gray-300 hover:text-white">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
//                 <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
//               </svg>
//             </a>
//             {/* LinkedIn */}
//             <a href="#" className="text-gray-300 hover:text-white">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
//                 <circle cx="4" cy="4" r="2"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
