import { wpshare } from "@/utils";
import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const ShareButtons = ({ type, videoId }) => {
  const link =
    type === "safety"
      ? "https://drive.google.com/file/d/1mvotEQ4ZBAYsNNP9YzFMEJUcJPV3XDiQ/view"
      : "https://drive.google.com/file/d/1bibUHMEuKLbMRWxRpChYWOctxOUtlcvq/view";

  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const handleVideoClose = () => {
    setIsVideoVisible(false);
  };
  const handleWatchMovie = (videoId) => {
    setIsVideoVisible(true);
    setSelectedVideoId(videoId);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-10">
      {selectedVideoId && isVideoVisible && (
        <VideoPlayer videoId={selectedVideoId} onClose={handleVideoClose} />
      )}
      <button
        onClick={() => handleWatchMovie(videoId)}
        className="flex items-center bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-transform duration-300 hover:bg-red-700 hover:scale-105"
      >
        <i className="fas fa-play-circle mr-2"></i>
        Watch video
      </button>
      <a href={link} target="_blank">
        <button className="flex items-center bg-green-500 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:bg-green-600 hover:scale-105">
          <i className="fab fa-whatsapp mr-2"></i>
          Share PDF
        </button>
      </a>
      <button
        onClick={() => wpshare(link)}
        className="flex items-center bg-green-500 text-white font-semibold py-2 px-5 rounded-full transition-transform duration-300 hover:bg-green-600 hover:scale-105"
      >
        <i className="fab fa-whatsapp mr-2"></i>
        Share Video
      </button>
    </div>
  );
};

export default ShareButtons;
