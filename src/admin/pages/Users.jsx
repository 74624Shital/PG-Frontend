import { useState } from "react";
import Table from "../components/common/Table";
import { bookings } from "../data/dummyData";

export default function Users() {
  const [search, setSearch] = useState("");

  // 🔍 FILTER DATA
  const filteredData = bookings.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.room.toLowerCase().includes(search.toLowerCase()) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      {/* 🔍 SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full max-w-sm bg-white shadow-md rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      {/* 📊 TABLE */}
      <Table data={filteredData} />
    </div>
  );
}