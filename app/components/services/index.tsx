import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      icon: "💍",
      title: "Bridal Mehndi",
      desc: "Luxurious, highly detailed bridal mehndi crafted to tell your love story, with intricate motifs, fine lines, and personalized elements for your wedding day.",
      price: "From $150",
      features: [
        "Full hands & feet",
        "Personalized motifs (names, dates)",
        "Premium detailing",
        "3–4 hours",
      ],
    },
    {
      icon: "🎉",
      title: "Party Mehndi",
      desc: "Stylish and graceful mehndi designs perfect for parties, festivals, and family gatherings, offering beauty without long application time.",
      price: "From $50",
      features: [
        "Both hands",
        "Minimal to medium designs",
        "Fast application",
        "1–2 hours",
      ],
    },
    {
      icon: "✨",
      title: "Arabic Mehndi",
      desc: "Modern Arabic mehndi featuring bold strokes, flowing florals, and spacious patterns that create a striking and elegant look.",
      price: "From $80",
      features: [
        "Bold & clean patterns",
        "Floral and leafy flows",
        "Modern Arabic styles",
        "2–3 hours",
      ],
    },
    {
      icon: "🌺",
      title: "Traditional Mehndi",
      desc: "Timeless Indian mehndi designs rooted in tradition, filled with intricate details, cultural symbols, and dense pattern work.",
      price: "From $60",
      features: [
        "Traditional Indian motifs",
        "Dense & detailed work",
        "Cultural authenticity",
        "2–3 hours",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-32 px-4 bg-gradient-to-b from-orange-100 to-amber-50 relative overflow-hidden"
    >
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
            whileInView={{ width: "120px" }}
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
                  transform: `rotate(${index * 25}deg)`,
                }}
              />

              <div className="relative bg-white/80 backdrop-blur-[2px] rounded-3xl p-10 shadow-xl border border-amber-200/50 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-amber-700">
                      {service.price}
                    </div>
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
                      <span className="text-lg font-bold text-amber-700">
                        {feature}
                      </span>
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
  );
};
