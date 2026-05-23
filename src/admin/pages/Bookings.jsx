import Table from "../components/common/Table";
import { bookings } from "../data/dummyData";

export default function Bookings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Bookings</h2>
      <Table data={bookings} />
    </div>
  );
}