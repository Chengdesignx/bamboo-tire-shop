'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { author } from '@/lib/content/portfolio';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/shop3.jpg")' }}
    >
      {/* Gradient + Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-sm"></div>

      {/* Content Card */}
      <motion.div
        className="relative z-10 max-w-4xl px-8 py-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center text-white shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {author.name} at your disposal.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Get any tire of your choice at an affordable price.
          <br />
          We provide tire repairs and tires purchase services at your home,
          office or any point of need. Save time and just contact us and talk
          about your needs and we shall get to instantly.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 px-10 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
