import React, { useState } from "react";

const AnatomicalModel = () => {
  const [showImage, setShowImage] = useState("1.jpeg");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (image) => {
    setShowImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  let modelSrc;

  // Determine which Sketchfab model to load based on `showImage`
  if (showImage === "3.jpg") {
    modelSrc =
      "https://sketchfab.com/models/92d3fe7b76214170a59875a5d656d595/embed";
  } else if (showImage === "2.png") {
    modelSrc =
      "https://sketchfab.com/models/9416688f88c24d03a0a45672c87a059a/embed";
  } else if (showImage === "1.jpeg") {
    modelSrc =
      "https://sketchfab.com/models/2a889760fd29453dbe470e2d167250af/embed";
  } else {
    // Default or fallback model URL if none match
    modelSrc = "";
  }

  return (
    <>
      <div
        id="ana"
        data-scroll-to="ana"
        className="mt-20 flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Anatomical
            <span className="text-[#005D9A]"> 3d Models</span>
          </h1>
          <div className="mt-8 hidden">
            <img
              alt="3D model of an anatomical structure"
              className="mx-auto"
              height="300"
              src={showImage}
              width="400"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[70%] mx-auto justify-between space-y-8 md:space-y-0 md:space-x-8 mt-10">
        <div className="text-center border-dotted border-2 border-gray-300 p-4">
          <img
            src="/1.jpeg"
            alt="3D model of a full ear"
            className="mx-auto mb-2 w-68 h-60 cursor-pointer"
            onClick={() => handleClick("1.jpeg")}
          />
          <p>Full ear 3d</p>
        </div>
        <div className="text-center border-dotted border-2 border-gray-300 p-4">
          <img
            src="/2.png"
            alt="3D model of an internal ear"
            className="mx-auto mb-2 w-68 h-60 cursor-pointer"
            onClick={() => handleClick("2.png")}
          />
          <p>Internal ear</p>
        </div>
        <div className="text-center border-dotted border-2 border-gray-300 p-4">
          <img
            src="/3.jpg"
            alt="3D model of semi-circular canals"
            className="mx-auto mb-2 w-[300px] h-60 cursor-pointer"
            onClick={() => handleClick("3.jpg")}
          />
          <p>Semi-circular canals</p>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg relative w-[90%] h-[90%] max-w-7xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <iframe
              title="3D Model"
              src={modelSrc}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default AnatomicalModel;
