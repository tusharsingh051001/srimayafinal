// import Image from "next/image";
// import { revalidatePath } from "next/cache";
// import { Pool } from "pg";
// import Link from "next/link";

// // Hardcode the connection string (not recommended for production)
// const pool = new Pool({
//   connectionString:
//     "postgresql://srimayadb_owner:npg_xZYQiyzfU9T8@ep-orange-snowflake-a1j4hntw-pooler.ap-southeast-1.aws.neon.tech/srimayadb?sslmode=require",
// });

// // This server action will run when the form is submitted.
// export async function handleSubmitAction(formData) {
//   "use server";
//   // Convert the incoming FormData to a plain object.
//   const data = Object.fromEntries(formData);
//   const { name, email, phoneNumber, reason } = data;

//   const query = `
//     INSERT INTO enquiries (name, email, phone_number, reason)
//     VALUES ($1, $2, $3, $4)
//     RETURNING *
//   `;
//   const values = [name, email, phoneNumber, reason];

//   // Insert the data into the database.
//   await pool.query(query, values);

//   // Optionally, revalidate the current path if needed.
//   revalidatePath("/contact");
// }

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
//             className="object-cover rounded-lg"
//           />
//         </section>

//         {/* About & Contact Section */}
//         <section className="py-16 bg-white w-screen p-20">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {/* Contact Information */}
//               <div className="text-gray-800 p-20">
//                 <div className="mb-6">
//                   <h3 className="text-xl font-semibold font-cormorant uppercase tracking-wide text-[#4a0600]">
//                     Contact Information
//                   </h3>
//                   <h1 className="text-4xl font-bold font-cormorant">
//                     Get in touch
//                   </h1>
//                 </div>
//                 <div className="mb-6 text-2xl font-cormorant">
//                   <p className="mt-2">
//                     <span className="mr-2">Email:</span>
//                     contact@Srimaya.in
//                   </p>
//                   <p className="mt-2">
//                     <span className="mr-2">Phone Number:</span>
//                     +91 9899900486
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
//                   <p className="mt-10 text-3xl text-gray-700 font-snell font-semibold">
//                     For the divine feminine in you....
//                   </p>
//                   <p className="mt-3 text-2xl font-cormorant">
//                     Inspired by the divine feminine energy within all of us, Srimaya
//                     offers meticulously crafted pieces that celebrate both beauty and
//                     power. Each design is a tribute to the inner goddess — a perfect
//                     balance of sophistication, spirituality, and style.
//                   </p>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div className="bg-[#4a0600] text-white p-8 rounded-lg shadow-lg font-cormorant">
//                 <h3 className="mb-2 text-sm uppercase tracking-wide text-white font-semibold">
//                   Contact Form
//                 </h3>
//                 <h2 className="mb-6 text-3xl font-semibold">
//                   Let&apos;s Start A Conversation
//                 </h2>
//                 {/* The form uses the server action directly via its `action` attribute */}
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



import Image from "next/image";
import { revalidatePath } from "next/cache";
import { Pool } from "pg";
import Link from "next/link";

// Hardcode the connection string (not recommended for production)
const pool = new Pool({
  connectionString:
    "postgresql://srimayadb_owner:npg_xZYQiyzfU9T8@ep-orange-snowflake-a1j4hntw-pooler.ap-southeast-1.aws.neon.tech/srimayadb?sslmode=require",
});

// This server action will run when the form is submitted.
export async function handleSubmitAction(formData) {
  "use server";
  // Convert the incoming FormData to a plain object.
  const data = Object.fromEntries(formData);
  const { name, email, phoneNumber, reason } = data;

  const query = `
    INSERT INTO enquiries (name, email, phone_number, reason)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [name, email, phoneNumber, reason];

  // Insert the data into the database.
  await pool.query(query, values);

  // Optionally, revalidate the current path if needed.
  revalidatePath("/contact");
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[90vh] sm:h-[100vh] md:h-[90vh] shadow-lg overflow-hidden">
          <Image
            src="/contactus/image.jpeg"
            alt="Slide 1"
            fill
            className="object-cover rounded-lg"
          />
        </section>

        <section className="py-16 bg-white w-screen p-4 md:p-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="text-gray-800 p-4 md:p-20">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold font-cormorant uppercase tracking-wide text-[#4a0600]">
                    Contact Information
                  </h3>
                  <h1 className="text-3xl md:text-4xl font-bold font-cormorant">
                    Get in touch
                  </h1>
                </div>
                <div className="mb-6 text-2xl font-cormorant">
                  <p className="mt-2">
                    <span className="mr-2">Email:</span><br />
                    contact@Srimaya.in
                  </p>
                  <p className="mt-2">
                    <span className="mr-2">Phone Number:</span><br />
                    +91 9899900486
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
                {/* The form uses the server action directly via its `action` attribute */}
                <form action={handleSubmitAction}>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">Phone</label>
                    <input
                      name="phoneNumber"
                      type="tel"
                      placeholder="Your Phone Number"
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">Enquire</label>
                    <input
                      name="reason"
                      type="text"
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
