import { useEffect, useRef, useState } from "react";
import { motion} from "framer-motion";

export const PinnedGallery = () => {
  const [activeDesign, setActiveDesign] = useState(0);
  const [fillProgress, setFillProgress] = useState(0);
  const pinnedSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const pinnedSection = pinnedSectionRef.current;
      if (!pinnedSection) return;

      const rect = pinnedSection.getBoundingClientRect();
      const sectionHeight = pinnedSection.offsetHeight;
      const windowHeight = window.innerHeight;

      // Pin effect
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const progress = Math.abs(rect.top) / (sectionHeight - windowHeight);
        const designIndex = Math.min(
          Math.floor(progress * designs.length),
          designs.length - 1
        );
        setActiveDesign(designIndex);
        setFillProgress(Math.min(progress * 100, 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mehndi designs from Unsplash
  const designs = [
    {
      id: 1,
      url: "/design1.png",
      title: "Intricate Bridal Design",
      desc: "Elaborate patterns perfect for your special day",
    },
    {
      id: 2,
      url: "/design2.png",
      title: "Classic Patterns",
      desc: "Traditional designs with timeless elegance",
    },
    {
      id: 3,
      url: "/design3.png",
      title: "Contemporary Style",
      desc: "Modern interpretations of classic art",
    },
    {
      id: 4,
      url: "/design4.png",
      title: "Arabic Mehndi",
      desc: "Bold and beautiful flowing patterns",
    },
    {
      id: 5,
      url: "/design5.png",
      title: "Festival Special",
      desc: "Celebratory designs for joyous occasions",
    },
  ];

  return (
    <section
      id="gallery"
      ref={pinnedSectionRef}
      className="relative h-[500vh] bg-gradient-to-b from-amber-50 to-orange-100"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Palm Design with Fill Effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg
            viewBox="0 0 400 600"
            className="w-full h-full"
            style={{
              filter: "drop-shadow(0 0 20px rgba(217, 119, 6, 0.3))",
            }}
          >
            {/* Palm Outline */}
            <motion.path
              d="M200 50 Q180 80 180 120 L180 300 Q180 350 200 380 Q220 350 220 300 L220 120 Q220 80 200 50 Z
                   M140 150 Q130 180 140 220 L160 280 Q170 300 180 300
                   M260 150 Q270 180 260 220 L240 280 Q230 300 220 300
                   M160 100 Q150 130 160 170
                   M240 100 Q250 130 240 170
                   M200 80 Q195 100 200 120"
              fill="none"
              stroke="#92400e"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Filling Effect */}
            <motion.path
              d="M200 50 Q180 80 180 120 L180 300 Q180 350 200 380 Q220 350 220 300 L220 120 Q220 80 200 50 Z
                   M140 150 Q130 180 140 220 L160 280 Q170 300 180 300
                   M260 150 Q270 180 260 220 L240 280 Q230 300 220 300
                   M160 100 Q150 130 160 170
                   M240 100 Q250 130 240 170
                   M200 80 Q195 100 200 120"
              fill="url(#palmGradient)"
              stroke="#92400e"
              strokeWidth="2"
              style={{
                clipPath: `inset(${100 - fillProgress}% 0 0 0)`,
                transition: "clip-path 0.3s ease-out",
              }}
            />

            {/* Gradient Definition */}
            <defs>
              <linearGradient
                id="palmGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#b45309" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#92400e" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Decorative Mehndi Patterns */}
            <motion.circle
              cx="200"
              cy="200"
              r="30"
              fill="none"
              stroke="#92400e"
              strokeWidth="2"
              style={{
                clipPath: `inset(${100 - fillProgress}% 0 0 0)`,
              }}
            />
            <motion.circle
              cx="200"
              cy="200"
              r="20"
              fill="none"
              stroke="#92400e"
              strokeWidth="1.5"
              style={{
                clipPath: `inset(${100 - fillProgress}% 0 0 0)`,
              }}
            />
          </svg>
        </div>

        {/* Design Showcase */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              key={`${activeDesign}-text`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  className="h-1 bg-gradient-to-r from-amber-600 to-orange-600"
                />
                <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-900 to-orange-900 bg-clip-text text-transparent">
                  {designs[activeDesign].title}
                </h2>
                <p className="text-3xl text-amber-800/80 leading-relaxed">
                  {designs[activeDesign].desc}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-amber-700">
                  {activeDesign + 1}
                </div>
                <div className="h-16 w-1 bg-amber-300" />
                <div className="text-2xl text-amber-600">
                  of {designs.length}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-700 to-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl"
              >
                Book This Design
              </motion.button>
            </motion.div>

            {/* Right: Image Display */}
            <motion.div
              key={`${activeDesign}-image`}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl blur-3xl opacity-50" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-amber-200">
                <img
                  src={designs[activeDesign].url}
                  alt={designs[activeDesign].title}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent" />
              </div>

              {/* Progress Indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                {designs.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === activeDesign
                        ? "w-12 bg-gradient-to-r from-amber-600 to-orange-600"
                        : "w-2 bg-amber-300"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
          animate={{ opacity: fillProgress < 90 ? 1 : 0 }}
        >
          <p className="text-amber-700 text-sm mb-2">
            Scroll to explore designs
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-amber-600"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
