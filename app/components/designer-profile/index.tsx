"use client";
import { motion } from "framer-motion";
import { Award, Heart, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: <Users size={22} />, value: "2,500+", label: "Happy Clients" },
  { icon: <Heart size={22} />, value: "800+", label: "Bridal Sessions" },
  { icon: <Award size={22} />, value: "15+", label: "Years Experience" },
  { icon: <Sparkles size={22} />, value: "50+", label: "Design Styles" },
];

export const DesignerProfile = () => {
  return (
    <section id="about" className="py-32 px-4 bg-gradient-to-b from-amber-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-amber-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600 rounded-full blur-3xl" />
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
            Meet the Artist
          </h2>
          <p className="text-xl text-amber-800/70 max-w-3xl mx-auto">
            The hands behind every masterpiece
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-[3rem] blur-2xl opacity-30" />
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl aspect-[3/4]">
                <div className="w-full h-full bg-gradient-to-br from-amber-200 via-orange-100 to-amber-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-6xl">🎨</span>
                    </div>
                    <p className="text-amber-800 font-semibold text-lg font-display">Pushpa Kumari</p>
                    <p className="text-amber-600 text-sm">Master Mehndi Artist</p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-600 to-orange-600 text-white px-6 py-3 rounded-2xl shadow-xl"
              >
                <p className="font-bold text-sm">Since 2010</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-amber-900 mb-2">Pushpa Kumari</h3>
              <p className="text-base text-amber-600 font-medium mb-6">Award-Winning Mehndi Artist & Educator</p>
              <div className="space-y-4 text-amber-800/80 text-[15px] leading-relaxed">
                <p>
                  With over 15 years of mastering the ancient art of mehndi, Pushpa brings every design
                  to life with unmatched precision, creativity, and passion. Trained in both traditional
                  Indian and contemporary Arabic styles, her work seamlessly blends cultural heritage
                  with modern aesthetics.
                </p>
                <p>
                  Having adorned the hands of over 2,500 clients — from intimate family celebrations to
                  grand destination weddings — Pushpa&apos;s artistry has been featured in leading wedding
                  magazines and cultural exhibitions. Each design is a unique story told through the
                  language of henna.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Bridal Specialist", "Arabic Fusion", "Fine Detail Work", "Cultural Motifs", "Contemporary Minimal", "Wedding Educator"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/80 border border-amber-200 rounded-full text-amber-800 font-medium shadow-sm text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 text-center shadow-lg border border-amber-100"
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center text-amber-700">
                    {stat.icon}
                  </div>
                  <p className="text-xl font-bold text-amber-900 font-display">{stat.value}</p>
                  <p className="text-xs text-amber-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
