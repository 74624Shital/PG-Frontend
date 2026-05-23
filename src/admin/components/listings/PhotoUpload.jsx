import React, { useState } from "react";

export default function PhotoUpload() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <input type="file" onChange={handleImage} />

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="mt-4 w-64 h-64 object-cover rounded-xl"
        />
      )}
    </div>
  );
}