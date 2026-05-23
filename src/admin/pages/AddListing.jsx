import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddListing() {

  const [listings, setListings] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    type: "",
    gender: "",
    category: "",
    description: "",
    image: null,
  });

  // =========================
  // FETCH LISTINGS
  // =========================
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

  useEffect(() => {

    fetchListings();

  }, []);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {

    const { name, value, files } = e.target;

    if (name === "image") {

      setFormData({
        ...formData,
        image: files[0],
      });

    } else {

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // =========================
  // SAVE OR UPDATE
  // =========================
  const handleSave = async () => {

    try {

      const data = new FormData();

      data.append("name", formData.name);
      data.append("location", formData.location);
      data.append("price", formData.price);
      data.append("type", formData.type);
      data.append("gender", formData.gender);
      data.append("category", formData.category);
      data.append("description", formData.description);

      if (formData.image) {
        data.append("image", formData.image);
      }

      // UPDATE
      if (editId !== null) {

        await axios.put(
          `https://pg-backend-9xs4.onrender.com/api/listings/${editId}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Listing Updated Successfully");

      } else {

        // CREATE
        await axios.post(
          "https://pg-backend-9xs4.onrender.com/api/listings",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Listing Added Successfully");
      }

      // REFRESH
      fetchListings();

      // RESET
      setFormData({
        name: "",
        location: "",
        price: "",
        type: "",
        gender: "",
        category: "",
        description: "",
        image: null,
      });

      setEditId(null);

      setShowForm(false);

    } catch (error) {

      console.log(error);

      alert("Something Went Wrong");
    }
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `https://pg-backend-9xs4.onrender.com/api/listings/${id}`
      );

      alert("Listing Deleted");

      fetchListings();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");
    }
  };

  // =========================
  // EDIT
  // =========================
  const handleEdit = (item) => {

    setFormData({
      name: item.name,
      location: item.location,
      price: item.price,
      type: item.type,
      gender: item.gender,
      category: item.category,
      description: item.description,
      image: null,
    });

    setEditId(item.id);

    setShowForm(true);
  };

  return (
    <div className="space-y-6 p-6">

      {/* TOP BAR */}
      <div className="flex items-center justify-between">

        <button
          onClick={() => {

            setShowForm(true);

            setEditId(null);

            setFormData({
              name: "",
              location: "",
              price: "",
              type: "",
              gender: "",
              category: "",
              description: "",
              image: null,
            });
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl shadow"
        >
          + Add Listing
        </button>

        <h1 className="text-2xl font-bold text-gray-800">
          All Listings
        </h1>

        <div></div>

      </div>

      {/* FORM */}
      {showForm && (

        <div className="bg-white p-6 rounded-2xl shadow border">

          <h2 className="text-xl font-semibold mb-5">
            {editId ? "Edit Listing" : "Add New Listing"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Property Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-lg outline-none"
            />

            {/* LOCATION */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="border p-3 rounded-lg outline-none"
            />

            {/* PRICE */}
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border p-3 rounded-lg outline-none"
            />

            {/* TYPE */}
            <input
              type="text"
              name="type"
              placeholder="Room Type"
              value={formData.type}
              onChange={handleChange}
              className="border p-3 rounded-lg outline-none"
            />

            {/* GENDER */}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-3 rounded-lg outline-none"
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>
            </select>

            {/* CATEGORY */}
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border p-3 rounded-lg outline-none"
            >
              <option value="">
                Select Category
              </option>

              <option value="Students">
                Students
              </option>

              <option value="Professionals">
                Professionals
              </option>
            </select>

            {/* DESCRIPTION */}
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="border p-3 rounded-lg outline-none md:col-span-2"
            />

            {/* IMAGE */}
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="border p-3 rounded-lg outline-none md:col-span-2"
            />

          </div>

          {/* BUTTONS */}
          <div className="mt-5 flex gap-3">

            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              {editId ? "Update" : "Save"}
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow border overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-100 text-gray-700">

            <tr>

              <th className="p-4">ID</th>

              <th className="p-4">Photo</th>

              <th className="p-4">Name</th>

              <th className="p-4">Location</th>

              <th className="p-4">Price</th>

              <th className="p-4">Gender</th>

              <th className="p-4">Category</th>

              <th className="p-4">Type</th>

              <th className="p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {listings.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {item.id}
                </td>

                {/* IMAGE */}
                <td className="p-4">

                  {item.image ? (

                    <img
                      src={`https://pg-backend-9xs4.onrender.com/uploads/${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />

                  ) : (
                    "No Image"
                  )}

                </td>

                <td className="p-4 font-medium">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.location}
                </td>

                <td className="p-4">
                  ₹ {item.price}
                </td>

                <td className="p-4">
                  {item.gender}
                </td>

                <td className="p-4">
                  {item.category}
                </td>

                <td className="p-4">
                  {item.type}
                </td>

                {/* ACTIONS */}
                <td className="p-4 space-x-2">

                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}