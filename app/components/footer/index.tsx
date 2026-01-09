import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
export const Footer = () => {
  return (
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
              <Image
                src="/logo.png"
                alt="Mehndi Artistry"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h3 className="text-4xl font-bold">Pushpa Mehndi Arts</h3>
          </div>

          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Creating timeless beauty through the ancient art of mehndi
          </p>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
          <p className="text-sm text-amber-400">
            © 2026 Mehndi Artistry. All rights reserved. Crafted with love and
            henna.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
