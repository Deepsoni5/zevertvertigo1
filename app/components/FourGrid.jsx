import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import WhatsappButtonVideo from "./WhatsappButtonVideo";
import VideoPlayer from "./VideoPlayer";

const FourGrid = ({ translations, language }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const handleVideoClose = () => {
    setIsVideoVisible(false);
  };
  const handleWatchMovie = (videoId) => {
    setIsVideoVisible(true);
    setSelectedVideoId(videoId);
  };

  const imageUrlMove =
    "https://www.youtube.com/playlist?list=PL76dONsDiTy6qSWFPc9slteDjrW17wkpW";
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-black">
        {translations[language].data[43].Name} <sup>26,27,30,32</sup>
      </h1>
      {selectedVideoId && isVideoVisible && (
        <VideoPlayer videoId={selectedVideoId} onClose={handleVideoClose} />
      )}
      <p className="text-center text-gray-600 mt-2 text-xl">
        {translations[language].data[125].Name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div
          className="relative cursor-pointer"
          onClick={() => handleWatchMovie("PhMyGxvfHFI")}
        >
          <img
            src="/move1.png"
            alt="Person throwing and catching a ball while walking"
            className="w-[80%] mx-auto md:w-[91%] h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <p className="text-center mt-2 text-xl font-bold w-[80%] md:w-full mx-auto">
            {translations[language].data[90].Name.split(".")[1].slice(0, -1)}
          </p>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => handleWatchMovie("TN2E9OtoVRE")}
        >
          <img
            src="/move2.png"
            alt="Person aiming with the ball and bending/stretching while playing with it"
            className="w-[80%] mx-auto md:w-[91%] h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <p className="text-center mt-2 text-xl font-bold  w-[80%] md:w-full mx-auto">
            {translations[language].data[90].Name.split(".")[3].slice(0, -1)}
          </p>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => handleWatchMovie("UbhguHUni_0")}
        >
          <img
            src="/move3.png"
            alt="Person walking around in the room with eyes open and closed"
            className="w-[80%] mx-auto md:w-[91%] h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <p className="text-center mt-2 text-xl font-bold w-[80%] md:w-[85%] mx-auto">
            {translations[language].data[90].Name.split(".")[2].slice(0, -1)}
          </p>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => handleWatchMovie("kccwKZ3ytQQ")}
        >
          <img
            src="/move4.png"
            alt="Person walking up and down the stairs"
            className="w-[80%] mx-auto md:w-[91%] h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <p className="text-center mt-2 text-xl font-bold">
            {translations[language].data[90].Name.split(".")[4].slice(0)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <WhatsappButtonVideo link={imageUrlMove} />
      </div>
    </div>
  );
};

export default FourGrid;
