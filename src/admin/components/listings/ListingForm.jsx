import React, { useState } from "react";

export default function ListingForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("pgListings")) || [];

    const newListing = {
      id: Date.now(),
      ...formData,
    };

    const updated = [...oldData, newListing];

    localStorage.setItem("pgListings", JSON.stringify(updated));

    alert("Listing Added Successfully");

    setFormData({
      name: "",
      location: "",
      price: "",
      image: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="PG Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 rounded-xl"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full border p-3 rounded-xl"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full border p-3 rounded-xl"
      />

      <input
        type="file"
        onChange={handleImage}
        className="w-full"
      />

      <button className="bg-orange-500 text-white px-6 py-3 rounded-xl">
        Add Listing
      </button>
    </form>
  );
}