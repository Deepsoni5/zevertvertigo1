import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import WhatsappButtonVideo from "./WhatsappButtonVideo";
import VideoPlayer from "./VideoPlayer";

const TwoGrid = ({ translations, language }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const handleVideoClose = () => {
    setIsVideoVisible(false);
  };
  const handleWatchMovie = (videoId) => {
    setIsVideoVisible(true);
    setSelectedVideoId(videoId);
  };

  const imageUrlHead =
    "https://www.youtube.com/playlist?list=PL76dONsDiTy4T7aF7NeHxqLkKDFE3eicb";
  return (
    <div className="w-[80%] py-10 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {translations[language].data[40].Name}
          <sup className="text-[17px]">25-27,31,32</sup>
        </h1>
        {selectedVideoId && isVideoVisible && (
          <VideoPlayer videoId={selectedVideoId} onClose={handleVideoClose} />
        )}
        <p className="text-gray-600 mb-6 text-xl w-full md:w-[70%] mx-auto">
          {translations[language].data[119].Name}
        </p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4">
          <div
            className="md:w-1/3 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleWatchMovie("IH3osa3A9bI")}
          >
            <div className="relative">
              <img
                src="/head1.png"
                alt="Person demonstrating head forward and backward exercise"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-2 shadow-md">
                  <i className="fas fa-play text-red-500 text-2xl"></i>
                </button>
              </div>
            </div>
            <p className="mt-2 text-gray-800 font-semibold text-xl">
              {translations[language].data[79].Name.split(".")[1].slice(0, -1)}
            </p>
          </div>
          <div
            className="md:w-1/3 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleWatchMovie("rhw6iaWz7Z8")}
          >
            <div className="relative">
              <img
                src="/head2.png"
                alt="Person demonstrating head turn left and right exercise"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-2 shadow-md">
                  <i className="fas fa-play text-red-500 text-2xl"></i>
                </button>
              </div>
            </div>
            <p className="mt-2 text-gray-800 font-semibold text-xl">
              {translations[language].data[79].Name.split(".")[2]}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <WhatsappButtonVideo link={imageUrlHead} />
      </div>
    </div>
  );
};

export default TwoGrid;
