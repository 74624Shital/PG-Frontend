import React, { useState, useEffect, useRef } from "react";
import s3 from "../assets/s3.webp";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";

function Hero({ onSearch }) {
  const slides = [s3, s2, s1];

  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const wrapperRef = useRef(null);

  const options = [
    "Pune", "Mumbai", "Bangalore",
    "Kothrud", "Wakad", "Baner", "Hinjewadi", "Viman Nagar",
    "Kharadi", "Balewadi",
    "Andheri", "Bandra",
    "Whitefield", "Koramangala"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() !== "") {
      let result = options.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );

      if (result.length === 0) {
        result = options.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
      }

      if (result.length > 0) {
        setFiltered([result[0]]);
        setShowSuggestions(true);
      } else {
        setFiltered([]);
        setShowSuggestions(false);
      }
    } else {
      setFiltered([]);
      setShowSuggestions(false);
    }
  };

  const handleSelect = (value) => {
    setSearch(value);
    setShowSuggestions(false);
    onSearch(value);
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      onSearch(search);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full mt-4 sm:mt-6 rounded-none overflow-hidden shadow-sm">

      {/* HERO IMAGES */}
      <div className="w-full relative overflow-hidden aspect-[2099/602] bg-gray-100">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide}
            loading="lazy"
            decoding="async"
            alt="Hero Slide"
            className={`absolute top-0 left-0 w-full h-full object-cover object-[center_right] sm:object-center transition-opacity duration-700 ease-in-out ${
              active === i ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 py-2 sm:py-3 bg-gray-50/50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-orange-500" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* SEARCH BOX */}
      <div className="flex justify-center mt-5 sm:mt-7 md:mt-8 mb-8 sm:mb-10 px-2">
        <div
          ref={wrapperRef}
          className="relative flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-[95%] sm:max-w-[500px] bg-white rounded-xl sm:rounded-full shadow-xl sm:shadow-2xl overflow-hidden border border-gray-100"
        >
          <input
            type="text"
            placeholder="Search city or area..."
            value={search}
            onChange={handleChange}
            onFocus={() => search && setShowSuggestions(true)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg outline-none text-gray-800 placeholder:text-gray-400"
          />

          <button
            onClick={handleSearch}
            className="w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-semibold text-base sm:text-lg hover:bg-orange-600 transition duration-150"
          >
            Search
          </button>

          {/* SUGGESTIONS */}
          {showSuggestions && filtered.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl mt-2 z-50 border border-gray-100 overflow-hidden">
              {filtered.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(item)}
                  className="px-4 sm:px-6 py-3 sm:py-4 cursor-pointer hover:bg-orange-50 text-gray-700 font-medium text-sm sm:text-base md:text-lg border-b border-gray-100 last:border-b-0"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Hero;