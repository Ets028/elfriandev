import { motion } from "framer-motion";

const HeroButtons = () => (
  <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
    <motion.a
      href="#services"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300"
    >
      Get Started
    </motion.a>

    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <a
        href="http://localhost:5174"
        className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-block"
      >
        View Portfolio
      </a>
    </motion.div>
  </div>
);

export default HeroButtons;
