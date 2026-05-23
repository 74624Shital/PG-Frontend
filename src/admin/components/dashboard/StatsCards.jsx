import StatCard from "./StatCard";
import { Users, Home, Calendar, IndianRupee } from "lucide-react";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <StatCard
        title="Total Users"
        value="1,248"
        growth="12.5"
        icon={<Users className="text-blue-600" />}
        color="bg-blue-100"
      />

      <StatCard
        title="Total Properties"
        value="86"
        growth="8.3"
        icon={<Home className="text-green-600" />}
        color="bg-green-100"
      />

      <StatCard
        title="Total Bookings"
        value="320"
        growth="15.2"
        icon={<Calendar className="text-yellow-600" />}
        color="bg-yellow-100"
      />

      <StatCard
        title="Revenue"
        value="₹2,45,000"
        growth="18.7"
        icon={<IndianRupee className="text-red-500" />}
        color="bg-red-100"
      />

    </div>
  );
}