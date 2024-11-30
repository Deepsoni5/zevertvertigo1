import React from "react";

const Vestibular = () => {
  return (
    <div
      className=""
      style={{
        background:
          "linear-gradient(127.09deg, #005D9A 10.16%, #000305 47.54%, #004F83 92.87%)",
      }}
    >
      <div className="text-center w-[90%] sm:w-[80%] mx-auto p-10 text-black mt-28">
        <h1 className="text-4xl font-bold mb-5 text-white">
          Vestibular Rehabilitation Exercise
        </h1>
        <p className="text-lg text-white  mb-8 md:text-center w-full mx-auto text-justify">
          Exercise is a fantastic way to help you manage vertigo and start
          feeling better. We have curated these simple and effective practices
          to help you ease your symptoms. Let’s say goodbye to that discomfort
          altogether! Follow these safety tips along with dos and donts before
          performing these movements. Were here to support you and embark on
          this journey towards relief.
        </p>
        <div className="flex justify-center gap-5 flex-col sm:flex-row">
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded">
            Exercises
          </button>
          <button className="bg-green-500 text-white font-bold py-2 px-4 text-center rounded flex items-center justify-center gap-2">
            <i className="fab fa-whatsapp"></i> Share PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vestibular;
