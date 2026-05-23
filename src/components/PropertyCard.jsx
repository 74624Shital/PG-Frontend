import React from "react";
import { useNavigate } from "react-router-dom";

export default function PropertyCard({ property }) {

  const navigate = useNavigate();

  // ✅ correct image field
  const imageSrc =
    property?.image || "https://via.placeholder.com/400x300?text=No+Image";

  const handleViewDetails = () => {

    // 🔥 SAFE ID HANDLING (VERY IMPORTANT)
    const propertyId = property?.id || property?._id;

    console.log("CLICKED PROPERTY ID =", propertyId);

    if (!propertyId) {
      console.log("❌ ID missing");
      return;
    }

    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">

      {/* IMAGE */}
      <img
        src={imageSrc}
        alt={property?.name}
        className="w-full h-56 object-cover"
      />

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-grow">

        <h3 className="font-semibold text-lg">
          {property?.name}
        </h3>

        <p className="text-sm text-gray-500">
          📍 {property?.location}
        </p>

        <p className="font-bold mt-1">
          ₹{property?.price}
        </p>

        <button
          onClick={handleViewDetails}
          className="mt-auto bg-orange-500 text-white py-2 rounded-lg"
        >
          View Details
        </button>

      </div>
    </div>
  );
}