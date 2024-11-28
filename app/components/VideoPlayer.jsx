import React, { useRef, useState } from "react";
import YouTube from "react-youtube";
import useOutsideClick from "./useOutSideClick";
import Loading from "./Loading";

const VideoPlayer = ({ videoId, onClose }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useOutsideClick(videoRef, onClose);

  const handleVideoReady = () => {
    setLoading(false); // Stop showing the loader once video is ready
  };

  // Define options with default values
  const opts = {
    height: "500px", // Default height for mobile
    width: "100%", // Default width for mobile
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
      <div ref={videoRef} className="relative  p-4 rounded w-full max-w-3xl">
        {loading && (
          <div className="z-50 flex items-center justify-center h-full">
            <Loading />
          </div>
        )}
        <div className={`relative pb-[56.25%] ${loading ? "hidden" : ""}`}>
          <YouTube
            className="absolute top-0 left-0 w-full h-full"
            videoId={videoId}
            opts={opts}
            onReady={handleVideoReady}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
