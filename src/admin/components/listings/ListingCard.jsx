import React from "react";
import axios from "axios";

export default function ListingCard({ listing }) {

  // ✅ Delete Listing
  const handleDelete = async () => {
    try {

      await axios.delete(
        `https://pg-backend-9xs4.onrender.com/api/listings/${listing.id || listing._id}`
      );

      alert("Listing Deleted Successfully");

      // ✅ Refresh page
      window.location.reload();

    } catch (error) {

      console.log(error);
      alert("Delete Failed");

    }
  };

  // ✅ Edit Listing
  const handleEdit = () => {

    alert("Edit Button Clicked");

  };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden border border-gray-100 hover:shadow-lg transition">

      {/* ✅ Listing Image */}
      <img
        src={listing.image || "https://via.placeholder.com/400"}
        alt={listing.name || listing.title}
        className="w-full h-52 object-cover"
      />

      {/* ✅ Content */}
      <div className="p-4">

        {/* ✅ Title */}
        <h2 className="text-xl font-bold text-gray-800">
          {listing.name || listing.title}
        </h2>

        {/* ✅ Location */}
        <p className="text-gray-500 mt-1">
          {listing.location}
        </p>

        {/* ✅ Price */}
        <p className="text-orange-500 font-semibold mt-3 text-lg">
          ₹{listing.price}
        </p>

        {/* ✅ Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {listing.description}
        </p>

        {/* ✅ CRUD Buttons */}
        <div className="flex gap-3 mt-5">

          {/* ✅ Edit Button */}
          <button
            onClick={handleEdit}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-medium transition"
          >
            Edit
          </button>

          {/* ✅ Delete Button */}
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-medium transition"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}