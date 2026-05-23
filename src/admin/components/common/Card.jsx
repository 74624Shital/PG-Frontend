export default function Card({ children, title, action }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">

      {/* 🔷 HEADER */}
      {(title || action) && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-700">{title}</h3>
          {action && <div>{action}</div>}
        </div>
      )}

      {/* 🔷 CONTENT */}
      {children}
    </div>
  );
}