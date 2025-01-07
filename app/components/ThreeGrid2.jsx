import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import WhatsappButtonVideo from "./WhatsappButtonVideo";
import VideoPlayer from "./VideoPlayer";

const ThreeGrid2 = ({ translations, language }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const handleVideoClose = () => {
    setIsVideoVisible(false);
  };
  const handleWatchMovie = (videoId) => {
    setIsVideoVisible(true);
    setSelectedVideoId(videoId);
  };

  const imageUrlStand =
    "https://www.youtube.com/playlist?list=PL76dONsDiTy6xaDs9m91xgNnfanN1_l49";
  return (
    <div className="text-center py-10 w-[80%] mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">
        {translations[language].data[42].Name} <sup>27,29,32</sup>
      </h1>
      {selectedVideoId && isVideoVisible && (
        <VideoPlayer videoId={selectedVideoId} onClose={handleVideoClose} />
      )}
      <p className="text-gray-600 mt-4 mb-8 text-xl">
        {translations[language].data[124].Name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="text-center cursor-pointer flex flex-col items-center"
          onClick={() => handleWatchMovie("hVNxQEdxW5U")}
        >
          <div className="relative w-full">
            <img
              src="/stand1.png"
              alt="Person looking up and down"
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-white text-4xl"></i>
            </div>
          </div>
          <p className="mt-4 text-gray-800 text-xl font-bold">
            {translations[language].data[86].Name.split(".")[1].slice(0, -1)}
          </p>
        </div>
        <div
          className="text-center cursor-pointer flex flex-col items-center"
          onClick={() => handleWatchMovie("RI3wWZFCHCE")}
        >
          <div className="relative w-full">
            <img
              src="/stand2.png"
              alt="Person looking left and right"
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-white text-4xl"></i>
            </div>
          </div>
          <p className="mt-4 text-gray-800 text-xl font-bold">
            {translations[language].data[86].Name.split(".")[2].slice(0, -1)}
          </p>
        </div>
        <div
          className="text-center cursor-pointer flex flex-col items-center"
          onClick={() => handleWatchMovie("JXRtNPUmVng")}
        >
          <div className="relative w-full">
            <img
              src="/stand3.png"
              alt="Person doing convergence exercise"
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-white text-4xl"></i>
            </div>
          </div>
          <p className="mt-4 text-gray-800 text-xl font-bold">
            {translations[language].data[86].Name.split(".")[3].slice(0)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <WhatsappButtonVideo link={imageUrlStand} />
      </div>
    </div>
  );
};

export default ThreeGrid2;
