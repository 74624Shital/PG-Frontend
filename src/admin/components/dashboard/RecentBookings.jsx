import Badge from "../common/Badge";
import Card from "../common/Card";

const bookings = [
  {
    id: "#BK1001",
    name: "Rahul Sharma",
    property: "Shivam PG House",
    checkIn: "01 Jul 2024",
    checkOut: "01 Aug 2024",
    amount: 8000,
    status: "Confirmed",
  },
  {
    id: "#BK1002",
    name: "Amit Kumar",
    property: "Lucky PG",
    checkIn: "05 Jul 2024",
    checkOut: "05 Aug 2024",
    amount: 7500,
    status: "Pending",
  },
  {
    id: "#BK1003",
    name: "Priya Patel",
    property: "Comfort PG",
    checkIn: "03 Jul 2024",
    checkOut: "03 Aug 2024",
    amount: 9000,
    status: "Confirmed",
  },
  {
    id: "#BK1004",
    name: "Neha Singh",
    property: "Shivam PG House",
    checkIn: "02 Jul 2024",
    checkOut: "02 Aug 2024",
    amount: 8500,
    status: "Cancelled",
  },
];

export default function RecentBookings() {
  return (
    <Card
      title="Recent Bookings"
      action={
        <button className="text-sm text-orange-500 hover:underline">
          View All
        </button>
      }
    >
      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          {/* 🔷 HEADER */}
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2 text-left">Booking ID</th>
              <th className="py-2 text-left">Tenant</th>
              <th className="py-2 text-left">Property</th>
              <th className="py-2 text-left">Check In</th>
              <th className="py-2 text-left">Check Out</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>

          {/* 🔷 BODY */}
          <tbody>
            {bookings.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.property}</td>
                <td>{item.checkIn}</td>
                <td>{item.checkOut}</td>
                <td>₹{item.amount}</td>
                <td>
                  <Badge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </Card>
  );
}