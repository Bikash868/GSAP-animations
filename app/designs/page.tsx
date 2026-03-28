"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { designs, categories, formatPrice, type Design } from "@/app/data/designs";
import { DesignModal, BookingCalendar } from "@/app/components/design-modal";

type SortOption = "popular" | "price-low" | "price-high" | "newest";

export default function DesignsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [bookingDesign, setBookingDesign] = useState<Design | null>(null);

  const filteredDesigns = useMemo(() => {
    let result = [...designs];

    if (activeCategory !== "all") {
      result = result.filter((d) => d.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.desc.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900/95 to-orange-900/95 backdrop-blur-xl shadow-2xl border-b border-amber-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back</span>
              </Link>
              <div className="w-px h-8 bg-amber-700" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Pushpa Mehndi Arts"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <span className="text-xl font-bold text-amber-100 hidden sm:block font-display">
                  Our Designs
                </span>
              </div>
            </div>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-shadow text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-900 to-orange-900 bg-clip-text text-transparent mb-4"
          >
            Design Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-amber-800/70 max-w-2xl mx-auto"
          >
            Explore our collection of {designs.length} handcrafted mehndi designs.
            Click on any design to view details and book your session.
          </motion.p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" />
            <input
              type="text"
              placeholder="Search designs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/80 backdrop-blur border border-amber-200 focus:border-amber-500 outline-none text-amber-900 placeholder-amber-400 shadow-sm text-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-amber-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-3 rounded-2xl bg-white/80 backdrop-blur border border-amber-200 focus:border-amber-500 outline-none text-amber-900 shadow-sm cursor-pointer text-sm"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.key)}
              className={`
                px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all cursor-pointer text-sm
                ${activeCategory === cat.key
                  ? "bg-gradient-to-r from-amber-700 to-orange-700 text-white shadow-lg"
                  : "bg-white/70 text-amber-800 border border-amber-200 hover:border-amber-400"
                }
              `}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-6">
          <p className="text-amber-700 font-medium text-sm">
            {filteredDesigns.length} design{filteredDesigns.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedDesign(design)}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur rounded-3xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-2xl hover:border-amber-300 transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={design.url}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-amber-800 capitalize">
                        {design.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full">
                      <span className="text-xs font-bold">{formatPrice(design.price)}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-amber-900 font-semibold text-xs">Click to view details</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-amber-900 mb-1 group-hover:text-orange-800 transition-colors">
                      {design.title}
                    </h3>
                    <p className="text-amber-700/70 text-sm line-clamp-2 mb-3">
                      {design.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-amber-600">{design.duration}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-16 h-1.5 bg-amber-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                            style={{ width: `${design.popularity}%` }}
                          />
                        </div>
                        <span className="text-xs text-amber-500">{design.popularity}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDesigns.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">No designs found</h3>
            <p className="text-amber-700 text-sm">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {selectedDesign && (
        <DesignModal
          design={selectedDesign}
          onClose={() => setSelectedDesign(null)}
          onBookNow={(design) => {
            setSelectedDesign(null);
            setBookingDesign(design);
          }}
        />
      )}

      {bookingDesign && (
        <BookingCalendar
          design={bookingDesign}
          onClose={() => setBookingDesign(null)}
        />
      )}
    </div>
  );
}
