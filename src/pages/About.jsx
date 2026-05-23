import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9fafb] min-h-screen">

      {/* 🔷 HERO */}
      <div className="bg-[#ff7a00] text-white py-14 px-4 sm:px-6 md:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          About Stayzeno
        </h1>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Redefining co-living with premium spaces, smart technology, and a seamless rental experience.
        </p>
      </div>

      {/* 🔶 STORY SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 grid md:grid-cols-2 gap-8 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Stayzeno was created to simplify the way people find and live in PGs.
            We combine technology with comfort to offer verified, high-quality living spaces across major cities.
          </p>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            From students to working professionals, we ensure a safe, affordable, and modern living experience.
          </p>
        </div>

        {/* IMAGE */}
        <div className="h-[220px] sm:h-[300px] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 🔷 STATS */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            { value: "10,000+", label: "Rooms Listed" },
            { value: "5,000+", label: "Happy Tenants" },
            { value: "20+", label: "Cities" },
            { value: "100%", label: "Verified Listings" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl sm:text-2xl font-bold text-[#ff7a00]">
                {item.value}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* 🔶 WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Why Choose Stayzeno?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            {
              title: "Verified Listings",
              desc: "Every property is inspected and verified for quality and safety.",
            },
            {
              title: "Affordable Pricing",
              desc: "Transparent pricing with no hidden charges.",
            },
            {
              title: "Easy Booking",
              desc: "Book your stay in minutes with a seamless experience.",
            },
            {
              title: "Secure Payments",
              desc: "Multiple payment options with full security.",
            },
            {
              title: "24/7 Support",
              desc: "We’re always here to help you anytime.",
            },
            {
              title: "Modern Living",
              desc: "Well-designed spaces with premium amenities.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-[#ff7a00] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="bg-[#ff7a00] text-white py-12 px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold">
          Join Thousands of Happy Tenants
        </h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          Discover premium PG living with Stayzeno today.
        </p>

        <button
          onClick={() => navigate("/properties")}
          className="mt-5 bg-[#ff7a00] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Explore Properties
        </button>
      </div>

    </div>
  );
}