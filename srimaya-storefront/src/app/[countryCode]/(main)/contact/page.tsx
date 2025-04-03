"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess("");

    const formData = { name, email, phoneNumber, reason };

    try {
      const res = await fetch("http://localhost:1337/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });
      const json = await res.json();
      if (res.status === 201) {
        setSuccess("Form submitted successfully!");
      } else {
        throw new Error(json.error?.message || "Failed to submit enquiry");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="min-h-screen flex flex-col">
      {success && (
        <div className="fixed top-0 left-0 w-full bg-[#052715] text-white p-4 text-center z-50">
          {success}
        </div>
      )}
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

        {/* About & Contact Section */}
        <section className="py-16 bg-white w-screen p-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Information */}
              <div className="text-gray-800 p-20">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold font-cormorant uppercase tracking-wide text-[#4a0600]">
                    Contact Information
                  </h3>
                  <h1 className="text-4xl font-bold font-cormorant">
                    Get in touch
                  </h1>
                </div>
                <div className="mb-6 text-2xl font-cormorant">
                  <p className="mt-2">
                    <span className="mr-2">Email:</span>
                    contact@Srimaya.in
                  </p>
                  <p className="mt-2">
                    <span className="mr-2">Phone Number:</span>
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
                  <p className="mt-10 text-3xl text-gray-700 font-snell font-semibold">
                    For the divine feminine in you....
                  </p>
                  <p className="mt-3 text-2xl font-cormorant">
                  Inspired by the divine feminine energy within all of us, Srimaya offers meticulously crafted pieces that 
                  celebrate both beauty and power. Each design is a tribute to the inner goddess — a perfect balance of 
                  sophistication, spirituality, and style. From intricate detailing to bold statements, our jewellery is 
                  crafted to resonate with the essence of every woman, empowering her to embrace her unique brilliance.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#4a0600] text-white p-8 rounded-lg shadow-lg font-cormorant">
                <h3 className="mb-2 text-sm uppercase tracking-wide text-white font-semibold">
                  Contact Form
                </h3>
                <h2 className="mb-6 text-3xl font-semibold">
                  Let&apos;s Start A Conversation
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-xl text-white">
                      Enquire
                    </label>
                    <input
                      type="text"
                      placeholder="Mention your query in a few words"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full p-3 text-black border border-black rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 text-lg font-cormorant font-semibold rounded-md bg-[#c1ab8f] text-black transition hover:bg-[#b49a7e]"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="w-full mt-4 py-3 text-lg font-cormorant font-semibold rounded-md bg-[#c1ab8f] text-black transition hover:bg-[#b49a7e]"
                  >
                    Create an account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
