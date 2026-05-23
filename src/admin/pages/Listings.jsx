import React, { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "../components/listings/ListingCard";

export default function Listings() {

  const [listings, setListings] = useState([]);

  // FETCH DATA FROM BACKEND
  const fetchListings = async () => {

    try {

      const res = await axios.get(
        "https://pg-backend-9xs4.onrender.com/api/listings"
      );

      setListings(res.data);

    } catch (error) {

      console.log("Error fetching listings:", error);

    }
  };

  useEffect(() => {

    fetchListings();

  }, []);

  return (
    <div>

      {/* PAGE TITLE */}
      <div className="flex items-center justify-between mb-6">

        <h1 className="text-3xl font-bold text-gray-800">
          PG Listings
        </h1>

      </div>

      {/* EMPTY STATE */}
      {listings.length === 0 ? (

        <div className="bg-white rounded-2xl shadow p-10 text-center">

          <h2 className="text-2xl font-semibold text-gray-700">
            No Listings Found
          </h2>

          <p className="text-gray-500 mt-2">
            Add your first PG listing from admin panel.
          </p>

        </div>

      ) : (

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {listings.map((item) => (

            <ListingCard
              key={item.id}
              listing={item}
            />

          ))}

        </div>

      )}

    </div>
  );
}