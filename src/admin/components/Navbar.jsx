import { Search, Bell } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ setIsOpen }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ✅ ADDED: memoized event handler (prevents re-creation on every render)
  const handleSearch = useMemo(() => {
    return (e) => {
      window.dispatchEvent(
        new CustomEvent("admin-search", {
          detail: e.target.value,
        })
      );
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/", { replace: true });
    setShowDropdown(false);
  };

  return (
    <div className="w-full h-16 bg-white/90 backdrop-blur-md px-4 md:px-6 flex items-center justify-between shadow-sm sticky top-0 z-40 border-b">

      {/* LEFT */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {/* SEARCH */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="relative w-full max-w-md">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search bookings, users..."
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>

        {/* NOTIFICATION */}
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600 hover:text-orange-500 transition" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* PROFILE */}
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-3 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full border-2 border-white"
            alt="admin"
          />
          <span className="hidden md:block text-sm font-semibold">Admin</span>
        </div>

        {/* DROPDOWN */}
        {showDropdown && (
          <div className="absolute right-0 top-14 w-44 bg-white rounded-xl shadow-lg border p-2 z-50">

            <div
              onClick={handleLogout}
              className="px-3 py-2 rounded-lg hover:bg-gray-100 text-black cursor-pointer"
            >
              Logout
            </div>

          </div>
        )}

      </div>
    </div>
  );
}