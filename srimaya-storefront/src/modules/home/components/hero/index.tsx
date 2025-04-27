"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function Home() {
  const images = [
    "/secondslide/image1.JPG",
    "/secondslide/image2.JPG",
    "/secondslide/image3.JPG",
    "/secondslide/image4.JPG",
    "/secondslide/image5.jpg"
  ];
  
  const slides = [
    "/mainslide/image1.jpeg",
    "/mainslide/image2.jpeg",
    "/mainslide/image3.JPG",
    "/mainslide/image4.jpeg",
    "/mainslide/image5.jpeg",
    "/mainslide/image6.jpeg",
  ];

  const [mainIndex, setMainIndex] = useState(0);
  const [waterIndex, setWaterIndex] = useState(0);

  useEffect(() => {
    const intervalMain = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalMain);
  }, [slides.length]);

  useEffect(() => {
    const intervalWater = setInterval(() => {
      setWaterIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(intervalWater);
  }, [slides.length]);

  const nextWaterSlide = useCallback(() => {
    setWaterIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevWaterSlide = useCallback(() => {
    setWaterIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <>
      <section className="w-screen bg-white flex items-center justify-center">
        <div className="relative w-screen h-[90vh] sm:h-[100vh] md:h-[90vh] shadow-lg overflow-hidden">
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide}
              alt="Slide"
              fill
              className={`absolute inset-0 w-screen h-[50vh] sm:h-[60vh] md:h-[75vh] object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${
                index === mainIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <Link href="/collections">
            <div className="absolute bottom-10 right-10 bg-[#052715] text-white text-2xl px-7 py-5 rounded-xl font-cormorant">
              View All Collections
            </div>
          </Link>
        </div>
      </section>

      <section className="w-screen h-screen bg-white pt-8 relative flex items-center justify-center shadow-lg overflow-hidden">
        <div className="absolute h-[90vh] sm:h-[100vh] md:h-[90vh] flex items-center justify-center opacity-50 pointer-events-none font-snell">
          <div className="whitespace-nowrap animate-marquee overflow-hidden">
            <span className="text-gray-300 text-18xl font-bold tracking-widest pl-5">
              Srimaya
            </span>
          </div>
        </div>
        <div className="relative w-[400vw] md:w-[500vw] lg:w-2/5 h-screen overflow-hidden">
          {images.map((slide, index) => (
            <Image
              key={index}
              src={slide}
              alt="Slide"
              fill
              className={`absolute inset-0 w-screen h-screen object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${
                index === waterIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <Link href="/store">
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-[#052715] text-white px-7 py-4 rounded-lg font-cormorant text-xl">
              View All
            </div>
          </Link>
        </div>
        <button
          onClick={prevWaterSlide}
          className="absolute left-10 text-gray-600 bg-white border border-gray-400 p-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          ←
        </button>
        <button
          onClick={nextWaterSlide}
          className="absolute right-10 text-gray-600 bg-white border border-gray-400 p-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          →
        </button>
        <div className="absolute bottom-8 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setWaterIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                waterIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center bg-white py-12 px-6 relative overflow-hidden">
        <div className="flex-1 relative h-screen">
          <Image 
            src="/aboutus/image.JPG" 
            alt="Slide 1" 
            fill 
            className="object-cover rounded-lg" 
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-10 py-16 rounded-lg relative z-10 md:-ml-12 border bg-white">
          <h2 className="text-6xl font-semibold mb-4 text-black font-snell">
            About Us
          </h2>
          <p 
            className="text-gray-700 text-2xl font-cormorant mb-4"
            style={{ textAlign: "justify" }}
          >
            Srimaya celebrates the fusion of rich heritage and contemporary style.
            Our collection of jewelry is designed to captivate and empower the modern woman, blending traditional ethnic artistry with the sophistication of modern trends.
            <br /><br />
            From statement-making necklaces and earrings to delicately crafted bangles and rings, every piece in our collection is a reflection of timeless beauty and modern sensibility. Whether you are looking for the grandeur of traditional Indian designs or the sleek simplicity of minimalist modern jewelry, we offer a diverse range that complements every occasion and personal style.
            <br /><br />
            At Srimaya, we believe that jewellery is not just an accessory, but a form of self-expression.
          </p>
          <p 
            className="text-black text-2xl italic font-snell font-bold"
            style={{ textAlign: "justify" }}
          >
            Explore the perfect balance of the past and the future, with jewellery that transcends time and trends, designed to be cherished for generations...
          </p>
          <button className="mt-4 bg-[#052715] text-white py-2 px-6 rounded-md hover:bg-gray-800 transition font-cormorant">
            BROWSE
          </button>
        </div>
      </section>

      <div className="relative bg-white w-screen overflow-hidden">
        <div className="text-black bg-white text-4xl font-snell tracking-widest whitespace-nowrap animate-scroll-2">
            For the divine feminine in you...
        </div>
      </div>

      
      <section className="py-12 bg-gray-50 w-screen">
      <div className="w-full mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-60 mb-8">
          <div className="md:pl-16">
            <h2 className="text-4xl md:text-6xl font-semibold text-black font-snell text-left">
              Testimonials
            </h2>
          </div>
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-snell font-semibold leading-relaxed text-left">
              <span className="block">Dripping in heritage,</span>
              <span className="block ml-4 md:ml-12">Glowing with modernity</span>
              <span className="block ml-8 md:ml-24 text-[#4a0600]">
                crafted for the divine in you...
              </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense">
          <div className="bg-[#4a0600] text-white p-6 md:p-10 flex items-center justify-center text-center rounded-lg shadow-lg lg:col-span-2 min-h-[10rem]">
            <p className="text-2xl font-cormorant">
              &quot;I was hesitant to order from a new website, but Srimaya won me over
              with their intricate modern designs. Highly recommended!&quot;
              <br />— Nia, Jaipur
            </p>
          </div>
          <div className="bg-[#4a0600] text-white p-8 flex items-center justify-center text-center md:row-span-2 min-h-[10rem] rounded-lg">
            <h2 className="text-3xl font-light font-cormorant">
              &quot;I love how lightweight and comfortable their pieces are. My pearl
              earrings have become my everyday favourite — it&apos;s versatile and elegant.&quot;
              <br />— Sakshi, New Delhi
            </h2>
          </div>
          <div className="bg-[#4a0600] text-white p-8 flex items-center justify-center text-center rounded-lg min-h-[20rem]">
            <h2 className="text-3xl font-light font-cormorant">
              &quot;Even though the website is new, their customer service was excellent,
              and my order arrived in time.&quot;
              <br />— Priya S., Delhi
            </h2>
          </div>
          <div className="bg-[#4a0600] text-white p-8 flex items-center justify-center text-center rounded-lg min-h-[20rem]">
            <h2 className="text-2xl font-light font-cormorant">
              &quot;Their sleek, contemporary designs with traditional touches is quite unique.
              The ring I purchased feels like a modern heirloom!&quot;
              <br />— Aditya, New Delhi
            </h2>
          </div>
          <div className="bg-[#4a0600] text-white p-6 md:p-12 flex items-center justify-center text-center rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3 min-h-[10rem]">
            <p className="text-2xl font-medium font-cormorant">
              &quot;I bought a pair of a set of panna valli earrings, and they&apos;re absolutely
              stunning! The craftsmanship is exquisite, and I&apos;ve received so many compliments.
              I can&apos;t wait to shop more!&quot;
              <br />— Ananya R., Mumbai
            </p>
          </div>
          <div className="bg-[#4a0600] text-white p-6 flex items-center justify-center text-center rounded-lg min-h-[10rem]">
            <h2 className="text-2xl font-cormorant">
              &quot;It&apos;s rare to find jewellery that balances contemporary style
              with Indian heritage. The pieces can be styled with western as well
              as my Indian outfits.&quot;
              <br />— Sneha P., Gurugram
            </h2>
          </div>
          <div className="bg-[#4a0600] text-white p-12 flex items-center justify-center text-center rounded-lg shadow-lg min-h-[10rem] lg:col-span-2">
            <p className="text-3xl font-cormorant">
              &quot;The intricate design and bright stones made a perfect gift for
              an office giveaway party for my colleague.&quot;
              <br />— Arjun K., Gurugram
            </p>
          </div>
        </div>
      </div>
    </section>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(-130%);
          }
          100% {
            transform: translateX(130%);
          }
        }
        .animate-marquee {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll2 {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(350%);
          }
        }
        .animate-scroll-2 {
          animation: scroll2 30s linear infinite;
        }
      `}</style>
    </>
  );
}
