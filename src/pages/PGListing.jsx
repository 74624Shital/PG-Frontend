import React, { useEffect, useState } from "react";
import axios from "axios";

const PGListing = () => {

  const [pgList, setPgList] = useState([]);

  // =================================
  // FETCH LISTINGS
  // =================================
  useEffect(() => {

    fetchListings();

  }, []);

  const fetchListings = async () => {

    try {

      const response = await axios.get(
        "https://pg-backend-9xs4.onrender.com/api/listings"
      );

      console.log("API DATA =", response.data);

      setPgList(response.data);

    } catch (error) {

      console.log("ERROR =", error);

    }
  };

  return (

    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold text-blue-600">
            PG Listings
          </h1>

          <p className="text-gray-600 text-lg">
            Total Listings: {pgList.length}
          </p>

        </div>

        {/* NO DATA */}
        {pgList.length === 0 && (

          <div className="text-center text-red-500 text-2xl">

            No Listings Found

          </div>

        )}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {pgList.map((pg) => (

            <div
              key={pg.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative">

                <img
                  src={
                    pg.image
                      ? pg.image
                      : "https://via.placeholder.com/400x300"
                  }
                  alt={pg.name}
                  className="w-full h-56 object-cover"
                />

                {/* PRICE BADGE */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">

                  ₹{pg.price}/month

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* NAME */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">

                  {pg.name}

                </h2>

                {/* LOCATION */}
                <p className="text-gray-500 mb-4">

                  📍 {pg.location}

                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">

                  {pg.gender && (
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">

                      {pg.gender}

                    </span>
                  )}

                  {pg.category && (
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">

                      {pg.category}

                    </span>
                  )}

                  {pg.type && (
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">

                      {pg.type}

                    </span>
                  )}

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm mb-5 line-clamp-3">

                  {pg.description
                    ? pg.description
                    : "No description available"}

                </p>

                {/* BUTTON */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300">

                  View Details

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default PGListing;