'use client';

import { author } from '@/lib/content/portfolio';
import { Car, Check, Clock, Shield, Wrench, RotateCw, Phone, Star, Zap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import CustomVideoPlayer from '@/components/ui/CustomVideoPlayer';

const services = [
  {
    title: 'Tire Change',
    description:
      'Professional tire change service at your location. Our experienced technicians will safely replace your tires with precision and care.',
    features: [
      'On-site tire replacement',
      'All tire sizes and types',
      'Professional equipment',
      'Quick service',
      'Emergency assistance',
    ],
    videoUrl: '/v1.mp4',
    imageUrl: '/tirechange.jpg',
    icon: <Car className="w-8 h-8 text-red-600" />,
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
  },
  {
    title: 'Tire Balancing',
    description:
      'Expert tire balancing service to ensure smooth rides and even tire wear. We use state-of-the-art equipment for precise balancing.',
    features: [
      'Wheel balancing',
      'Vibration elimination',
      'Extended tire life',
      'Improved handling',
      'Better fuel efficiency',
    ],
    videoUrl: '/v2.mp4',
    imageUrl: '/p1.jpg',
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    title: 'PSI Service',
    description:
      'Professional tire pressure service to maintain optimal PSI levels for safety and performance. We ensure your tires are properly inflated.',
    features: [
      'Pressure check',
      'Inflation service',
      'TPMS diagnosis',
      'Pressure monitoring',
      'Safety inspection',
    ],
    videoUrl: '/about.mp4',
    imageUrl: '/tirechange2.jpg',
    icon: <Car className="w-8 h-8 text-red-600" />,
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
  },
  {
    title: 'Jump Start',
    description:
      'Quick and reliable jump start service when you need it most. Our professional team will get your vehicle running again safely.',
    features: [
      'Emergency response',
      'Safe jump starting',
      'Battery testing',
      '24/7 availability',
      'Professional equipment',
    ],
    videoUrl: '/about.mp4',
    imageUrl: '/brakechange.jpg',
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-600',
  },
  {
    title: 'Gas Service',
    description:
      'Emergency fuel delivery service when you run out of gas. We\'ll bring the fuel you need directly to your location.',
    features: [
      'Fuel delivery',
      'Multiple fuel types',
      'Quick response',
      'Any location',
      'Emergency assistance',
    ],
    videoUrl: '/v1.mp4',
    imageUrl: '/carscreen.jpg',
    icon: <Phone className="w-8 h-8 text-purple-600" />,
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
];

const features = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Availability',
    description: 'Emergency service available round the clock',
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Mobile Service',
    description: 'We come to your location',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Licensed & Insured',
    description: 'Professional and certified service',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Quality Parts',
    description: 'Only the best parts and equipment',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[700px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-32 pb-12"
        style={{ backgroundImage: "url('/tirechange.jpg')" }}
      >
        {/* Enhanced Gradient + Blur Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90 backdrop-blur-sm"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full backdrop-blur-xl border border-orange-400/30"
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
          className="absolute bottom-32 right-16 w-16 h-16 bg-white/10 rounded-full backdrop-blur-xl border border-white/20"
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

        {/* Main Content */}
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
              <Star className="w-4 h-4 mr-2 fill-current" />
              Professional Mobile Services
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
                  {author.name}
                </span>
                <br />
                <span className="text-2xl md:text-4xl font-light text-gray-300">
                  Professional Services
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl font-light text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Professional mobile tire and brake services at your convenience. Available 24/7 for all your vehicle needs.
                <span className="text-orange-300 font-medium"> Expert service, anywhere you are!</span>
              </motion.p>

              {/* Quick Stats */}
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
                  <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Mobile Service</p>
                  <p className="text-gray-400 text-sm">We Come to You</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                  <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Licensed & Insured</p>
                  <p className="text-gray-400 text-sm">Professional Service</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
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
              Our Services
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Mobile
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Auto Care</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional tire and brake services delivered directly to your location with state-of-the-art equipment and expert technicians.
            </p>
          </motion.div>

          {/* Services Grid */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative mb-20 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Enhanced Glass Card with Balanced Proportions - Mobile Optimized */}
              <div className="flex flex-col lg:flex-row bg-white/95 backdrop-blur-2xl border border-white/50 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500 group-hover:scale-[1.01] overflow-hidden">
                {/* Content Section - Mobile Optimized */}
                <div className={`w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="h-full flex flex-col justify-center space-y-6"
                  >
                    {/* Enhanced Icon - Better Proportioned */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl shadow-lg shadow-orange-500/25 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-orange-500/35 transition-all duration-300">
                      {React.cloneElement(service.icon, { className: "w-7 h-7 text-white" })}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-700 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                      {service.description}
                    </p>

                    {/* Enhanced Features List - Mobile Optimized */}
                    <div className="space-y-3 sm:space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center group/feature"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        >
                          <div className="bg-gradient-to-r from-orange-100 to-orange-50 backdrop-blur-sm border border-orange-200/60 rounded-full p-1.5 sm:p-2 mr-3 sm:mr-4 group-hover/feature:scale-110 group-hover/feature:shadow-lg group-hover/feature:shadow-orange-200/50 transition-all duration-300 flex-shrink-0">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>


                  </motion.div>
                </div>

                {/* Enhanced Media Section - Mobile Optimized */}
                <div className={`w-full lg:w-1/2 relative p-4 sm:p-6 lg:p-8 flex items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative w-full aspect-[4/3] max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/20 group-hover:shadow-3xl group-hover:shadow-black/30 transition-all duration-500">
                    {service.videoUrl ? (
                      <CustomVideoPlayer
                        src={service.videoUrl}
                        poster={service.imageUrl}
                        className="w-full h-full"
                      />
                    ) : (
                      <>
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                        {/* Enhanced Gradient Overlay - Only for Images */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl"></div>
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
              Why Choose Our
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Mobile Service?</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring professional tire and brake services directly to you, saving you time and ensuring convenience without compromising on quality.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Enhanced Glass Card with Better Spacing */}
                <div className="relative h-full bg-white/95 backdrop-blur-2xl border border-white/50 rounded-2xl p-8 lg:p-10 shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500 group-hover:scale-[1.03] text-center min-h-[280px] flex flex-col justify-center">
                  {/* Enhanced Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl shadow-xl shadow-orange-500/30 mb-6 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-orange-500/40 transition-all duration-300 mx-auto">
                    {React.cloneElement(item.icon, { className: "w-8 h-8 text-white" })}
                  </div>

                  {/* Enhanced Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-medium">
                    {item.description}
                  </p>

                  {/* Enhanced Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 to-yellow-50/70 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white/95 backdrop-blur-2xl border border-white/50 rounded-3xl p-10 lg:p-12 max-w-4xl mx-auto shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Ready for Professional Service?
              </h3>
              <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Contact us today for fast, reliable mobile tire and brake service at your location.
              </p>
              <a
                href={`tel:${author.phone}`}
                className="inline-flex items-center px-8 lg:px-10 py-3 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-base lg:text-lg font-medium hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 mr-3" />
                Call {author.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
