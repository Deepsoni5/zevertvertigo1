import React from "react";

const WhatsAppButton = () => {
  return (
    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2">
      <i className="fab fa-whatsapp"></i>
      <span>Share PDF</span>
    </button>
  );
};

export default WhatsAppButton;
