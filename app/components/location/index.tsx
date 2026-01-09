import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export const Location = () => {
  return (
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
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"
          />
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-900 to-orange-900 bg-clip-text text-transparent">
            Visit Our Studio
          </h2>
          <p className="text-2xl text-amber-800/70">
            Experience artistry in a welcoming space
          </p>
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
              {
                icon: <MapPin size={28} />,
                title: "Address",
                content: "123 Beauty Lane, Art District\nNew York, NY 10001",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: <Phone size={28} />,
                title: "Phone",
                content: "+1 (555) 123-4567\nMon-Sat: 9AM - 7PM",
                color: "from-orange-500 to-amber-600",
              },
              {
                icon: <Mail size={28} />,
                title: "Email",
                content: "info@mehndiartistry.com\nQuick response within 24hrs",
                color: "from-amber-600 to-orange-600",
              },
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
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-amber-900">
                    {item.title}
                  </h3>
                  <p className="text-amber-800/80 whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
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
                  <div className="text-2xl font-bold text-amber-900">
                    Map Location
                  </div>
                  <div className="text-amber-700 mt-2">
                    Interactive map placeholder
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
