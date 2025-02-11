import { wpshare } from "@/utils";
import React from "react";

const WhatsappButtonVideo = ({ link }) => {
  return (
    <button
      onClick={() => wpshare(link)}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2 transition-transform duration-300 hover:bg-green-600 hover:scale-105"
    >
      <i className="fab fa-whatsapp"></i>
      <span>Share Video</span>
    </button>
  );
};

export default WhatsappButtonVideo;
