import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import VideoPlayer from "./VideoPlayer";
import WhatsappButtonVideo from "./WhatsappButtonVideo";

const TypesVertigoContainer = ({
  reverse,
  imgSrc,
  headingText,
  headingBlue,
  videoId,
  para,
}) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const handleVideoClose = () => {
    setIsVideoVisible(false);
  };
  const handleWatchMovie = (videoId) => {
    console.log("videoId", videoId);
    setIsVideoVisible(true);
    setSelectedVideoId(videoId);
  };

  return (
    <div className="flex items-center justify-center mt-20 bg-white p-4">
      {selectedVideoId && isVideoVisible && (
        <VideoPlayer videoId={selectedVideoId} onClose={handleVideoClose} />
      )}
      <div
        className={`bg-white rounded-lg  p-6 flex flex-col ${
          reverse === "true" ? "md:flex-row-reverse" : "md:flex-row"
        }
 md:flex-row items-center space-y-6 md:space-y-0 ${
   reverse == "true" ? "md:gap-14" : "md:space-x-24"
 } w-[80%] mx-auto`}
      >
        <div
          className="relative w-full md:w-5/12"
          onClick={() => handleWatchMovie(videoId)}
        >
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <i className="fas fa-play-circle text-white text-4xl"></i>
          </div>
          <img
            src={imgSrc}
            alt="An ear with sound waves"
            className="rounded-full border-4  w-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold  text-blue-900">
            {headingText} <span className="text-[#005D9A]">{headingBlue}</span>
          </h1>
          <p className="text-gray-700 text-xl text-justify mt-4">{para}</p>
          <WhatsappButtonVideo />
        </div>
      </div>
    </div>
  );
};

export default TypesVertigoContainer;
