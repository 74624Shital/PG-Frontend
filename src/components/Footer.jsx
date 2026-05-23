import React from "react";
import { useNavigate } from "react-router-dom";

// 🔥 LOGO
const StanzaLogo = () => (
  <div className="flex items-center gap-2 sm:gap-3">
    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#ff7a00] rounded-xl blur-lg opacity-30"></div>

      <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1e3a5f] to-[#0d1b2e] rounded-xl flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7">
          <path d="M4 11 L12 5 L20 11 V20 H4 Z" fill="white" />
          <rect x="10" y="14" width="4" height="6" fill="#ff7a00" />
        </svg>
      </div>
    </div>

    <div className="leading-tight">
      <h1 className="text-base sm:text-lg font-extrabold text-white">
        Stayzeno
      </h1>
      <p className="text-[9px] sm:text-[10px] font-semibold text-[#ff7a00] tracking-[2px] sm:tracking-[3px]">
        LIVING
      </p>
    </div>
  </div>
);

export default function Footer() {
  const navigate = useNavigate();

  const footerLinks = {
    Company: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Owner", path: "/owner" },
      { label: "Contact", path: "/contact" },
    ],
    Support: [
      { label: "Help Center", path: "/" },
      { label: "Safety", path: "/" },
    ],
    Cities: [
      { label: "Pune", path: "/properties?city=pune" },
      { label: "Mumbai", path: "/properties?city=mumbai" },
      { label: "Bangalore", path: "/properties?city=bangalore" },
    ],
    Legal: [
      { label: "Privacy Policy", path: "/" },
      { label: "Terms of Service", path: "/" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0d1b2e] via-[#12263f] to-[#0a1626] border-t border-[#1e3050] px-3 sm:px-4 md:px-8 py-10 sm:py-12 overflow-hidden">
      
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#1e3a5f] opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0d3b66] opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔝 TOP */}
        <div
          className="
            grid
            gap-8 sm:gap-10
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            mb-8 sm:mb-10
          "
        >

          {/* 🔷 LOGO (UPDATED WITH SOCIAL ICONS) */}
          <div className="lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <StanzaLogo />
            </div>

            <p className="text-xs sm:text-sm text-[#7a93b0] max-w-xs">
              Modern co-living spaces designed for comfort, convenience, and smart living.
            </p>

            {/* 🔥 SOCIAL ICONS - Updated with SVGs */}
            <div className="flex gap-3 mt-4">
              {[
                { 
                  name: "Facebook", 
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                    </svg>
                  )
                },
                { 
                  name: "Instagram", 
                  icon: (
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ) 
                },
                { 
                  name: "YouTube", 
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ) 
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1a2b40] text-white hover:bg-[#ff7a00] transition cursor-pointer"
                  title={item.name}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* 🔗 LINKS */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs sm:text-sm font-bold text-[#ff7a00] uppercase mb-3 sm:mb-4">
                {section}
              </h4>

              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <span
                      onClick={() => navigate(link.path)}
                      className="text-xs sm:text-sm text-[#7a93b0] hover:text-white cursor-pointer transition"
                    >
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        
        <div className="border-t border-[#1e3050] pt-4 sm:pt-6 flex flex-col items-center justify-center gap-2 text-center">
          
          <p className="text-xs sm:text-sm text-[#4a6680]">
            © {new Date().getFullYear()} Stayzeno Living. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-[#4a6680]">
            Designed & Developed by Wisdom Tech IT Services
          </p>

          

        </div>

      </div>
    </footer>
  );
}