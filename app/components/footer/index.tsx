"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Services", href: "/#services" },
  { label: "Designs", href: "/designs" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-950 via-orange-950 to-amber-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Mehndi Artistry"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold font-display">Pushpa Mehndi Arts</h3>
              </div>
              <p className="text-amber-200/80 leading-relaxed mb-6 text-sm">
                Creating timeless beauty through the ancient art of mehndi. 15+ years of experience
                bringing joy to every occasion. Based in Bhubaneswar, Odisha.
              </p>
              <div className="flex gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <Instagram size={18} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <Facebook size={18} />
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-200">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => {
                  const isRoute = link.href.startsWith("/") && !link.href.startsWith("/#");
                  const Comp = isRoute ? Link : "a";
                  return (
                    <Comp
                      key={link.label}
                      href={link.href}
                      className="text-amber-300/70 hover:text-white transition-colors py-1 text-sm"
                    >
                      {link.label}
                    </Comp>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-200">Working Hours</h4>
              <div className="space-y-2 text-amber-300/70 text-sm">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span>9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
                <div className="h-px bg-amber-800 my-3" />
                <p className="text-xs text-amber-400">
                  Bridal bookings recommended 2–3 months in advance
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-amber-400">
              © 2026 Pushpa Mehndi Arts. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-500">
              <span>Created by</span>
              <Image
                src="/creator.png"
                alt="Vibe Visuals"
                width={100}
                height={28}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
