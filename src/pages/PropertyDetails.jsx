import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PropertyDetails() {

  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://pg-backend-9xs4.onrender.com/api/listings/${id}`
      );

      console.log("API RESPONSE =", res.data);

      // ✅ FIXED LINE
      const data = res.data;

      setProperty(data);

    } catch (error) {
      console.log("API ERROR =", error);
      setProperty(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  if (!property) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        No Property Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* IMAGE */}
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-[400px] object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">

          <h1 className="text-3xl font-bold">
            {property.name}
          </h1>

          <p className="text-gray-600 mt-2">
            📍 {property.location}
          </p>

          <p className="text-xl font-bold mt-3 text-orange-500">
            ₹{property.price}
          </p>

          <p className="mt-4 text-gray-700">
            {property.description}
          </p>

          {/* TAGS */}
          <div className="flex gap-3 mt-5">

            {property.gender && (
              <span className="bg-pink-100 px-3 py-1 rounded-full">
                {property.gender}
              </span>
            )}

            {property.type && (
              <span className="bg-orange-100 px-3 py-1 rounded-full">
                {property.type}
              </span>
            )}

            {property.category && (
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                {property.category}
              </span>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}