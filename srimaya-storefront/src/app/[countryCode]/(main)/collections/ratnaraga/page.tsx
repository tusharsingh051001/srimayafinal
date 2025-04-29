import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="w-screen bg-white">
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] sm:h-[700px]">
      <Image
        src="/sanjhsavera/image.jpeg"
        alt="Saanjh Savera Collection"
        fill
        className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#4a0600] bg-opacity-50 p-4 sm:p-6 md:p-10">
        <h2 className="font-snell text-white text-4xl sm:text-5xl font-semibold mb-2 text-center">
          Coming Soon...
        </h2>
      </div>
    </div>
    </main>
  );
};

export default AboutPage;
