'use client';

import { Clock, MapPin, Shield, Award, Users, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const features = [
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Available whenever you need us, day or night. Emergency roadside assistance at your fingertips.',
    gradient: 'from-orange-400 to-red-500',
    bgGradient: 'from-orange-50 to-red-50'
  },
  {
    icon: MapPin,
    title: 'Mobile Service',
    description: 'We come directly to your location - home, office, or roadside. No need to visit a shop.',
    gradient: 'from-blue-400 to-purple-500',
    bgGradient: 'from-blue-50 to-purple-50'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Professional service with premium parts and tools. Your satisfaction is our priority.',
    gradient: 'from-green-400 to-teal-500',
    bgGradient: 'from-green-50 to-teal-50'
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Our team consists of experienced, certified professionals with years of expertise.',
    gradient: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50'
  },
  {
    icon: Users,
    title: '1000+ Happy Customers',
    description: 'Join thousands of satisfied customers who trust us with their tire and brake needs.',
    gradient: 'from-pink-400 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50'
  },
  {
    icon: Wrench,
    title: 'Latest Equipment',
    description: 'State-of-the-art mobile equipment and tools for professional service quality.',
    gradient: 'from-indigo-400 to-blue-500',
    bgGradient: 'from-indigo-50 to-blue-50'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Why Choose Us
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Trusted Mobile
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Tire Partner</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the convenience of professional tire and brake services delivered directly to your location with unmatched quality and reliability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Glass Card */}
              <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white/80">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who choose our mobile tire service for convenience, quality, and reliability.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
