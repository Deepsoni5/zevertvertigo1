import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import { motion } from "framer-motion";
const ChatBot = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        id="accessQuickInformation"
        data-scroll-to="accessQuickInformation"
        className="mt-28 flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 w-[70%] mx-auto">
            Access quick information on your fingertip on our chatbot platform
          </h1>
          <div className="p-10 inline-block mb-6">
            <img
              alt="Illustration of a chatbot next to a smartphone with chat messages"
              className="w-72 h-72"
              height="400"
              src="/group_wp.png"
              width="400"
            />
          </div>
          <button className="bg-green-500 text-white font-bold py-5 px-5 rounded-full flex items-center justify-center mx-auto">
            <i className="fab fa-whatsapp mr-2"></i>
            Whatsapp chatbot
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBot;
