import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// 🔷 LAZY PAGES
const Home = lazy(() => import("./pages/Home"));
const Owner = lazy(() => import("./pages/Owner"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PropertyList = lazy(() => import("./PropertyList"));
const AdminRoutes = lazy(() => import("./admin/routes/AdminRoutes"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));
const PGListing = lazy(() => import("./pages/PGListing"));

// 🔷 WRAPPER
const PageWrapper = ({ children }) => (
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
    {children}
  </div>
);

function Layout() {

  const location = useLocation();

  // 🔥 admin check
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* NAVBAR */}
      {!isAdmin && <Navbar />}

      {/* MAIN */}
      <main
        className={`${
          !isAdmin ? "pt-16 sm:pt-20" : ""
        } min-h-screen bg-gray-50`}
      >

        <Suspense
          fallback={
            <div className="p-10 text-center text-gray-500">
              Loading...
            </div>
          }
        >

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />

            {/* PAGES */}
            <Route
              path="/owner"
              element={
                <PageWrapper>
                  <Owner />
                </PageWrapper>
              }
            />

            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />

            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />

            <Route
              path="/properties"
              element={
                <PageWrapper>
                  <PropertyList />
                </PageWrapper>
              }
            />

            {/* PG LISTING */}
            <Route path="/pg-listing" element={<PGListing />} />

            {/* 🔥 PROPERTY DETAILS (FIXED) */}
            <Route
              path="/property/:id"
              element={
                <PageWrapper>
                  <PropertyDetails />
                </PageWrapper>
              }
            />

            {/* ADMIN */}
            <Route
              path="/admin/*"
              element={<AdminRoutes />}
            />

            {/* FALLBACK */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

          </Routes>

        </Suspense>

      </main>

      {/* FOOTER + WHATSAPP */}
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}