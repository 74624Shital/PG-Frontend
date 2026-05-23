const data = [
  { name: "Confirmed", value: 160 },
  { name: "Pending", value: 80 },
  { name: "Cancelled", value: 40 },
  { name: "Completed", value: 40 },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6"];

export default function BookingChart() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  let cumulative = 0;

  return (
    <div className="w-full">

      {/* TITLE */}
      <h3 className="font-semibold mb-4">Bookings Overview</h3>

      <div className="flex flex-col md:flex-row items-center gap-6">

        {/* DONUT CHART (SVG) */}
        <div className="relative w-[200px] h-[200px]">

          <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">

            {data.map((item, index) => {
              const value = (item.value / total) * 100;
              const stroke = value * 2.51; // circle circumference approx

              const circle = (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={COLORS[index]}
                  strokeWidth="10"
                  strokeDasharray={`${stroke} 251`}
                  strokeDashoffset={251 - cumulative * 2.51}
                />
              );

              cumulative += value;
              return circle;
            })}

          </svg>

          {/* CENTER TEXT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">{total}</h2>
            <p className="text-gray-400 text-sm">Total</p>
          </div>

        </div>

        {/* LEGEND */}
        <div className="flex flex-col gap-3 text-sm">

          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-6">

              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                {item.name}
              </div>

              <span className="text-gray-500">
                {item.value} ({Math.round((item.value / total) * 100)}%)
              </span>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}