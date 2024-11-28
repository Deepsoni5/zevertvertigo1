"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import translations from "../components/data.json";
import ThreeGrid from "../components/ThreeGrid";
import TwoGrid from "../components/TwoGrid";
import ThreeGrid1 from "../components/ThreeGrid1";
import ThreeGrid2 from "../components/ThreeGrid2";
import FourGrid from "../components/FourGrid";
import TwoGrid1 from "../components/TwoGrid1";
import Footer from "../components/Footer";
import ThreeGrid3 from "../components/ThreeGrid3";

const Exercise = () => {
  const exerciseFilters = [
    "Eye exercises",
    "Head & neck",
    "Sitting exercise",
    "Standing exercise",
    "Moving exercise",
    "Exercise in sleeping position",
  ];

  const [language, setLanguage] = useState("English");
  const [selectedFilter, setSelectedFilter] = useState("Eye exercises");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <Header />
      <img
        src="/mainex.png"
        alt="Exercise"
        className="-mt-[101px] md:-mt-20 z-20"
      />

      {/** for buttons */}

      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Exercises for <span className="text-[#005D9A]">Vertigo Patients</span>
        </h1>
        <div className="mb-8">
          <p className="text-xl font-bold mb-8 text-gray-700 mb-4">
            Language Filter :-
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(translations).map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                  language === lang
                    ? "bg-[#005D9A] text-white shadow-lg transform scale-105"
                    : "border border-gray-300 text-gray-700 hover:bg-blue-100 hover:text-[#005D9A]"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="text-xl mb-8 font-bold  text-gray-700">
            Exercises Filter :-
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {exerciseFilters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                  selectedFilter === filter
                    ? "bg-[#005D9A] text-white shadow-lg transform scale-105"
                    : "border border-gray-300 text-gray-700 hover:bg-blue-100 hover:text-[#005D9A]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        {selectedFilter == "Eye exercises" && (
          <ThreeGrid translations={translations} language={language} />
        )}
        {selectedFilter == "Head & neck" && (
          <TwoGrid translations={translations} language={language} />
        )}
        {selectedFilter == "Sitting exercise" && (
          <ThreeGrid1 translations={translations} language={language} />
        )}
        {selectedFilter == "Standing exercise" && (
          <ThreeGrid2 translations={translations} language={language} />
        )}
        {selectedFilter == "Moving exercise" && (
          <FourGrid translations={translations} language={language} />
        )}
        {selectedFilter == "Exercise in sleeping position" && (
          <TwoGrid1 translations={translations} language={language} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Exercise;
