import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ y: heroY, scale: heroScale }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["100% 100%", "0% 0%"],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("/henna-2.png")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Floating Elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-600/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block bg-gradient-to-br from-amber-100 to-orange-100 rounded-full shadow-2xl">
            <Image
              src={"/henna-1.png"}
              alt="Mehndi Artistry"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-7xl md:text-9xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent drop-shadow-lg">
            The Art of
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
            Mehndi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-3xl text-amber-900/80 mb-12 font-light"
        >
          Where tradition meets contemporary elegance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(217, 119, 6, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-700 to-orange-700 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Gallery</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-800 to-amber-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(217, 119, 6, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border-3 border-amber-700 text-amber-900 px-10 py-5 rounded-full text-xl font-semibold transition-all backdrop-blur-sm"
          >
            Our Services
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-14 border-3 border-amber-700 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-amber-700 rounded-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
