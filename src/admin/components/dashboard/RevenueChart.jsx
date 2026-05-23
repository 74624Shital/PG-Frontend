const data = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 200 },
  { month: "Mar", value: 230 },
  { month: "Apr", value: 150 },
  { month: "May", value: 200 },
  { month: "Jun", value: 260 },
];

export default function RevenueChart() {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="font-semibold mb-4">Revenue Overview</h3>

      {/* CHART AREA */}
      <div className="w-full h-64 flex items-end gap-3">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center flex-1">

            {/* BAR */}
            <div
              className="w-full bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all"
              style={{
                height: `${(item.value / max) * 100}%`,
                minHeight: "10px",
              }}
            />

            {/* LABEL */}
            <span className="text-xs mt-2 text-gray-500">
              {item.month}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
}