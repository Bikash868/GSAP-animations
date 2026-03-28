"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Services", href: "/#services" },
  { label: "Designs", href: "/designs" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-gradient-to-r from-amber-900/95 to-orange-900/95 backdrop-blur-xl z-50 shadow-2xl border-b border-amber-700/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
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
              <span className="text-2xl font-bold text-amber-100 font-display">
                Pushpa Mehndi Arts
              </span>
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, i) => {
              const isActive = item.href === "/designs" && pathname === "/designs";
              const isRouteLink = item.href.startsWith("/") && !item.href.startsWith("/#");

              const Comp = isRouteLink ? Link : "a";

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Comp
                    href={item.href}
                    className={`cursor-pointer text-[15px] transition-colors font-medium relative group ${
                      isActive ? "text-amber-300" : "text-amber-100 hover:text-amber-300"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Comp>
                </motion.div>
              );
            })}
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-xl relative overflow-hidden group"
          >
            <a href="/#contact" className="relative z-10">
              Book Now
            </a>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
