import React from "react";

const TypesVertigo = () => {
  return (
    <div
      data-scroll-to="tv"
      id="tv"
      className="flex items-center justify-center mt-10"
    >
      <div className="text-center p-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
          Types of <span className="text-[#005D9A]">Vertigo</span>
        </h1>
        <p className="mt-4 text-gray-700 text-xl w-[80%] mx-auto text-justify md:text-center">
          Vertigo, often not a condition by itself but a symptom, creates a
          sensation of movement or spinning around you. This feeling can be mild
          or intense, disrupting daily tasks due to balance problems. It
          commonly arises from inner ear issues affecting the bodys sense of
          balance and equilibrium. The symptoms vary based on vertigos cause and
          type.
        </p>
      </div>
    </div>
  );
};

export default TypesVertigo;
