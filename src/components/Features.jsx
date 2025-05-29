import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const features = [
    {
      title: "Modern Tech Stack",
      description:
        "I use the latest tools like React, Vite, and Tailwind CSS to build fast, maintainable websites.",
    },
    {
      title: "Fast Delivery",
      description:
        "I work efficiently and communicate clearly to deliver results on time.",
    },
    {
      title: "Affordable",
      description:
        "Get professional quality work that fits your budget—ideal for small businesses.",
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Me?</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg cursor-default"
              custom={i}
              initial="hidden"
              animate={controls}
              variants={featureVariants}
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
