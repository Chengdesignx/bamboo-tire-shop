'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { author } from '@/lib/content/portfolio';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden pt-40 sm:pt-32 pb-8 px-4"
      style={{ backgroundImage: 'url("/shop3.jpg")' }}
    >
      {/* Enhanced Gradient + Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90 backdrop-blur-sm"></div>

      {/* Floating Elements - Hidden on Mobile for Performance */}
      <motion.div
        className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-orange-400/20 rounded-full backdrop-blur-xl border border-orange-400/30 hidden sm:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-4 sm:right-16 w-10 h-10 sm:w-16 sm:h-16 bg-white/10 rounded-full backdrop-blur-xl border border-white/20 hidden sm:block"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Card */}
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-400/20 backdrop-blur-xl border border-orange-400/30 text-orange-300 text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2 fill-current" />
            #1 Mobile Tire Service in Maryland
          </motion.div>

          {/* Main Glass Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                {author.name}
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300">
                at your disposal
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl font-light text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-center px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Get any tire of your choice at an affordable price. We provide tire repairs and tire purchase services at your home, office, or any point of need.
              <span className="text-orange-300 font-medium"> Save time and just contact us!</span>
            </motion.p>

            {/* Action Buttons - Enhanced for Mobile */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px]"
              >
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href={`tel:${author.phone}`}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full text-base sm:text-lg font-medium hover:bg-white/20 transition-all duration-300 active:scale-95 min-h-[48px]"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </a>
            </motion.div>

            {/* Quick Info Cards - Enhanced for Mobile */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mx-auto mb-2" />
                <p className="text-white font-medium text-sm sm:text-base">24/7 Service</p>
                <p className="text-gray-400 text-xs sm:text-sm">Always Available</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mx-auto mb-2" />
                <p className="text-white font-medium text-sm sm:text-base">Mobile Service</p>
                <p className="text-gray-400 text-xs sm:text-sm">We Come to You</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mx-auto mb-2 fill-current" />
                <p className="text-white font-medium text-sm sm:text-base">5-Star Rated</p>
                <p className="text-gray-400 text-xs sm:text-sm">Trusted Service</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
