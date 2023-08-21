import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?count=12&client_id=ZZFnVgVsJpGC2VGeHy4hcMDv4vLS7-TKcGc6YoS-ALA"
      )
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    // grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 grid-rows-2 gap-4 px-10 w-full h-auto
    <div className="grid w-full gridParent gap-4 px-10">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          className="border rounded-lg hover:cursor-pointer object-cover"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
