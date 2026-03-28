"use client";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      icon: "💍",
      title: "Bridal Mehndi",
      desc: "Luxurious bridal mehndi crafted to tell your love story with intricate motifs and personalized elements.",
      price: "From ₹12,000",
      features: [
        "Full hands & feet",
        "Personalized motifs",
        "Premium detailing",
        "3–4 hours",
      ],
    },
    {
      icon: "🎉",
      title: "Party Mehndi",
      desc: "Stylish designs perfect for parties, festivals, and family gatherings without long application time.",
      price: "From ₹3,500",
      features: [
        "Both hands",
        "Medium designs",
        "Fast application",
        "1–2 hours",
      ],
    },
    {
      icon: "✨",
      title: "Arabic Mehndi",
      desc: "Modern Arabic mehndi with bold strokes, flowing florals, and spacious patterns for a striking look.",
      price: "From ₹6,000",
      features: [
        "Bold patterns",
        "Floral flows",
        "Modern styles",
        "2–3 hours",
      ],
    },
    {
      icon: "🌺",
      title: "Traditional",
      desc: "Timeless Indian designs rooted in tradition, filled with cultural symbols and dense pattern work.",
      price: "From ₹4,500",
      features: [
        "Indian motifs",
        "Dense detailing",
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
          <p className="text-xl text-amber-800/70 max-w-3xl mx-auto">
            Premium mehndi artistry tailored for every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-7 shadow-xl border border-amber-200/50 h-full flex flex-col overflow-hidden hover:shadow-2xl transition-shadow">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                  style={{
                    backgroundImage: `url('/floral-1.png')`,
                    transform: `rotate(${index * 25}deg)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-4xl group-hover:scale-110 group-hover:rotate-12 transition-transform">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-amber-900 group-hover:text-orange-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-amber-800/70 text-[15px] mb-5 leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-amber-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-gradient-to-r from-amber-700 to-orange-700 text-white py-3 rounded-xl font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-sm"
                  >
                    Choose Service
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
