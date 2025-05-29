import React from "react";
import { motion } from "framer-motion";
import HeroButtons from "./HeroButton";
import bgImage from "../assets/bg.jpg"; // Adjust the path as necessary

export default function Hero() {
  return (
    <>
      {/* Hero Section with Parallax & Animation */}
      <section
        id="home"
        className="relative h-[100vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <motion.div
          className="relative z-10 text-center text-white px-4 md:px-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to My Web Dev Service
          </motion.h1>

          <motion.p
            className="text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I build modern, responsive, and stunning websites that suit your
            brand.
          </motion.p>
          <HeroButtons />
        </motion.div>
      </section>
    </>
  );
}
