// import Image from "next/image";
// import Link from "next/link";
// import { handleSubmitAction } from "./mailapi"; 

// export default function About() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="relative w-full h-[90vh] sm:h-[100vh] md:h-[90vh] shadow-lg overflow-hidden">
//           <Image
//             src="/contactus/image.jpeg"
//             alt="Slide 1"
//             fill
//             className="object-cover rounded-lg object-[10%_50%]"
//           />
//         </section>

//         <section className="py-16 bg-white w-screen p-4 md:p-10">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {/* Contact Info */}
//               <div className="text-gray-800 p-4 md:p-20">
//                 <div className="mb-6">
//                   <h3 className="text-xl font-semibold font-cormorant uppercase tracking-wide text-[#4a0600]">
//                     Contact Information
//                   </h3>
//                   <h1 className="text-3xl md:text-4xl font-bold font-cormorant">
//                     Get in touch
//                   </h1>
//                 </div>
//                 <div className="mb-6 text-2xl">
//                   <p className="mt-2 font-cormorant">
//                     <span className="mr-2 font-cormorant">Email:</span><br />
//                     contact@Srimaya.in
//                   </p>
//                   <p className="mt-2">
//                     <span className="mr-2 font-cormorant">Phone Number:</span><br />
//                     <span className="text-xl">+91 9899900486</span>
//                   </p>
//                 </div>
//                 <hr className="my-6 border-gray-500" />
//                 <div className="text-center">
//                   <div className="relative w-60 h-10 mx-auto p-5">
//                     <Image
//                       src="/logo/image.png"
//                       alt="Logo"
//                       width={180}
//                       height={40}
//                       className="object-contain"
//                     />
//                   </div>
//                   <p className="mt-10 text-xl md:text-3xl text-gray-700 font-snell font-semibold">
//                     For the divine feminine in you....
//                   </p>
//                   <p className="mt-3 text-xl md:text-2xl font-cormorant">
//                     Inspired by the divine feminine energy within all of us, Srimaya
//                     offers meticulously crafted pieces that celebrate both beauty and
//                     power. Each design is a tribute to the inner goddess — a perfect
//                     balance of sophistication, spirituality, and style.
//                   </p>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div className="bg-[#4a0600] text-white p-6 md:p-8 rounded-lg shadow-lg font-cormorant">
//                 <h3 className="mb-2 text-sm uppercase tracking-wide text-white font-semibold">
//                   Contact Form
//                 </h3>
//                 <h2 className="mb-6 text-2xl md:text-3xl font-semibold">
//                   Let&apos;s Start A Conversation
//                 </h2>
//                 <form action={handleSubmitAction}>
//                   <div className="mb-4">
//                     <label className="block mb-1 text-xl text-white">Name</label>
//                     <input
//                       name="name"
//                       type="text"
//                       placeholder="Your Name"
//                       className="w-full p-3 text-black border border-black rounded"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block mb-1 text-xl text-white">Email</label>
//                     <input
//                       name="email"
//                       type="email"
//                       placeholder="Your Email"
//                       className="w-full p-3 text-black border border-black rounded"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block mb-1 text-xl text-white">Phone</label>
//                     <input
//                       name="phoneNumber"
//                       type="tel"
//                       placeholder="Your Phone Number"
//                       className="w-full p-3 text-black border border-black rounded"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block mb-1 text-xl text-white">Enquire</label>
//                     <input
//                       name="reason"
//                       type="text"
//                       placeholder="Mention your query in a few words"
//                       className="w-full p-3 text-black border border-black rounded"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full py-3 text-lg font-cormorant font-semibold rounded-md bg-[#c1ab8f] text-black transition hover:bg-[#b49a7e]"
//                   >
//                     Submit
//                   </button>
//                   <Link href="/account">
//                     <button
//                       type="button"
//                       className="w-full mt-4 py-3 text-lg font-cormorant font-semibold rounded-md bg-[#c1ab8f] text-black transition hover:bg-[#b49a7e]"
//                     >
//                       Create an account
//                     </button>
//                   </Link>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }



'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { handleSubmitAction } from "./mailapi";

export default function About() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    await handleSubmitAction(formData);
    setSubmitted(true);
    e.target.reset();
  }

  return (
    
    <div className="min-h-screen flex flex-col">
      {submitted && (
         <div className="sticky top-0 z-50 bg-green-600 text-white text-center p-4 shadow-md">
         Your enquiry has been submitted successfully!
       </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[90vh] sm:h-[100vh] md:h-[90vh] shadow-lg overflow-hidden">
          <Image
            src="/contactus/image.jpeg"
            alt="Slide 1"
            fill
            className="object-cover rounded-lg object-[10%_50%]"
          />
        </section>

        <section className="py-16 bg-white w-screen p-4 md:p-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Side */}
              <div className="text-gray-800 p-4 md:p-20">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold font-cormorant uppercase tracking-wide text-[#4a0600]">
                    Contact Information
                  </h3>
                  <h1 className="text-3xl md:text-4xl font-bold font-cormorant">
                    Get in touch
                  </h1>
                </div>
                <div className="mb-6 text-2xl">
                  <p className="mt-2 font-cormorant">
                    <span className="mr-2 font-cormorant">Email:</span><br />
                    contact@Srimaya.in
                  </p>
                  <p className="mt-2">
                    <span className="mr-2 font-cormorant">Phone Number:</span><br />
                    <span className="text-xl">+91 9899900486</span>
                  </p>
                </div>
                <hr className="my-6 border-gray-500" />
                <div className="text-center">
                  <div className="relative w-60 h-10 mx-auto p-5">
                    <Image
                      src="/logo/image.png"
                      alt="Logo"
                      width={180}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-10 text-xl md:text-3xl text-gray-700 font-snell font-semibold">
                    For the divine feminine in you....
                  </p>
                  <p className="mt-3 text-xl md:text-2xl font-cormorant">
                    Inspired by the divine feminine energy within all of us, Srimaya
                    offers meticulously crafted pieces that celebrate both beauty and
                    power. Each design is a tribute to the inner goddess — a perfect
                    balance of sophistication, spirituality, and style.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#4a0600] text-white p-6 md:p-8 rounded-lg shadow-lg font-cormorant">
                <h3 className="mb-2 text-sm uppercase tracking-wide text-white font-semibold">
                  Contact Form
                </h3>
                <h2 className="mb-6 text-2xl md:text-3xl font-semibold">
                  Let&apos;s Start A Conversation
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">Phone</label>
                    <input
                      name="phoneNumber"
                      type="tel"
                      required
                      placeholder="Your Phone Number"
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">Enquire</label>
                    <input
                      name="reason"
                      type="text"
                      required
                      placeholder="Mention your query in a few words"
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 text-lg font-cormorant font-semibold rounded-md bg-[#c1ab8f] text-black transition hover:bg-[#b49a7e]"
                  >
                    Submit
                  </button>
                  <Link href="/account">
                    <button
                      type="button"
                      className="w-full mt-4 py-3 text-lg font-cormorant font-semibold rounded-md bg-[#c1ab8f] text-black transition hover:bg-[#b49a7e]"
                    >
                      Create an account
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
