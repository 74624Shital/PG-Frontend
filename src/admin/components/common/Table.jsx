import { useEffect, useState, useMemo } from "react";

export default function Table({ data = [] }) {
  const [search, setSearch] = useState("");

  // 🔍 Listen global search (from navbar)
  useEffect(() => {
    const handleSearch = (e) => {
      setSearch((e.detail || "").toLowerCase());
    };

    window.addEventListener("admin-search", handleSearch);
    return () => window.removeEventListener("admin-search", handleSearch);
  }, []);

  // 🔍 OPTIMIZED: memoized filtering (prevents recalculation on every render)
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search)
      )
    );
  }, [search, data]);

  // 💰 Format amount (memoized for performance)
  const formatCurrency = useMemo(() => {
    return (amount) =>
      new Intl.NumberFormat("en-IN").format(amount);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[600px]">

          {/* HEADER */}
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Room</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Amount</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, i) => (
                <tr
                  key={i}
                  className={`border-t transition ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-orange-50`}
                >
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    {item.name}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap">
                    {item.room}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Pending"
                          ? "bg-orange-100 text-orange-600"
                          : item.status === "Confirmed"
                          ? "bg-green-100 text-green-600"
                          : item.status === "Cancelled"
                          ? "bg-red-100 text-red-500"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 font-semibold text-right whitespace-nowrap">
                    ₹{formatCurrency(item.amount)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-10 text-gray-400">
                  🔍 No matching results found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}