import React, { useState } from "react";

const ImageUpload = () => {
const [selectedImage, setSelectedImage] = useState(null);

const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <input  className=" p-1 border border-warning m-3" type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage} alt="Selected" width={200} />}
    </div>
  );
};

export default ImageUpload;