export default function Badge({ status = "Unknown" }) {
  const styles = {
    Pending: "bg-orange-100 text-orange-600 border border-orange-200",
    Confirmed: "bg-green-100 text-green-600 border border-green-200",
    Cancelled: "bg-red-100 text-red-500 border border-red-200",
    Completed: "bg-blue-100 text-blue-600 border border-blue-200",
  };

  const baseStyle =
    "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full capitalize transition";

  return (
    <span className={`${baseStyle} ${styles[status] || "bg-gray-100 text-gray-600 border"}`}>
      {/* 🔵 DOT */}
      <span
        className={`w-2 h-2 mr-2 rounded-full ${
          status === "Pending"
            ? "bg-orange-500"
            : status === "Confirmed"
            ? "bg-green-500"
            : status === "Cancelled"
            ? "bg-red-500"
            : status === "Completed"
            ? "bg-blue-500"
            : "bg-gray-400"
        }`}
      />

      {status}
    </span>
  );
}