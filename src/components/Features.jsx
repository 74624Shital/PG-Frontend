import React from "react";

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
        </svg>
      ),
      title: "High-Speed Wi-Fi",
      desc: "Seamless internet in every room for work and entertainment.",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
      title: "Hygienic Meals",
      desc: "Chef-prepared nutritious meals served fresh every day.",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "24/7 Security",
      desc: "CCTV surveillance and trained security staff round the clock.",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <path d="M6 17v2M18 17v2M6 7V5M18 7V5" />
        </svg>
      ),
      title: "Air Conditioning",
      desc: "Climate-controlled rooms for maximum comfort all year.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] px-3 sm:px-4 md:px-8 lg:px-12 py-10 sm:py-12 md:py-14">

      {/* 🔷 HEADING */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff7a00] hover:text-[#e66900] transition">
          Why Choose Stayzeno?
        </h2>
        <p className="text-gray-500 mt-2 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
          Everything you need, all under one roof.
        </p>
      </div>

      {/* 🔶 GRID */}
      <div
        className="
          max-w-6xl mx-auto
          grid
          gap-4 sm:gap-5 md:gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {features.map((f, index) => (
          <div
            key={index}
            className="
              group bg-white rounded-2xl
              p-5 sm:p-6
              flex flex-col items-center text-center
              shadow-sm sm:shadow-md
              hover:shadow-xl hover:-translate-y-2
              transition-all duration-300
            "
          >

            {/* 🔷 ICON */}
            <div
              className="
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                rounded-full bg-[#ff7a00] text-white
                flex items-center justify-center mb-4 sm:mb-5
                group-hover:bg-[#e66900] group-hover:scale-110
                transition-all duration-300
              "
            >
              {f.icon}
            </div>

            {/* 🔤 TITLE */}
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#ff7a00] mb-2 hover:text-[#e66900] transition">
              {f.title}
            </h3>

            {/* 📝 DESC */}
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              {f.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;