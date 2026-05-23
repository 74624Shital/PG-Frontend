import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import AdminLayout from "../layout/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

// ================= AUTH =================
const Login = lazy(() => import("../pages/Login"));

// ================= DASHBOARD =================
const Dashboard = lazy(() => import("../pages/Dashboard"));

// ================= MANAGEMENT =================
const Properties = lazy(() => import("../pages/Properties"));
const Bookings = lazy(() => import("../pages/Bookings"));
const Users = lazy(() => import("../pages/Users"));

// ================= LISTINGS =================
const Listings = lazy(() => import("../pages/Listings"));
const AddListing = lazy(() => import("../pages/AddListing"));
const EditListing = lazy(() => import("../pages/EditListing"));

// ================= SETTINGS =================
const Settings = lazy(() => import("../pages/Settings"));

export default function AdminRoutes() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-xl">
          Loading...
        </div>
      }
    >
      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN LAYOUT (PROTECTED) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          {/* DEFAULT REDIRECT */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* DASHBOARD */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* MANAGEMENT */}
          <Route path="properties" element={<Properties />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />

          {/* LISTINGS */}
          <Route path="listings" element={<Listings />} />
          <Route path="add-listing" element={<AddListing />} />
          <Route path="edit-listing/:id" element={<EditListing />} />

          {/* SETTINGS */}
          <Route path="settings" element={<Settings />} />

        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </Suspense>
  );
}