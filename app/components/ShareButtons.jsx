import React from "react";

const ShareButtons = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-10">
      <button className="flex items-center bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-transform duration-300 hover:bg-red-700 hover:scale-105">
        <i className="fas fa-play-circle mr-2"></i>
        Watch video
      </button>
      <button className="flex items-center bg-green-500 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 hover:bg-green-600 hover:scale-105">
        <i className="fab fa-whatsapp mr-2"></i>
        Share PDF
      </button>
      <button className="flex items-center bg-green-500 text-white font-semibold py-2 px-5 rounded-full transition-transform duration-300 hover:bg-green-600 hover:scale-105">
        <i className="fab fa-whatsapp mr-2"></i>
        Share Video
      </button>
    </div>
  );
};

export default ShareButtons;
