import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="w-screen bg-white">
      {/* Hero Image Section */}
      <section className="w-screen">
        <div className="relative w-full h-[90vh] sm:h-[100vh] md:h-[90vh] overflow-hidden">
          <Image
            src="/aboutus/image.jpeg"
            alt="Slide 1"
            fill
            className="object-cover md:object-[50%_29%]"
          />
        </div>
      </section>

      {/* About Us Text Section */}
      <section className="w-screen p-10 text-center md:text-left">
        <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-center">
          About Us
        </h2>
        <p
          className="text-gray-700 text-2xl font-cormorant leading-relaxed mb-4"
          style={{ textAlign: "justify" }}
        >
          <span className="text-3xl font-snell font-semibold text-[#4a0600] m-5 block text-center">
            For the divine feminine in you...
          </span>
          Timeless Elegance, Crafted for the Modern Woman:
          <br />
          Based out of New delhi, Srimaya celebrates the fusion of rich heritage and contemporary style. Our collection of jewelry is designed to captivate and empower the modern woman, blending traditional ethnic artistry with the sophistication of modern trends. Each piece is a masterpiece—handcrafted by skilled artisans using high-quality materials, with intricate detailing that echoes India's vibrant culture and contemporary elegance.
          <br />
          From statement-making necklaces and earrings to delicately crafted bangles and rings, every piece in our collection is a reflection of timeless beauty and modern sensibility. Whether you are looking for the grandeur of traditional Indian designs or the sleek simplicity of minimalist modern jewelry, we offer a diverse range that complements every occasion and personal style.
          <br />
          At Srimaya, we believe that jewelry is not just an accessory, but a form of self-expression. Our creations are made for women who embrace both tradition and innovation, exuding confidence and grace with every wear.
          <br />
          Explore the perfect balance of the past and the future, with jewelry that transcends time and trends, designed to be cherished for generations.
        </p>
      </section>

      <section className="flex flex-col md:flex-row w-full bg-[#4a0600]">
  {/* Image Block */}
  <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:h-auto overflow-hidden rounded-lg">
    <Image
      src="/ideology/image.JPG"
      alt="Slide 1"
      layout="fill"
      className="object-cover"
    />
  </div>

  {/* Text Block */}
  <div className="w-full md:w-1/2 px-6 py-10 md:py-16 text-center md:text-left flex items-center justify-center">
    <div>
      <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-gray-200 mb-4 text-center md:text-left">
        Ideology
      </h2>
      <p className="text-gray-200 text-lg md:text-2xl font-cormorant leading-relaxed text-justify">
        At Srimaya, we believe in the seamless fusion of the old and the new. Our jewellery is a reflection of the timeless beauty of traditional Indian craftsmanship, elevated by modern, sleek designs that speak to today’s bold, confident women. We draw inspiration from the rich cultural heritage of India, known for its intricate artistry and enduring elegance, and blend it with contemporary aesthetics for a unique, sophisticated appeal.
        <br/><br/>
        Every piece in our collection is a harmonious marriage of <strong>silver and gold-plated metalwork</strong>, meticulously crafted with attention to detail, and accented with <strong>precious and semi-precious stones</strong> that add an earthy, yet refined touch. Our designs capture the essence of tradition, while embracing the minimalist, clean lines of modern style.
        <br/><br/>
        We take pride in crafting pieces that not only tell a story of heritage but also allow you to create your own. Whether it’s an everyday piece or a statement accessory, our jewellery brings a touch of elegance, luxury, and soul to any look. At Srimaya, jewellery is more than an accessory — it’s a *pehchaan*, a tribute to tradition, and a celebration of contemporary design.
        <br/><br/>
        Join us in wearing jewellery that honours both the past and the present, blending art, culture, and innovation into every piece.
      </p>
    </div>
  </div>
</section>

    </main>
  );
};

export default AboutPage;
