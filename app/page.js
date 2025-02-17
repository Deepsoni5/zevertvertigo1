"use client";
import Image from "next/image";
import LandingPage from "./components/LandingPage";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroContainer from "./components/HeroContainer";
import CauseContainer from "./components/CauseContainer";
import TypesVertigo from "./components/TypesVertigo";
import TypesVertigoContainer from "./components/TypesVertigoContainer";
import AnatomicalModel from "./components/AnatomicalModel";
import AnatomyEar from "./components/AnatomyEar";
import Vestibular from "./components/Vestibular";
import Safety from "./components/Safety";
import DosAndDonts from "./components/DosAndDonts";
import HowToLive from "./components/HowToLive";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [targetSection, setTargetSection] = useState(null);

  const handleLinkClick = (sectionId) => {
    setShowLanding(false);
    setTargetSection(sectionId);
  };

  useEffect(() => {
    if (!showLanding && targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        setTimeout(() => {
          const yPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: yPosition - 130, behavior: "smooth" });
        }, 100); // Adjust delay if needed
      }
    }
  }, [showLanding, targetSection]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      // Set landing state to false to show the main page
      setShowLanding(false);

      // Wait for the DOM to render
      const timer = setTimeout(() => {
        const anchor = document.querySelector(`[data-scroll-to='${scrollTo}']`);
        // Debug: Ensure the element is found

        if (anchor) {
          // Smoothly scroll to the element
          const yPosition =
            anchor.getBoundingClientRect().top + window.pageYOffset;

          // Smoothly scroll to the position minus 120
          window.scrollTo({ top: yPosition - 160, behavior: "smooth" });

          // Clean up the URL
          const newUrl = window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
        }
      }, 200); // Delay to allow DOM rendering

      // Cleanup the timeout
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      {showLanding ? (
        <LandingPage
          onLinkClick={handleLinkClick}
          setShowLanding={setShowLanding}
        />
      ) : (
        <>
          <Header setShowLanding={setShowLanding} />
          <HeroContainer />
          <CauseContainer />
          <TypesVertigo />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TypesVertigoContainer
              videoId="JGvVcyJigbg"
              reverse="false"
              imgSrc="/laby.png"
              headingText="Labyrinthitis"
              headingBlue=""
              para="Labyrinthitis is an ear infection that causes swelling in the inner ear, disturbing both hearing and balance. It can affectanyone but is more seen in adults aged 30-60, particularly in individuals assigned female at birth. If not treated promptly, itcan lead to hearing difficulties, a higher chance of falling, and lasting harm to the inner ear. The symptoms includedizziness, nausea, hearing loss along with a feeling of movement even when you are still. It can disrupt daily activities."
              sup="1-10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TypesVertigoContainer
              videoId="IcLtdUrQkIg"
              reverse="true"
              imgSrc="/benign.png"
              headingText="Benign paroxysmal positional"
              headingBlue="vertigo (BPPV)"
              para="Benign paroxysmal positional vertigo (BPPV) – is a common ear problem causing sudden spinning sensations with head movements like sitting up or tilting back. Although not typically serious, especially risky for those over 65, it might lead to falls. BPPV often resolves within days or weeks by itself. It occurs when tiny calcium
particles shift and become trapped in the balance-controlling ear canals, usually originating from a part called
the utricle. As these loose particles interact with hair-like structures in the canals during head movement,
they end misleading balance signals to the brain leading to vertigo"
              sup="1-9,11"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TypesVertigoContainer
              reverse="false"
              videoId="QJDS7SmfZh0"
              imgSrc="menire.png"
              headingText="Meniere’s"
              headingBlue="disease"
              para="Menieres disease is a rare inner ear disorder affecting balance and hearing. People with this condition often
feel like they might need to sit down to avoid falling. It causes issues with hearing such as ringing in the ears (tinnitus) and temporary difficulty hearing, which might eventually lead to hearing loss. It usually happens to
individuals between 40 and 60 years old. Some individuals might have family members with this same condition."
              sup="1-9,12-14"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TypesVertigoContainer
              videoId="n-ROxSrEXrU"
              reverse="true"
              imgSrc="post.png"
              headingText="Post traumatic"
              headingBlue="vertigo"
              para="Post traumatic vertigo - After accidents or injuries to the head, neck, or certain parts of the body, many
people might feel vertigo, which makes them think the room is spinning. This often happens after a mild
traumatic brain injury caused by falls, car accidents, or sports injuries. Almost half of people who get a
concussion report feeling dizzy, lightheaded, or have problems with balance in the first days after injury.
Although for most people these feelings go away in a few days or weeks, some might experience postconcussion vertigo for many years. "
              sup="1-9,15-17"
            />
          </motion.div>
          <AnatomicalModel />
          <AnatomyEar />
          <Vestibular />
          <Safety />
          <DosAndDonts />
          <HowToLive />
          <ChatBot />
          <Footer setShowLanding={setShowLanding} />
        </>
      )}
    </div>
  );
}
