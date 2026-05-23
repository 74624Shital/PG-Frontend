import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();

  const menu = useMemo(
    () => [
      { name: "Dashboard", path: "/admin/dashboard" },
      { name: "Properties", path: "/admin/properties" },
      { name: "Listings", path: "/admin/listings" },
      { name: "Add Listing", path: "/admin/add-listing" },
      { name: "Bookings", path: "/admin/bookings" },
      { name: "Users", path: "/admin/users" },
      { name: "Settings", path: "/admin/settings" },
    ],
    []
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed z-50 md:static top-0 left-0 h-full w-64 bg-gradient-to-b from-[#7c2d12] to-[#ea580c] text-white p-5 transform transition-transform duration-300 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h1 className="text-2xl font-bold mb-8">
          PG Admin
        </h1>

        <nav className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block p-3 rounded-xl transition-all duration-200 ${
                pathname === item.path
                  ? "bg-white text-orange-600 font-semibold shadow"
                  : "hover:bg-orange-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}