import React, { useState } from "react";
import ShareButtons from "./ShareButtons";
import { motion } from "framer-motion";
const DosAndDonts = () => {
  const [activeTab, setActiveTab] = useState("dos");
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        id="dosDontsContent"
        data-scroll-to="dosDontsContent"
        className="mt-28 flex flex-col items-center p-8 w-[80%] mx-auto"
      >
        <div className="flex space-x-4 mb-8">
          <button
            className={`py-2 px-8 rounded-full text-lg ${
              activeTab === "dos"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-blue-500"
            }`}
            onClick={() => setActiveTab("dos")}
            style={{ width: "150px", height: "50px", borderRadius: "25px" }}
          >
            Dos
          </button>
          <button
            className={`py-2 px-8 rounded-full text-lg ${
              activeTab === "donts"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-blue-500"
            }`}
            onClick={() => setActiveTab("donts")}
            style={{ width: "150px", height: "50px", borderRadius: "25px" }}
          >
            Donts
          </button>
          <sup className="font-bold text-lg hidden md:flex text-[12px]">
            1-9,36-40
          </sup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {activeTab === "dos" && (
            <>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-full hover:bg-gray-200">
                <img
                  src="/d1.png"
                  alt="Prescription and pills"
                  className="w-16 h-16"
                />
                <p className="break-words text-sm md:text-xl">
                  Medicines to be taken properly as per prescription.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-full hover:bg-gray-200">
                <img
                  src="/d2.png"
                  alt="Person meditating"
                  className="w-16 h-16"
                />
                <p className="break-words text-sm md:text-xl">
                  Over the counter medicines to be used with caution e.g.
                  aspirin, antacids, anti-inflammatory and caffeine containing
                  drugs.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-full hover:bg-gray-200">
                <img
                  src="/d3.png"
                  alt="Person meditating"
                  className="w-16 h-16"
                />
                <p className="break-words text-sm md:text-xl">
                  Perform yoga and meditation to reduce stress.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-full hover:bg-gray-200">
                <img
                  src="/d4.png"
                  alt="Person meditating"
                  className="w-16 h-16"
                />
                <p className="break-words text-sm md:text-xl">
                  Contact doctor if symptoms like hearing loss and one-sided
                  facial numbness/tingling are faced along with a headache.
                </p>
              </div>
              <div className="flex justify-center pt-4 md:col-span-2">
                <ShareButtons type="dos" videoId="Hi_QSD-6_GY" />
              </div>
            </>
          )}
          {activeTab === "donts" && (
            <>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-full hover:bg-gray-200">
                <img
                  src="/dn1.png"
                  alt="Glass of water and pills"
                  className="w-16 h-16"
                />
                <p className="break-words text-sm md:text-xl">
                  Dont ignore the symtomps.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-full hover:bg-gray-200">
                <img
                  src="/dn2.png"
                  alt="Doctor and phone"
                  className="w-16 h-16"
                />
                <p className="break-words text-sm md:text-xl">
                  Smoking and alcohol should be restricted.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-full hover:bg-gray-200">
                <img
                  src="/dn3.png"
                  alt="Doctor and phone"
                  className="w-16 h-16"
                />
                <p className="break-words text-sm md:text-xl">
                  Avoid keeping the head in the same position for more than half
                  an hour. Change the position of your shoulders and head at
                  intervals.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 w-full hover:bg-gray-200">
                <img
                  src="/dn4.png"
                  alt="Doctor and phone"
                  className="w-16 h-16"
                />
                <p className="break-words text-sm md:text-xl">
                  Avoid dark environments and standing alone.
                </p>
              </div>
              <div className="flex justify-center pt-4 md:col-span-2">
                <ShareButtons type="donts" videoId="Hi_QSD-6_GY" />
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DosAndDonts;
