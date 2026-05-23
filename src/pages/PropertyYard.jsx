import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import Filters from "../components/Filters";
import properties from "../data/properties";

export default function PropertyYard() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  const [selectedFilters, setSelectedFilters] = useState({
    locality: "",
    budget: "",
    gender: "",
    preferred: "",
  });

  const [filteredPGs, setFilteredPGs] = useState(properties);

  useEffect(() => {
    let result = [...properties];

    if (city) {
      result = result.filter(
        (p) => p.city.toLowerCase() === city.toLowerCase()
      );
    }

    if (selectedFilters.locality) {
      result = result.filter(
        (pg) =>
          pg.area.toLowerCase() === selectedFilters.locality.toLowerCase()
      );
    }

    if (selectedFilters.gender) {
      result = result.filter(
        (pg) =>
          pg.gender.toLowerCase() === selectedFilters.gender.toLowerCase()
      );
    }

    if (selectedFilters.preferred) {
      result = result.filter(
        (pg) =>
          pg.type.toLowerCase() === selectedFilters.preferred.toLowerCase()
      );
    }

    if (selectedFilters.budget) {
      result = result.filter((pg) => {
        const price = Number(pg.price);

        if (selectedFilters.budget === "Under 10000") return price < 10000;
        if (selectedFilters.budget === "10000-15000") return price >= 10000 && price <= 15000;
        if (selectedFilters.budget === "15000-20000") return price >= 15000 && price <= 20000;
        if (selectedFilters.budget === "20000+") return price > 20000;

        return true;
      });
    }

    setFilteredPGs(result);

  }, [selectedFilters, city]);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔷 CONTAINER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">

        {/* 🔷 HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 md:mb-6">

          <h2 className="text-base sm:text-lg md:text-xl font-bold">
            Showing results for: 
            <span className="text-orange-500 ml-1">
              {city || "All"}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-500">
            {filteredPGs.length} PGs found
          </p>

        </div>

        {/* 🔷 FILTERS */}
        <div className="mb-4 md:mb-6">
          <Filters setSelectedFilters={setSelectedFilters} />
        </div>

        {/* 🔷 GRID */}
        {filteredPGs.length > 0 ? (
          <div
            className="
              grid
              gap-4 sm:gap-5 md:gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {filteredPGs.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10 text-sm sm:text-base">
            ❌ No PG found
          </div>
        )}

      </div>
    </div>
  );
}