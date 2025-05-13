import React from "react";

const FAQPage = () => {
  return (
    <main className="w-screen bg-white py-10">
      <div className="max-w-4xl mx-auto px-4">
      <h1 className="font-cormorant text-4xl underline text-center mb-8">
        Frequently Asked Questions
      </h1>
        <div className="space-y-6 text-gray-700 text-lg">
          {/* Question 1 */}
          <div>
            <h2 className="font-cormorant text-2xl font-bold">
              Where is my order?
            </h2>
            <p className="mt-2">
              Once your order has been confirmed with us, you will receive a confirmation email. You will receive another email once your product has been dispatched. This email will consist of a tracking number which you can then enter in the "Track Your Order" tab at the bottom of the website or on the delivery partner portal.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h2 className="font-cormorant text-2xl font-bold">
              What is the purity of silver used in silver items?
            </h2>
            <p className="mt-2">
              Sterling silver pieces are hallmarked 92.5 sterling silver. In case of alloys, the specifications are mentioned in the information tab on the product page.
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h2 className="font-cormorant text-2xl font-bold">
              What stones are used in your pieces?
            </h2>
            <p className="mt-2">
              Our products are made of precious and semi-precious stones in our pieces. Stone details about every piece are mentioned in their product descriptions.
            </p>
          </div>

          {/* Question 4 */}
          <div>
            <h2 className="font-cormorant text-2xl font-bold">
              What is your returns and refund policy?
            </h2>
            <p className="mt-2">
              Kindly refer to our{" "}
              <a href="/returns" className="text-blue-500 underline">
                Refund Policy
              </a>.
            </p>
          </div>

          {/* Question 5 */}
          <div>
            <h2 className="font-cormorant text-2xl font-bold">
              What modes of payment do you accept?
            </h2>
            <p className="mt-2">
              Our accepted mode of payment are: Online Payments such as UPI transfer and Bank Transfers.
            </p>
          </div>

          {/* Question 6 */}
          <div>
            <h2 className="font-cormorant text-2xl font-bold">
              Other Queries
            </h2>
            <p className="mt-2">
              For any other query not listed above, kindly drop us an email at{" "}
              <a href="mailto:contact@srimaya.in" className="text-blue-500 underline">
                contact@srimaya.in
              </a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;



// import React from "react";

// const FAQPage = () => {
//   return (
//     <main className="w-screen bg-white py-10">
//       <div className="max-w-4xl mx-auto px-4">
//         <h1 className="font-cormorant text-4xl underline text-center mb-8">
//           Frequently Asked Questions
//         </h1>
//         <div className="space-y-6 text-gray-700 text-lg">
//           {/* Question 1 */}
//           <div>
//             <h2 className="font-cormorant text-2xl font-bold uppercase">
//               Where is my order?
//             </h2>
//             <p className="mt-2">
//               Once your order has been confirmed with us, you will receive a confirmation email. You will receive another email once your product has been dispatched. This email will consist of a tracking number which you can then enter in the "Track Your Order" tab at the bottom of the website or on the delivery partner portal.
//             </p>
//           </div>

//           {/* Question 2 */}
//           <div>
//             <h2 className="font-cormorant text-2xl font-bold uppercase">
//               What is the purity of silver used in silver items?
//             </h2>
//             <p className="mt-2">
//               Sterling silver pieces are hallmarked 92.5 sterling silver. In case of alloys, the specifications are mentioned in the information tab on the product page.
//             </p>
//           </div>

//           {/* Question 3 */}
//           <div>
//             <h2 className="font-cormorant text-2xl font-bold uppercase">
//               What stones are used in your pieces?
//             </h2>
//             <p className="mt-2">
//               Our products are made of precious and semi-precious stones in our pieces. Stone details about every piece are mentioned in their product descriptions.
//             </p>
//           </div>

//           {/* Question 4 */}
//           <div>
//             <h2 className="font-cormorant text-2xl font-bold uppercase">
//               What is your returns and refund policy?
//             </h2>
//             <p className="mt-2">
//               Kindly refer to our{" "}
//               <a href="/returns" className="text-blue-500 underline">
//                 Refund Policy
//               </a>.
//             </p>
//           </div>

//           {/* Question 5 */}
//           <div>
//             <h2 className="font-cormorant text-2xl font-bold uppercase">
//               What modes of payment do you accept?
//             </h2>
//             <p className="mt-2">
//               Our accepted mode of payment are: Online Payments such as UPI transfer and Bank Transfers.
//             </p>
//           </div>

//           {/* Question 6 */}
//           <div>
//             <h2 className="font-cormorant text-2xl font-bold uppercase">
//               Other Queries
//             </h2>
//             <p className="mt-2">
//               For any other query not listed above, kindly drop us an email at{" "}
//               <a href="mailto:contact@srimaya.in" className="text-blue-500 underline">
//                 contact@srimaya.in
//               </a>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default FAQPage;
