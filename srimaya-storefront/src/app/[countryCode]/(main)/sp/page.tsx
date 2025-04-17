import React from "react";

const ShippingPage = () => {
  return (
    <main className="w-screen bg-white py-10">
      <div className="max-w-4xl mx-auto px-4">
      <h1 className="font-cormorant text-4xl underline text-center mb-8">
          Shipping & Delivery Information
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          We provide free delivery for our products. The dispatch time is 3 days.
          Delivery time ranges between 2-5 days after dispatch depending on where you are located.
          This time frame might be affected due to public holidays, natural calamities &amp; other unavoidable circumstances.
          <br className="my-4" />
          <strong className="font-cormorant">For MADE TO ORDER Items:</strong>
          <br className="mt-2" />
          Shipping &amp; Dispatch will be calculated post the manufacturing of the made to order item i.e., 10-15 days plus 2-5 days for shipping.
          <br className="my-4" />
          Made to order items are not eligible for return/exchange.
        </p>
      </div>
    </main>
  );
};

export default ShippingPage;
