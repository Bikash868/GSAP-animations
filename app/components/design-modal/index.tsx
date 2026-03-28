"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Design } from "@/app/data/designs";
import { formatPrice } from "@/app/data/designs";

interface DesignModalProps {
  design: Design | null;
  onClose: () => void;
  onBookNow: (design: Design) => void;
}

export const DesignModal = ({ design, onClose, onBookNow }: DesignModalProps) => {
  if (!design) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl border border-amber-200"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
          >
            <X size={20} className="text-amber-900" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-[300px] md:h-[500px]">
              <img
                src={design.url}
                alt={design.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-amber-800 capitalize">{design.category}</span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-3">
                  {design.title}
                </h2>
                <p className="text-amber-800/70 leading-relaxed mb-6 text-[15px]">
                  {design.desc}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Clock size={18} className="text-amber-700" />
                    </div>
                    <div>
                      <p className="text-xs text-amber-600">Duration</p>
                      <p className="font-semibold text-amber-900 text-sm">{design.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Star size={18} className="text-amber-700" />
                    </div>
                    <div>
                      <p className="text-xs text-amber-600">Popularity</p>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-amber-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                            style={{ width: `${design.popularity}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-amber-800">{design.popularity}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-xs text-amber-600">Starting from</p>
                    <p className="text-3xl font-bold text-amber-900 font-display">{formatPrice(design.price)}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onBookNow(design)}
                  className="w-full bg-gradient-to-r from-amber-700 to-orange-700 text-white py-4 rounded-2xl font-semibold shadow-lg text-base cursor-pointer hover:shadow-xl transition-shadow"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

interface BookingCalendarProps {
  design: Design | null;
  onClose: () => void;
}

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM",
];

export const BookingCalendar = ({ design, onClose }: BookingCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [booked, setBooked] = useState(false);

  if (!design) return null;

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" });

  const prevMonth = () => {
    const d = new Date(year, month - 1, 1);
    if (d >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentMonth(d);
      setSelectedDate(null);
    }
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const isDateDisabled = (day: number) => {
    const d = new Date(year, month, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const bookedSlots = [3, 7, 12, 18, 22, 28];

  const handleConfirm = () => {
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
          >
            <X size={20} className="text-amber-900" />
          </button>

          {booked ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-16 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="text-7xl mb-6"
              >
                ✅
              </motion.div>
              <h3 className="text-3xl font-bold text-amber-900 mb-3">Booking Confirmed!</h3>
              <p className="text-amber-700 text-base">
                Your session for <strong>{design.title}</strong> has been booked.
              </p>
              <p className="text-amber-600 mt-2 text-sm">We&apos;ll send you a confirmation shortly.</p>
            </motion.div>
          ) : (
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-amber-900">
                  Book: {design.title}
                </h2>
                <p className="text-amber-700 mt-1 text-sm">
                  {formatPrice(design.price)} &middot; {design.duration}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={prevMonth} className="p-2 hover:bg-amber-100 rounded-xl transition-colors cursor-pointer">
                    <ChevronLeft size={20} className="text-amber-800" />
                  </button>
                  <h3 className="text-base font-bold text-amber-900">{monthName}</h3>
                  <button onClick={nextMonth} className="p-2 hover:bg-amber-100 rounded-xl transition-colors cursor-pointer">
                    <ChevronRight size={20} className="text-amber-800" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="text-center text-xs font-semibold text-amber-600 py-2">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const disabled = isDateDisabled(day);
                    const isBooked = bookedSlots.includes(day);
                    const isSelected = selectedDate === day;

                    return (
                      <button
                        key={day}
                        disabled={disabled || isBooked}
                        onClick={() => setSelectedDate(day)}
                        className={`
                          h-10 rounded-xl text-sm font-medium transition-all cursor-pointer
                          ${isSelected
                            ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg scale-105"
                            : disabled
                              ? "text-amber-300 cursor-not-allowed"
                              : isBooked
                                ? "text-red-400 line-through cursor-not-allowed bg-red-50"
                                : "text-amber-800 hover:bg-amber-100"
                          }
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h4 className="text-base font-bold text-amber-900 mb-3">Select Time</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          py-2 px-1 rounded-xl text-xs font-medium transition-all cursor-pointer
                          ${selectedTime === time
                            ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                            : "bg-white border border-amber-200 text-amber-800 hover:border-amber-400"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!selectedDate || !selectedTime}
                onClick={handleConfirm}
                className={`
                  w-full py-4 rounded-2xl font-semibold text-base transition-all cursor-pointer
                  ${selectedDate && selectedTime
                    ? "bg-gradient-to-r from-amber-700 to-orange-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-amber-200 text-amber-500 cursor-not-allowed"
                  }
                `}
              >
                {selectedDate && selectedTime
                  ? `Confirm Booking — ${monthName.split(" ")[0]} ${selectedDate} at ${selectedTime}`
                  : "Select a date & time"
                }
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
