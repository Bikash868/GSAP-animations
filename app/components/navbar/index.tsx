import { motion} from "framer-motion";
import Image from "next/image";

export const NavBar = () => {
  return (
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
              <Image
                src="/logo.png"
                alt="Mehndi Artistry"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <span className="text-3xl font-bold text-amber-100">
              Pushpa Mehndi Arts
            </span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["Home", "Gallery", "Services", "About", "Contact"].map(
              (item, i) => (
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
              )
            )}
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl relative overflow-hidden group"
          >
            <a href="#contact" className="relative z-10">
              Book Now
            </a>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
