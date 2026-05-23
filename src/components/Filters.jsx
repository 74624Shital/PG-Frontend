import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Filters({ setSelectedFilters }) {
  const [activeFilters, setActiveFilters] = useState({
    locality: [],
    budget: [],
    gender: [],
    preferred: [],
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDropdown = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  const handleSelect = (type, value) => {
    setActiveFilters((prev) => {
      const isSame =
        prev[type].length === 1 && prev[type][0] === value;

      const updated = {
        ...prev,
        [type]: isSame ? [] : [value],
      };

      setSelectedFilters(updated);
      return updated;
    });

    setOpenDropdown(null);
  };

  const clearFilters = () => {
    const empty = {
      locality: [],
      budget: [],
      gender: [],
      preferred: [],
    };
    setActiveFilters(empty);
    setSelectedFilters(empty);
  };

  const options = {
    locality: ["Baner", "Wakad", "Hinjewadi", "Kothrud", "Viman Nagar"],
    gender: ["Male", "Female", "Unisex"],
    preferred: ["Students", "Working"],
    budget: ["Under 10000", "10000-15000", "15000-20000", "20000+"],
  };

  return (
    <div
      ref={ref}
      className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border sticky top-2 z-40"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold text-gray-500 uppercase">
          Filters
        </span>
        <button
          onClick={clearFilters}
          className="text-xs text-red-400 hover:text-red-500"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
        {Object.keys(options).map((type) => {
          const selected = activeFilters[type][0];

          return (
            <div key={type} className="relative">
              {/* 🔘 BUTTON */}
              <button
                onClick={() => toggleDropdown(type)}
                className={`w-full px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm border flex justify-between items-center transition
                  focus:outline-none focus:ring-2 focus:ring-orange-400 active:bg-orange-50
                  ${
                    selected
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-gray-600 hover:border-orange-400"
                  }`}
              >
                <span className="truncate capitalize">
                  {selected || `Select ${type}`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    openDropdown === type ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* 🔽 DROPDOWN */}
              {openDropdown === type && (
                <div className="absolute left-0 w-full mt-2 bg-white shadow-lg rounded-lg z-50 max-h-52 overflow-y-auto">
                  {options[type].map((item) => {
                    const isActive = selected === item;

                    return (
                      <div
                        key={item}
                        onClick={() => handleSelect(type, item)}
                        className={`px-3 py-2 text-xs sm:text-sm cursor-pointer ${
                          isActive
                            ? "bg-orange-50 text-orange-600 font-semibold"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}