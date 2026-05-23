```jsx id="k8m2qp"
import React from "react";

export default function Settings() {
  return (
    <div className="space-y-6">

      {/* 🔷 PAGE HEADER */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage website and admin settings
        </p>
      </div>

      {/* 🔷 SETTINGS CARD */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">

        {/* 🔷 WEBSITE NAME */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website Name
          </label>

          <input
            type="text"
            placeholder="Enter website name"
            className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
          />
        </div>

        {/* 🔷 CONTACT EMAIL */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Email
          </label>

          <input
            type="email"
            placeholder="Enter contact email"
            className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
          />
        </div>

        {/* 🔷 PHONE NUMBER */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
          />
        </div>

        {/* 🔷 SAVE BUTTON */}
        <div className="pt-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
            Save Settings
          </button>
        </div>

      </div>

    </div>
  );
}
```
