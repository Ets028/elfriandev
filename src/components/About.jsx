import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profile from "../assets/Profil2.jpeg";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        >
          <img
            src={profile}
            alt="About me"
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>

        <motion.div variants={textVariants} initial="hidden" animate={controls}>
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Elfrian 👋</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            I’m a passionate web developer specializing in building responsive
            and modern websites using React, Tailwind CSS. I focus on creating
            great design, and user experience.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you need a landing page, company profile, or custom project
            — I'm ready to help you bring your vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
