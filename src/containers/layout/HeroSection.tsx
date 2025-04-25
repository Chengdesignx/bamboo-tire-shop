'use client';
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/shop3.jpg")' }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Title */}
          <motion.h1
            className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fast, Reliable, and{' '}
            <span className="text-[#F74231] italic">Convenient</span>{' '}
            <span className="bg-gradient-to-r from-[#F78731] to-[#F74231] text-transparent bg-clip-text">
              Auto Care
            </span>{' '}
            <span className="block sm:inline">at Your Doorstep</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-xl md:text-xl mb-8 max-w-2xl font-light tracking-wide mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We provide hassle-free mobile tire and brake services at your home,
            office, or anywhere you need us. Save time and avoid the stress of
            visiting a shop.
          </motion.p>

          {/* Call-to-action button */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/contact"
              className="inline-block bg-transparent hover:bg-[#F78731] text-white 
                py-3 sm:py-4 px-8 sm:px-12 rounded-full 
                text-base sm:text-lg transition-all duration-300 
                border-2 border-[#F74231] hover:border-[#F78731] 
                transform hover:scale-105 hover:shadow-lg text-center
                whitespace-nowrap"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
