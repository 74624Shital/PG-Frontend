import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import Filters from "../components/Filters";
import Features from "../components/Features";
import PropertyCard from "../components/PropertyCard";

function Home() {

  // ================= STATE =================
  const [searchCity, setSearchCity] = useState("");

  const [properties, setProperties] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({
    locality: [],
    budget: [],
    gender: [],
    preferred: [],
  });

  // ================= FETCH API =================
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {

    try {

      const res = await axios.get(
        "https://pg-backend-9xs4.onrender.com/api/listings"
      );

      console.log("API DATA =", res.data);

      setProperties(res.data);

    } catch (error) {

      console.log("ERROR =", error);

    }
  };

  // ================= FILTER LOGIC =================
  const filteredProperties = useMemo(() => {

    return properties.filter((p) => {

      // CITY SEARCH
      if (searchCity && searchCity.trim() !== "") {

        const value = searchCity.toLowerCase().trim();

        const match =
          p?.city?.toLowerCase().includes(value) ||
          p?.area?.toLowerCase().includes(value) ||
          p?.location?.toLowerCase().includes(value);

        if (!match) return false;
      }

      // LOCALITY
      if (selectedFilters.locality?.length) {

        const match = selectedFilters.locality.some((val) =>
          p?.area &&
          val &&
          p.area.toLowerCase().trim() === val.toLowerCase().trim()
        );

        if (!match) return false;
      }

      // GENDER
      if (selectedFilters.gender?.length) {

        const match = selectedFilters.gender.some((val) =>
          p?.gender &&
          val &&
          p.gender.toLowerCase().trim() === val.toLowerCase().trim()
        );

        if (!match) return false;
      }

      // PREFERRED
      if (selectedFilters.preferred?.length) {

        const match = selectedFilters.preferred.some((val) =>
          p?.preferred &&
          val &&
          p.preferred.toLowerCase().trim() === val.toLowerCase().trim()
        );

        if (!match) return false;
      }

      // BUDGET
      if (selectedFilters.budget?.length) {

        const price = Number(p?.price) || 0;

        const match = selectedFilters.budget.some((b) => {

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

  }, [properties, selectedFilters, searchCity]);

  // ================= UI =================
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <Hero onSearch={setSearchCity} />

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 mt-4 sm:mt-6">
        <Filters setSelectedFilters={setSelectedFilters} />
      </div>

      {/* LISTINGS */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">

        {filteredProperties.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            ❌ No properties found
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {filteredProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}

          </div>
        )}

      </section>

      <Features />

    </div>
  );
}

export default Home;