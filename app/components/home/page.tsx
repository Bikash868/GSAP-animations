'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, MapPin, Phone, Mail, Instagram, Facebook, Star, Clock, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

const MehndiWebsite = () => {
  const [activeDesign, setActiveDesign] = useState(0);
  const [fillProgress, setFillProgress] = useState(0);
  const pinnedSectionRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Mehndi designs from Unsplash
  const designs = [
    { 
      id: 1, 
      url: '/design1.png',
      title: 'Intricate Bridal Design',
      desc: 'Elaborate patterns perfect for your special day'
    },
    { 
      id: 2, 
      url: '/design2.png',
      title: 'Classic Patterns',
      desc: 'Traditional designs with timeless elegance'
    },
    { 
      id: 3, 
    url: '/design3.png',
      title: 'Contemporary Style',
      desc: 'Modern interpretations of classic art'
    },
    { 
      id: 4, 
      url: '/design4.png',
      title: 'Arabic Mehndi',
      desc: 'Bold and beautiful flowing patterns'
    },
    { 
      id: 5, 
      url: '/design5.png',
      title: 'Festival Special',
      desc: 'Celebratory designs for joyous occasions'
    },
  ];

  const services = [
	{ 
	  icon: '💍', 
	  title: 'Bridal Mehndi', 
	  desc: 'Luxurious, highly detailed bridal mehndi crafted to tell your love story, with intricate motifs, fine lines, and personalized elements for your wedding day.',
	  price: 'From $150',
	  features: [
		'Full hands & feet',
		'Personalized motifs (names, dates)',
		'Premium detailing',
		'3–4 hours'
	  ]
	},
	{ 
	  icon: '🎉', 
	  title: 'Party Mehndi', 
	  desc: 'Stylish and graceful mehndi designs perfect for parties, festivals, and family gatherings, offering beauty without long application time.',
	  price: 'From $50',
	  features: [
		'Both hands',
		'Minimal to medium designs',
		'Fast application',
		'1–2 hours'
	  ]
	},
	{ 
	  icon: '✨', 
	  title: 'Arabic Mehndi', 
	  desc: 'Modern Arabic mehndi featuring bold strokes, flowing florals, and spacious patterns that create a striking and elegant look.',
	  price: 'From $80',
	  features: [
		'Bold & clean patterns',
		'Floral and leafy flows',
		'Modern Arabic styles',
		'2–3 hours'
	  ]
	},
	{ 
	  icon: '🌺', 
	  title: 'Traditional Mehndi', 
	  desc: 'Timeless Indian mehndi designs rooted in tradition, filled with intricate details, cultural symbols, and dense pattern work.',
	  price: 'From $60',
	  features: [
		'Traditional Indian motifs',
		'Dense & detailed work',
		'Cultural authenticity',
		'2–3 hours'
	  ]
	},
  ];
  

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
        const designIndex = Math.min(Math.floor(progress * designs.length), designs.length - 1);
        setActiveDesign(designIndex);
        setFillProgress(Math.min(progress * 100, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-gradient-to-r from-amber-900/95 to-orange-900/95 backdrop-blur-xl z-50 shadow-2xl border-b border-amber-700/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Image src="/logo.png" alt="Mehndi Artistry" width={40} height={40} className='rounded-full'/>
              </div>
              <span className="text-3xl font-bold text-amber-100">
                Pushpa Mehndi Arts
              </span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Gallery', 'Services', 'About', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="cursor-pointer text-2xl text-amber-100 hover:text-amber-300 transition-colors font-medium relative group tex-[16px]"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl relative overflow-hidden group"
            >
              <a href="#contact" className="relative z-10">Book Now</a>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
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
              backgroundPosition: ['100% 100%', '0% 0%'],
            }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `url("/henna-2.png")`,
              backgroundSize: '100px 100px',
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
              <Image src={'/henna-1.png'} alt="Mehndi Artistry" width={100} height={100} className='rounded-full'/>
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
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 119, 6, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-700 to-orange-700 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Gallery</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-800 to-amber-800"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(217, 119, 6, 0.1)' }}
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

      {/* GSAP Pinned Scrolling Gallery with Filling Palm Design */}
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
                filter: 'drop-shadow(0 0 20px rgba(217, 119, 6, 0.3))',
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
                  transition: 'clip-path 0.3s ease-out',
                }}
              />
              
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="palmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
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
                    animate={{ width: '100px' }}
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
                          ? 'w-12 bg-gradient-to-r from-amber-600 to-orange-600' 
                          : 'w-2 bg-amber-300'
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
            <p className="text-amber-700 text-sm mb-2">Scroll to explore designs</p>
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

      {/* Services Section - More Modern */}
      <section id="services" className="py-32 px-4 bg-gradient-to-b from-orange-100 to-amber-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"
            />
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-900 to-orange-900 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-2xl text-amber-800/70 max-w-3xl mx-auto">
              Premium mehndi artistry tailored for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden"
              >
                {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity" /> */}
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: `url('/floral-1.png')`,
						transform: `rotate(${index * 25}deg)`
					}}
				/>
                
				<div className="relative bg-white/80 backdrop-blur-[2px] rounded-3xl p-10 shadow-xl border border-amber-200/50 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-amber-700">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-amber-900 group-hover:text-orange-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xl font-bold text-amber-800/70 text-lg mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                        <span className="text-lg font-bold text-amber-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 w-full bg-gradient-to-r from-amber-700 to-orange-700 text-white py-4 rounded-2xl font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Choose This Service
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Modern Design */}
      <section id="about" className="py-32 px-4 bg-gradient-to-b from-amber-50 to-orange-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-[3rem] blur-3xl opacity-30" />
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
                >
                  <img 
                    src="./artist.png" 
                    alt="Mehndi Artist"
                    className="w-full h-[600px] object-cover"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-700 to-orange-700 text-white p-10 rounded-3xl shadow-2xl"
                >
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-2xl opacity-90">Years of Excellence</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '120px' }}
                  viewport={{ once: true }}
                  className="h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 mb-6"
                />
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-900 to-orange-900 bg-clip-text text-transparent">
                  Master Artist
                </h2>
                <p className="text-xl text-amber-800/80 leading-relaxed mb-8">
                  With over 15 years of dedicated practice, our master artist has perfected the ancient art of mehndi. Each design is a unique masterpiece, blending traditional techniques with contemporary aesthetics to create unforgettable experiences.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Award className="text-orange-600" size={28} />, text: 'Award-Winning Artist', subtext: 'Recognized nationally' },
                  { icon: <Star className="text-orange-600" size={28} />, text: '5000+ Happy Clients', subtext: 'Across the country' },
                  { icon: <Clock className="text-orange-600" size={28} />, text: '15+ Years Experience', subtext: 'Mastering the craft' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200/50 transition-all"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-amber-900">{item.text}</div>
                      <div className="text-amber-700/70">{item.subtext}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section - Ultra Modern */}
      <section id="contact" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800" />
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6"
            />
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Book Your Session
            </h2>
            <p className="text-2xl text-amber-100 max-w-3xl mx-auto">
              Transform your hands into a canvas of beauty
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-8 py-5 rounded-2xl bg-white/90 border-2 border-amber-200 focus:border-amber-500 outline-none transition-all text-lg text-amber-900 placeholder-amber-600/50"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-8 py-5 rounded-2xl bg-white/90 border-2 border-amber-200 focus:border-amber-500 outline-none transition-all text-lg text-amber-900 placeholder-amber-600/50"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full px-8 py-5 rounded-2xl bg-white/90 border-2 border-amber-200 focus:border-amber-500 outline-none transition-all text-lg text-amber-900 placeholder-amber-600/50"
              />
              <input 
                type="date" 
                className="w-full px-8 py-5 rounded-2xl bg-white/90 border-2 border-amber-200 focus:border-amber-500 outline-none transition-all text-lg text-amber-900"
              />
            </div>
            <select className="w-full px-8 py-5 rounded-2xl bg-white/90 border-2 border-amber-200 focus:border-amber-500 outline-none transition-all text-lg text-amber-900 mb-6">
              <option>Select Service Type</option>
              <option>Bridal Mehndi</option>
              <option>Party Mehndi</option>
              <option>Arabic Mehndi</option>
              <option>Traditional Mehndi</option>
            </select>
            <textarea 
              placeholder="Tell us about your design preferences and occasion..."
              rows="5"
              className="w-full px-8 py-5 rounded-2xl bg-white/90 border-2 border-amber-200 focus:border-amber-500 outline-none transition-all text-lg text-amber-900 placeholder-amber-600/50 mb-8"
            />
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-8 py-6 rounded-2xl text-xl font-bold shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Calendar size={24} />
                Confirm Booking
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"
            />
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-900 to-orange-900 bg-clip-text text-transparent">
              Visit Our Studio
            </h2>
            <p className="text-2xl text-amber-800/70">Experience artistry in a welcoming space</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: <MapPin size={28} />, title: 'Address', content: '123 Beauty Lane, Art District\nNew York, NY 10001', color: 'from-amber-500 to-orange-500' },
                { icon: <Phone size={28} />, title: 'Phone', content: '+1 (555) 123-4567\nMon-Sat: 9AM - 7PM', color: 'from-orange-500 to-amber-600' },
                { icon: <Mail size={28} />, title: 'Email', content: 'info@mehndiartistry.com\nQuick response within 24hrs', color: 'from-amber-600 to-orange-600' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start gap-6 p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-amber-900">{item.title}</h3>
                    <p className="text-amber-800/80 whitespace-pre-line leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* <div className="flex gap-4 pt-4">
                {[
                  { Icon: Instagram, color: 'from-purple-500 to-pink-500' },
                  { Icon: Facebook, color: 'from-blue-500 to-blue-600' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center cursor-pointer shadow-xl`}
                  >
                    <item.Icon className="text-white" size={28} />
                  </motion.div>
                ))}
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-[3rem] blur-2xl opacity-30" />
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-[3rem] h-[500px] flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
                <MapPin size={80} className="text-amber-700 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📍</div>
                    <div className="text-2xl font-bold text-amber-900">Map Location</div>
                    <div className="text-amber-700 mt-2">Interactive map placeholder</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Modern */}
      <footer className="bg-gradient-to-br from-amber-950 via-orange-950 to-amber-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Image src="/logo.png" alt="Mehndi Artistry" width={40} height={40} className='rounded-full'/>
              </div>
              <h3 className="text-4xl font-bold">Pushpa Mehndi Arts</h3>
            </div>
            
            <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
              Creating timeless beauty through the ancient art of mehndi
            </p>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
            <p className="text-sm text-amber-400">© 2026 Mehndi Artistry. All rights reserved. Crafted with love and henna.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default MehndiWebsite;