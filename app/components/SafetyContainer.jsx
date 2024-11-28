import React from "react";

const SafetyContainer = ({ imgSrc, text }) => {
  return (
    <div className="mt-8 flex items-center p-4 gap-2  rounded-lg shadow-md">
      <div className="flex-shrink-0">
        <div className="w-20 h-20  flex items-center justify-center">
          <img src={imgSrc} alt="" />
        </div>
      </div>
      <div className="ml-4 text-gray-700 text-xl">{text}</div>
    </div>
  );
};

export default SafetyContainer;
