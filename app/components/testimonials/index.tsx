"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    text: "Pushpa made my wedding day even more special. The bridal mehndi was absolutely stunning — every guest was in awe. She took so much care with the personalized details.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Aisha Khan",
    role: "Anniversary Party",
    text: "The Arabic design was elegant and bold. Pushpa's technique is flawless and she made the whole experience feel like a pampering session. Highly recommend!",
    rating: 5,
    avatar: "AK",
  },
  {
    name: "Neha Patel",
    role: "Festival Event",
    text: "Booked for a Diwali party and everyone loved their designs. She handles multiple guests with grace and speed without compromising on quality.",
    rating: 5,
    avatar: "NP",
  },
  {
    name: "Ritu Gupta",
    role: "Engagement Ceremony",
    text: "From the intricate peacock motifs to the hidden initials, Pushpa created a masterpiece on my hands. The color lasted for weeks! Truly an artist.",
    rating: 5,
    avatar: "RG",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-orange-100 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600 rounded-full blur-3xl" />
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
            What Clients Say
          </h2>
          <p className="text-xl text-amber-800/70 max-w-3xl mx-auto">
            Stories from our cherished clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100 relative"
            >
              <div className="absolute top-6 right-6 text-amber-200">
                <Quote size={40} />
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-amber-900">{t.name}</h4>
                  <p className="text-amber-600 text-xs">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-amber-800/80 leading-relaxed text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
