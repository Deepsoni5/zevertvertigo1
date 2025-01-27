"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const links = [
  "https://www.pennmedicine.org/for-patients-and-visitors/patient-information/conditions-treated-a-to-z/vertigo",
  "https://www.webmd.com/brain/vertigo-symptoms-causes-treatment",
  "https://my.clevelandclinic.org/health/symptoms/21769-vertigo",
  "https://www.nhsinform.scot/illnesses-and-conditions/ears-nose-and-throat/vertigo/",
  "https://medlineplus.gov/ency/article/001432.htm",
  "https://www.healthline.com/health/vertigo",
  "https://www.mayoclinic.org/diseases-conditions/vertigo/symptoms-causes/syc-20370055",
  "https://www.ncbi.nlm.nih.gov/books/NBK482356/",
  "https://www.nhs.uk/conditions/vertigo/",
  "https://my.clevelandclinic.org/health/diseases/22032-labyrinthitis",
  "https://my.clevelandclinic.org/health/diseases/11858-benign-paroxysmal-positional-vertigo-bppv",
  "https://www.mayoclinic.org/diseases-conditions/menieres-disease/symptoms-causes/syc-20374910",
  "https://my.clevelandclinic.org/health/diseases/15167-menieres-disease",
  "https://www.nidcd.nih.gov/health/menieres-disease",
  "https://pubmed.ncbi.nlm.nih.gov/24057827/",
  "https://www.vestibularhealth.ca/blog/post-traumatic-bppv",
  "https://emedicine.medscape.com/article/884361-overview",
  "https://www.msdmanuals.com/professional/multimedia/3dmodel/ear-coronal-cross-section",
  "https://www.msdmanuals.com/professional/multimedia/3dmodel/middle-ear-and-inner-ear",
  "https://my.clevelandclinic.org/health/body/24340-inner-ear",
  "https://med.uth.edu/orl/online-ear-disease-photo-book/chapter-3-ear-anatomy/ear-anatomy-inner-ear/",
  "https://www.stanfordchildrens.org/en/topic/default?id=anatomy-and-physiology-of-the-ear-90-P02025",
  "https://www.healthline.com/health/inner-ear",
  "https://thevertigotherapist.com/vertigoexercises/",
  "https://www.iron-neck.com/blogs/news/the-best-head-neck-exercises-for-cervical-vertigo",
  "https://www.sitandbefit.org/exercises-for-dizziness-and-vertigo/",
  "https://www.mkuh.nhs.uk/patient-information-leaflet/exercises-for-vertigo-sufferers",
  "https://rosannaphysio.com.au/what-are-the-best-exercises-for-vertigo-and-dizziness/",
  "https://umc.edu/Healthcare/ENT/Patient-Handouts/Adult/Otology/Vestibular_Exercises.html",
  "https://www.truemeds.in/blog/vertigo-treatment-with-simple-exercises",
  "https://www.godigit.com/health-insurance/exercise/exercise-for-vertigo",
  "https://www.injoylife.ca/phase-2-vestibular-exercises",
  "https://www.healthline.com/health/exercises-for-vertigo",
  "https://www.benchmarkpt.com/blog/exercises-for-vertigo-and-dizziness/",
  "https://www.webmd.com/brain/home-remedies-vertigo",
  "https://www.nhs.uk/conditions/vertigo/",
  "https://cornerstonept.co/corconnect/news/treat-your-vertigo-what-you-can-do-and-what-to-avoid-1555889447892.html",
  "https://www.uppercervicalseneca.com/exercise-dos-donts-to-prevent-vertigo/",
  "https://www.webmd.com/brain/remedies-vertigo",
  "https://www.mountsinai.org/health-library/selfcare-instructions/dizziness-and-vertigo-aftercare",
  "https://www.neuroequilibrium.in/heres-a-diet-to-help-you-with-your-vertigo/",
  "https://alignwc.com/good-bad-food-for-vertigo-diet-help-vertigo/",
  "https://www.amplifon.com/uk/audiology-magazine/diet-for-vertigo",
  "https://www.netmeds.com/health-library/post/diet-for-vertigo-patients-foods-you-should-eat-and-avoid-to-control-dizziness",
  "https://www.healthians.com/blog/vertigo-diet-foods-to-avoid-and-include-for-effective-vertigo-management/",
  "https://www.integrityphysio.com.au/blog/the-best-diet-for-vertigo/",
  "https://drnilotpalvertigo.in/role-of-diet-in-managing-vertigo/",
  "https://southernent.com/blog/myths-and-facts-about-vertigo/",
  "https://neurologist-ahmedabad.com/2023/08/04/vertigo-myths-facts/",
  "https://www.neuroequilibrium.in/top-10-myths-surrounding-vertigo-that-you-should-know/",
  "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/5-common-misconceptions-about-vertigo-dizziness",
  "https://drnilotpalvertigo.in/vertigo-myths-debunked/",
  "https://www.merckmanuals.com/home/news/editorial/2021/04/07/17/28/podcast-vertigo-myths-with-dr-david-kaylie",
  "https://bessoclinic.com/vertigo-fall-prevention-mistakes-you-should-avoid/",
  "https://balanceanddizziness.org/help-yourself/fall-prevention/",
  "https://besthealthphysio.ca/vertigo-balance-fall-prevention/",
  "https://www.mayoclinic.org/healthy-lifestyle/healthy-aging/in-depth/fall-prevention/art-20047358",
  "https://www.nyp.org/healthlibrary/articles/vertigo-staying-safe-when-you-have-balance-problems",
  "https://vestibular.org/article/coping-support/living-with-a-vestibular-disorder/age-related-dizziness-and-imbalance/fall-prevention/",
  "https://www.breatheclearinstitute.com/blog/symptoms/tips-caring-someone-vertigo/",
  "https://drnilotpalvertigo.in/support-loved-one-with-vertigo/",
  "https://ladnervillagephysio.com/blog/top-ten-tips-for-traveling-with-vertigo-and-dizziness",
  "https://www.medical-air-service.com/blog/flying-with-vertigo-tips-and-tricks-for-a-safe-flight_9195.html",
  "https://drnilotpalvertigo.in/prevent-vertigo-while-travelling/",
  "https://athensmedicalgroup.com/vertigo-dizziness-in-the-means-of-transport-2/",
  "https://thevertigoco.com.au/blog/tips-for-travelling-with-dizziness/",
];

function Reference() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-10 -mt-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            References
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                className="flex  p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition duration-200"
              >
                <span className="text-md font-medium mr-2">{index + 1})</span>
                <span
                  className="text-md font-medium break-words"
                  style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
                >
                  {link}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reference;
