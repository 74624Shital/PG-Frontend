import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // ✅ safer check
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // ✅ protect route
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}