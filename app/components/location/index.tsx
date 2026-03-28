"use client";
import { motion } from "framer-motion";
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
          <p className="text-xl text-amber-800/70">
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
                content: "Saheed Nagar, Near Big Bazaar\nBhubaneswar, Odisha 751007",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: <Phone size={28} />,
                title: "Phone",
                content: "+91 98765 43210\nMon-Sat: 9AM - 7PM",
                color: "from-orange-500 to-amber-600",
              },
              {
                icon: <Mail size={28} />,
                title: "Email",
                content: "pushpamehndiarts@gmail.com\nQuick response within 24hrs",
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
                  <h3 className="text-xl font-bold mb-2 text-amber-900">
                    {item.title}
                  </h3>
                  <p className="text-amber-800/80 whitespace-pre-line leading-relaxed text-[15px]">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-[3rem] blur-2xl opacity-30" />
            <div className="relative rounded-[3rem] h-[500px] overflow-hidden border-4 border-white shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.098!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sSaheed%20Nagar%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1711622400000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pushpa Mehndi Arts - Bhubaneswar"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
