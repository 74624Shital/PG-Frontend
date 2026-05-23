import React from "react";
import { useLocation } from "react-router-dom";

/* ✅ CARD */
function PropertyCard({ property }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden mb-6 hover:shadow-xl transition">

      {/* IMAGE */}
      <div className="relative md:w-[40%]">
        <img
          src={property.img}
          alt={property.name}
          className="w-full h-52 md:h-full object-cover"
        />

        <span className="absolute top-3 left-3 bg-yellow-400 text-xs px-2 py-1 rounded">
          {property.preferred}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{property.name}</h3>

          <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
            {property.gender}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-1">
          {property.location}, {property.city}
        </p>

        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          {property.amenities.map((a, i) => (
            <span key={i} className="bg-gray-100 px-2 py-1 rounded">
              {a}
            </span>
          ))}
        </div>

        <h3 className="text-[#ff7a00] font-bold mt-3">
          ₹{property.price}/mo
        </h3>
      </div>
    </div>
  );
}

/* ✅ MAIN COMPONENT */
export default function PropertyList({ selectedFilters = {} }) {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  // ✅ SAFE DEFAULT (VERY IMPORTANT)
  const filters = {
    locality: selectedFilters.locality || [],
    gender: selectedFilters.gender || [],
    preferred: selectedFilters.preferred || [],
    budget: selectedFilters.budget || [],
  };

  const properties = [
    {
      id: 1,
      name: "Whitehaven House",
      location: "Wagholi",
      city: "Pune",
      gender: "Female",
      price: 10499,
      preferred: "Students",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      amenities: ["Balcony"],
    },
    {
      id: 2,
      name: "Austin House",
      location: "Baner",
      city: "Pune",
      gender: "Male",
      price: 9200,
      preferred: "Working",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      amenities: ["WiFi"],
    },
    {
      id: 3,
      name: "Mumbai PG Elite",
      location: "Andheri",
      city: "Mumbai",
      gender: "Unisex",
      price: 15000,
      preferred: "Working",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      amenities: ["AC"],
    },
  ];

  /* 🔥 FULL FILTER LOGIC */
  const filtered = properties.filter((p) => {

    // ✅ CITY FILTER (FROM NAVBAR)
    if (city && p.city.toLowerCase() !== city.toLowerCase()) {
      return false;
    }

    // LOCALITY
    if (
      filters.locality.length > 0 &&
      !filters.locality.includes(p.location)
    ) return false;

    // GENDER
    if (
      filters.gender.length > 0 &&
      !filters.gender.includes(p.gender)
    ) return false;

    // PREFERRED
    if (
      filters.preferred.length > 0 &&
      !filters.preferred.includes(p.preferred)
    ) return false;

    // BUDGET
    if (filters.budget.length > 0) {
      const price = p.price;

      const match = filters.budget.some((b) => {
        if (b === "Under 10000") return price < 10000;
        if (b === "10000-15000") return price >= 10000 && price <= 15000;
        if (b === "15000-20000") return price >= 15000 && price <= 20000;
        if (b === "20000+") return price > 20000;
        return false;
      });

      if (!match) return false;
    }

    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* HEADER */}
      <h2 className="text-xl font-bold mb-4">
        Showing: {city || "All Cities"}
      </h2>

      {filtered.length === 0 ? (
        <h2 className="text-center text-gray-500">
          No PG found 😢
        </h2>
      ) : (
        filtered.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))
      )}

    </div>
  );
}