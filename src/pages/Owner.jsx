import React from "react";

export default function Owner() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 sm:px-6 md:px-8 py-6">

      {/* 🔷 HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
          Owner Dashboard
        </h1>

        <button className="bg-[#ff7a00] hover:bg-[#e66a00] text-white px-4 py-2 rounded-lg text-sm shadow-sm">
          + Add Property
        </button>
      </div>

      {/* 🔶 STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Total Rooms", value: "120" },
          { title: "Revenue", value: "₹2.4L" },
          { title: "Tenants", value: "98" },
          { title: "Issues", value: "6" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition"
          >
            <p className="text-slate-500 text-xs sm:text-sm">
              {item.title}
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 mt-1">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* 🔷 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 🛏️ ROOMS TABLE */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow-sm border">
          <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-4">
            Room Overview
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead>
                <tr className="text-slate-500 border-b">
                  <th className="text-left py-2">Room</th>
                  <th>Status</th>
                  <th>Rent</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {[
                  { room: "A-101", status: "Occupied", rent: "₹8,000" },
                  { room: "A-102", status: "Vacant", rent: "₹7,500" },
                  { room: "B-201", status: "Maintenance", rent: "₹9,000" },
                ].map((r, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 text-slate-800">{r.room}</td>

                    <td>
                      <span
                        className={`px-2 py-1 rounded text-[10px] sm:text-xs font-medium ${
                          r.status === "Occupied"
                            ? "bg-green-100 text-green-700"
                            : r.status === "Vacant"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>

                    <td className="text-slate-700">{r.rent}</td>

                    <td>
                      <button className="text-[#ff7a00] text-xs font-medium hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 📊 SIDE PANEL */}
        <div className="flex flex-col gap-6">

          {/* 💰 REVENUE */}
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <h2 className="text-base sm:text-lg text-slate-800 mb-3">
              Revenue
            </h2>

            <div className="flex items-end gap-2 h-28">
              {[40, 60, 50, 80, 70, 90].map((h, i) => (
                <div
                  key={i}
                  className="bg-[#ff7a00] w-3 rounded"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* 🔧 MAINTENANCE */}
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <h2 className="text-base sm:text-lg text-slate-800 mb-3">
              Maintenance
            </h2>

            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex justify-between">
                <span className="text-slate-700">Water issue</span>
                <span className="text-red-500 font-medium">High</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-700">AC repair</span>
                <span className="text-yellow-500 font-medium">Medium</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-700">Cleaning</span>
                <span className="text-green-500 font-medium">Low</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 👥 TENANTS */}
      <div className="mt-8 bg-white p-4 rounded-xl shadow-sm border">
        <h2 className="text-base sm:text-lg text-slate-800 mb-4">
          Tenants
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Rahul", status: "Paid" },
            { name: "Aman", status: "Due" },
            { name: "Priya", status: "Overdue" },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 p-3 rounded-lg flex justify-between items-center border"
            >
              <span className="text-sm text-slate-800">{t.name}</span>

              <span
                className={`text-[10px] sm:text-xs px-2 py-1 rounded font-medium ${
                  t.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : t.status === "Due"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ⚡ QUICK ACTIONS */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Send Reminder",
          "Add Tenant",
          "Generate Invoice",
          "Schedule Work",
        ].map((action, i) => (
          <button
            key={i}
            className="bg-white border text-slate-700 py-3 rounded-lg text-xs sm:text-sm hover:border-[#ff7a00] hover:text-[#ff7a00] transition"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}