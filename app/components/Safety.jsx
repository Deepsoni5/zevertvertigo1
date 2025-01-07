import React from "react";
import SafetyContainer from "./SafetyContainer";
import ShareButtons from "./ShareButtons";

const Safety = () => {
  return (
    <div
      id="safetyInstructionsFor"
      data-scroll-to="safetyInstructionsFor"
      className="flex flex-col w-[80%] mx-auto justify-center"
    >
      <div className="mt-28 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-indigo-900">
            Safety Instructions for Vertigo Exercises <sup>1-9,33,34,40</sup>
          </h1>
          <p className="text-gray-600 mt-4 w-[100%] sm:w-[80%] mx-auto text-xl mb-10 text-justify md:text-center">
            Living with vertigo can be challenging, especially when it comes to
            engaging in physical exercises. To help you navigate exercise safely
            and effectively, here are some Dos and Don’ts tailored for you:
          </p>
        </div>
      </div>

      <SafetyContainer
        imgSrc="i1.png"
        text="Before starting any exercise regimen, consult a doctor or physical therapist familiar with your condition. They will provide tailored advice bases on your physical condition."
      />
      <SafetyContainer
        imgSrc="i2.png"
        text="Perform exercises slowly and gradually to avoid sudden shifts in the position and exacerbation of vertigo symptoms."
      />
      <SafetyContainer
        imgSrc="i3.png"
        text="During exercises requiring balance, use support like a chair, countertop or handrails to prevent falls if you feel dizzy."
      />
      <SafetyContainer
        imgSrc="i4.png"
        text="Dehydration can worsen vertigo symptoms. Ensure you drink enough water before and after exercising."
      />
      <SafetyContainer
        imgSrc="i5.png"
        text="If you start feeling dizzy and lightheaded, stop exercising immediately and rest."
      />
      <SafetyContainer
        imgSrc="i6.png"
        text="Exercising regularly will enhance your chances of relieving vertigo symptoms without risking any injury."
      />

      <ShareButtons />
    </div>
  );
};

export default Safety;
