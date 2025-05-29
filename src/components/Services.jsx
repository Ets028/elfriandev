import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const services = [
    {
      title: "Landing Page",
      description:
        "Clean, responsive landing pages designed to convert visitors into clients.",
    },
    {
      title: "Company Profile",
      description:
        "Professional company websites to showcase your brand and services.",
    },
    {
      title: "Custom Website",
      description:
        "Tailored solutions built with React to fit your unique goals.",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">My Services</h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          I provide custom website solutions for your business needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
              }}
              className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow hover:shadow-md dark:hover:shadow-lg transition cursor-pointer bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
