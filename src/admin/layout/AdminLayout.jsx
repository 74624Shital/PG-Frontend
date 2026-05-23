import { useState, Suspense } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* 🔷 SIDEBAR */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* 🔷 MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔷 MAIN */}
      <div className="flex-1 flex flex-col w-full">

        {/* 🔷 NAVBAR */}
        <div className="sticky top-0 z-30 bg-white shadow-sm w-full">
          <Navbar setIsOpen={setIsOpen} />
        </div>

        {/* 🔷 PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 lg:p-8">

          {/* 🔷 CENTER CONTAINER */}
          <div className="w-full max-w-7xl mx-auto">

            {/* 🔷 NESTED ROUTES */}
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-20">
                  <div className="text-lg font-semibold text-gray-500">
                    Loading...
                  </div>
                </div>
              }
            >
              <Outlet />
            </Suspense>

          </div>
        </main>
      </div>
    </div>
  );
}