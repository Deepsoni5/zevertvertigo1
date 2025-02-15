import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Vestibular = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
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
            <Link href="/exercise">
              <button className="bg-red-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:bg-red-700 hover:scale-105">
                Exercises
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Vestibular;
