'use client';

import { Clock, MapPin, MessageSquare, Phone, Mail, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import { author } from '@/lib/content/portfolio';

export default function ContactUs() {
  const whatsappNumber = author.phone.replace(/\D/g, ''); // Remove any special characters from phone number
  const whatsappMessage = "Hello! I need assistance with tire or brake service.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-orange-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 pt-40 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 right-32 w-16 h-16 bg-orange-500/20 rounded-full backdrop-blur-xl border border-orange-500/30"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-400/20 backdrop-blur-xl border border-orange-400/30 text-orange-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Phone className="w-4 h-4 mr-2" />
              24/7 Contact Available
            </motion.div>

            {/* Main Glass Card */}
            <motion.div
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
                <br />
                <span className="text-2xl md:text-4xl font-light text-gray-300">
                  We're Here to Help
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl font-light text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Need mobile tire or brake service? We're here to help 24/7. Contact us for immediate assistance.
                <span className="text-orange-300 font-medium"> Fast response guaranteed!</span>
              </motion.p>

              {/* Quick Contact Stats */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                  <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-medium">24/7 Available</p>
                  <p className="text-gray-400 text-sm">Emergency Service</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                  <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Fast Response</p>
                  <p className="text-gray-400 text-sm">30min Average</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                  <Star className="w-6 h-6 text-orange-400 mx-auto mb-2 fill-current" />
                  <p className="text-white font-medium">5-Star Service</p>
                  <p className="text-gray-400 text-sm">Customer Rated</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100/80 backdrop-blur-sm border border-orange-200/50 text-orange-700 text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact Methods
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Preferred
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Contact Method</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience. We respond quickly to all inquiries and are ready to help with your mobile tire service needs.
            </p>
          </motion.div>

          {/* Contact Cards Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Phone Contact */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                  Call Us Now
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Available 24/7 for emergencies and immediate assistance
                </p>

                <a
                  href={`tel:${author.phone}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {author.phone}
                </a>

                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                  WhatsApp Chat
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Chat with us instantly for quick questions and quotes
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message on WhatsApp
                </a>

                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>

            {/* Service Area */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  Service Area
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We come directly to your location anywhere in our service area
                </p>

                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium">
                  <MapPin className="w-5 h-5 mr-2" />
                  Maryland & Surrounding Areas
                </div>

                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Service Hours */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Service Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Regular Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Monday - Sunday</span>
                      <span className="text-orange-600 font-bold">24/7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Emergency Service</span>
                      <span className="text-red-600 font-bold">Always Available</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">24/7 Emergency Service</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Available round the clock for urgent tire and brake emergencies. Call our emergency line for immediate assistance anywhere in Maryland.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Google Maps */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Service Area</h3>
              <p className="text-orange-100">We provide mobile service throughout Maryland and surrounding areas</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49573.31595461542!2d-76.93611277944793!3d39.00437905490362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c3f90c535b85%3A0x713f5e600a24b1d8!2sGreenbelt%2C%20MD%2020770!5e0!3m2!1sen!2sus!4v1684951468973!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}