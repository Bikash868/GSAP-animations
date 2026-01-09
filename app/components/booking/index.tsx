import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
export const BookingSection = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)",
          ],
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
            whileInView={{ width: "120px" }}
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
            rows={5}
            className="w-full px-8 py-5 rounded-2xl bg-white/90 border-2 border-amber-200 focus:border-amber-500 outline-none transition-all text-lg text-amber-900 placeholder-amber-600/50 mb-8"
          />
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-8 py-6 rounded-2xl text-xl font-bold shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Calendar size={24} />
              Confirm Booking
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
