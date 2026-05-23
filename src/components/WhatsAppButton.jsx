import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import React from "react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip - Hidden on mobile, visible from sm breakpoint up */}
      <div
        className={`
          hidden sm:block relative bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-md
          text-sm font-medium text-gray-800 whitespace-nowrap
          transition-all duration-300 ease-out
          ${
            showTooltip
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-2 scale-95 pointer-events-none"
          }
        `}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Chat with us!
        </span>
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-white" />
      </div>

      {/* Button - Scaled for mobile responsiveness */}
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />

        <div className="
          relative z-10 
          w-12 h-12 sm:w-14 sm:h-14 
          bg-green-500 hover:bg-green-600
          rounded-full flex items-center justify-center
          shadow-lg hover:shadow-green-400/50
          transition-all duration-200 ease-out
          hover:scale-110 active:scale-95
        ">
          <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
        </div>
      </div>
    </a>
  );
}