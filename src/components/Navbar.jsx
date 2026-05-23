import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// ✅ ADDED THIS LINE (ONLY CHANGE)
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Owner", path: "/owner" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAdmin = localStorage.getItem("isAdmin");

  const handleAdminClick = () => {
    if (isAdmin) {
      setShowDropdown(!showDropdown);
    } else {
      navigate("/admin/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setShowDropdown(false);
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1300px] mx-auto px-4 mt-4">

        <div
          className={`grid grid-cols-2 md:grid-cols-3 items-center rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
            isScrolled
              ? "bg-transparent shadow-none"
              : "bg-white shadow-md"
          }`}
        >

          {/* 🔷 LEFT */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer justify-self-start text-black"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#ff7a00] rounded-lg shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M4 11 L12 5 L20 11 V20 H4 Z" fill="white" />
                <rect x="10" y="14" width="4" height="6" fill="#1f3a5f" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-black leading-none">
                Stay<span className="text-[#ff7a00]">zeno</span>
              </h1>
              <p className="text-[10px] tracking-[2px] text-gray-500 uppercase">
                Living
              </p>
            </div>
          </div>

          {/* 🔗 CENTER */}
          <div className="hidden md:flex items-center justify-center gap-10 lg:gap-12 text-sm lg:text-base font-semibold text-black">
            {menuItems.map((item) => (
              <div
                key={item.path}
                onClick={() => navigate(item.path)}
                className="relative cursor-pointer group"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-[#ff7a00]"
                      : "group-hover:text-[#ff7a00]"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#ff7a00] transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* 🔥 RIGHT SIDE */}
          <div className="flex justify-end items-center gap-2 sm:gap-3 relative">

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 rounded-lg text-black"
              >
                {/* OPTIONAL: you can replace SVG with Menu icon */}
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* 🔥 ADMIN BUTTON */}
            <div className="hidden md:flex">
              <button
                onClick={handleAdminClick}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                {isAdmin ? "Admin" : "Admin / Login"}
              </button>
            </div>

            {/* 🔽 DROPDOWN */}
            {isAdmin && showDropdown && (
              <div className="absolute right-0 top-14 w-44 bg-white rounded-xl shadow-lg border p-2 z-50">

                <div
                  onClick={() => {
                    navigate("/admin/dashboard");
                    setShowDropdown(false);
                  }}
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  Dashboard
                </div>

                <div
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
                >
                  Logout
                </div>

              </div>
            )}

          </div>

        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      <div className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5 flex flex-col h-full">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-black text-lg font-semibold">Menu</h2>
            <button className="text-2xl p-2" onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          <div className="flex flex-col gap-5 text-base font-medium text-black">
            {menuItems.map((item) => (
              <div
                key={item.path}
                onClick={() => { navigate(item.path); setMenuOpen(false); }}
                className={`px-4 py-3 rounded-xl transition ${
                  isActive(item.path)
                    ? "bg-orange-50 text-[#ff7a00]"
                    : "hover:bg-gray-50"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* 🔥 MOBILE ADMIN */}
          <button
            onClick={() => {
              handleAdminClick();
              setMenuOpen(false);
            }}
            className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold shadow-md"
          >
            {isAdmin ? "Admin" : "Admin / Login"}
          </button>

          <div className="mt-auto text-xs text-gray-400 border-t pt-4">
            © {new Date().getFullYear()} Stayzeno Living
          </div>
        </div>
      </div>
    </div>
  );
}