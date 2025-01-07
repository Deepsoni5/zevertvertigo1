import React from "react";

const AnatomyEar = () => {
  return (
    <div
      id="group"
      data-scroll-to="group"
      className="w-[80%] mx-auto flex flex-col lg:flex-row mt-24"
    >
      <div className="mt-16 md:mt-0 lg:w-1/2 lg:pr-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Anatomy of the{" "}
          <span className="text-[#005D9A]">
            inner ear<sup>18-23</sup>
          </span>
        </h1>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/ear.jpeg"
            alt="Detailed diagram of the inner ear with labels for various parts such as the auricle, temporal muscle, hammer, anvil, stirrup, semicircular channels, nerve of the vestibule, facial nerve, nerve of the cochlea, snail, and more."
            className="w-full block md:hidden my-8  h-auto object-contain"
          />
        </div>
        <p className="text-gray-700 mb-4 text-xl text-justify">
          The inner ear houses the parts responsible for hearing and balance. It
          is split into the cochlea for hearing and the semi-circular canals for
          balance. The cochlea shaped like a snail has fluid-filled chambers.
          Sound vibrations make these fluids move, causing tiny hairs on a
          membrane to vibrate and send signals to the brain. The semicircular
          canals, also called the labyrinthine, detect head movement as they are
          placed at right angles to each other. These canals contain fluid and
          tiny crystals that help the brain determine head direction.
        </p>
        <p className="text-gray-700 mb-4 text-xl text-justify">
          The auditory nerve connects the inner ear to the brain, transmitting
          both hearing and balance information. In the hearing process, sound
          waves are captured by the outer ear, travel through the ear canal, and
          make the eardrum vibrate. This vibration moves the middle ear bones,
          creating a fluid wave in the inner ear. This wave stimulates hair
          cells in the cochlea, sending electrical signals via the auditory
          nerve to the brain.
        </p>
        <p className="text-gray-700 mb-4 text-xl text-justify">
          For balance, the brain receives constant electrical signals. When the
          head moves, fluid shifts in the semicircular canals, altering the
          brains electrical messages. The brain uses this data to adjust the
          body for balance.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/ear.jpeg"
          alt="Detailed diagram of the inner ear with labels for various parts such as the auricle, temporal muscle, hammer, anvil, stirrup, semicircular channels, nerve of the vestibule, facial nerve, nerve of the cochlea, snail, and more."
          className="w-full hidden md:block h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AnatomyEar;
