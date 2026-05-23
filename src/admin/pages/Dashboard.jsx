export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-500">
            Total Properties
          </h2>

          <p className="text-3xl font-bold mt-3">
            24
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-500">
            Bookings
          </h2>

          <p className="text-3xl font-bold mt-3">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-500">
            Users
          </h2>

          <p className="text-3xl font-bold mt-3">
            50
          </p>
        </div>

      </div>
    </div>
  );
}