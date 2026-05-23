import { ArrowUpRight } from "lucide-react";

export default function StatCard({ title, value, growth, icon, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition">

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>

        <p className="text-green-500 text-sm flex items-center gap-1 mt-1">
          <ArrowUpRight size={14} />
          {growth}%
          <span className="text-gray-400 text-xs ml-1">vs last month</span>
        </p>
      </div>

      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${color}`}>
        {icon}
      </div>

    </div>
  );
}