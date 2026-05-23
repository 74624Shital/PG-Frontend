import React from "react";

export default function Contact() {

  // 🔧 PREVENT PAGE RELOAD
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">

      {/* 🔷 HERO SECTION */}
      <div className="bg-[#ff7a00] text-white py-12 px-4 sm:px-6 md:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Get in Touch
        </h1>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          Have questions? We’re here to help you find the perfect stay.
        </p>
      </div>

      {/* 🔶 MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* 📩 CONTACT FORM */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a00] text-sm sm:text-base"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a00] text-sm sm:text-base"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a00] text-sm sm:text-base"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a00] text-sm sm:text-base"
            />

            <button
              type="submit"
              className="w-full bg-[#ff7a00] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* 📞 CONTACT INFO */}
        <div className="flex flex-col gap-5">

          {/* CARD */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="bg-[#ff7a00] text-white p-3 rounded-lg text-lg">
              📞
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Call Us</p>
              <p className="font-semibold text-sm sm:text-base">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="bg-[#ff7a00] text-white p-3 rounded-lg text-lg">
              ✉️
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Email</p>
              <p className="font-semibold text-sm sm:text-base">
                support@stayzeno.com
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="bg-[#ff7a00] text-white p-3 rounded-lg text-lg">
              📍
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Location</p>
              <p className="font-semibold text-sm sm:text-base">
                Mumbai, India
              </p>
            </div>
          </div>

          {/* EXTRA BOX */}
          <div className="bg-[#ff7a00] text-white p-5 sm:p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">
              Visit Us
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Explore premium PG stays across major cities with Stayzeno.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}