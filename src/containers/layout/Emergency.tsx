'use client';

import { author } from '@/lib/content/portfolio';
import { Phone, Clock, MapPin, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export default function Emergency() {
  return (
    <section
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 right-32 w-16 h-16 bg-red-500/20 rounded-full backdrop-blur-xl border border-red-500/30"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-xl border border-red-500/30 text-red-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-4 h-4 mr-2" />
            Emergency Service Available
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Need <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Emergency</span> Service?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We're available <span className="text-red-400 font-semibold">24/7</span> for all your tire and brake emergencies.
              Fast response, professional service, anywhere in Maryland.
            </motion.p>

            {/* Call Button */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href={`tel:${author.phone}`}
                className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-500 to-orange-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
              >
                <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Call {author.phone}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <Clock className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg mb-2">24/7 Available</h3>
                <p className="text-gray-400 text-sm">Round the clock emergency service</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <MapPin className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg mb-2">Anywhere in MD</h3>
                <p className="text-gray-400 text-sm">We come to your location</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <Zap className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg mb-2">Fast Response</h3>
                <p className="text-gray-400 text-sm">Average 30-minute arrival</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
