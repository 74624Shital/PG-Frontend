import axios from "axios";
import { useEffect, useState } from "react";
import ListingCard from "../components/listings/ListingCard";

export default function Listings() {

  const [listings, setListings] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
  });

  // ✅ FETCH LISTINGS
  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {

    try {

      const res = await axios.get(
        "https://pg-backend-9xs4.onrender.com/api/listings"
      );

      setListings(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  return (
    <div className="space-y-6">

      {/* ✅ PAGE HEADER */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          All Listings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage all PG and property listings
        </p>
      </div>

      {/* ✅ LISTINGS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {listings.length > 0 ? (

          listings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
            />
          ))

        ) : (

          <div className="text-gray-500">
            No Listings Found
          </div>

        )}

      </div>

    </div>
  );
}