'use client';

import { author } from '@/lib/content/portfolio';
import { Award, Clock, Truck, Wrench, Star, Users, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-orange-50" id="about">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[700px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-32 pb-12"
        style={{ backgroundImage: "url('/tireStore.jpg')" }}
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
              About Our Company
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
                  About {author.name}
                </span>
                <br />
                <span className="text-2xl md:text-4xl font-light text-gray-300">
                  Your Mobile Tire Experts
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl font-light text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Your trusted mobile tire and brake service provider in Maryland, bringing professional auto care directly to your location.
                <span className="text-orange-300 font-medium"> Excellence delivered wherever you are!</span>
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg">1000+ Customers</p>
                  <p className="text-gray-300 text-sm">Served</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Shield className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg">Licensed & Insured</p>
                  <p className="text-gray-300 text-sm">Professional Service</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Zap className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg">Fast Response</p>
                  <p className="text-gray-300 text-sm">30min Average</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Enhanced Image Gallery */}
        <section className="relative mb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/15 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
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
                Our Work
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                See Our
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Mobile Service</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional mobile tire and brake services delivered with state-of-the-art equipment and expert technicians.
              </p>
            </motion.div>

            {/* Enhanced Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <motion.div
                  className="group relative overflow-hidden bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/tirechange2.jpg"
                      alt={`${author.name} Service Van`}
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Mobile Service Van</h3>
                        <p className="text-sm text-gray-200">Fully equipped for on-site service</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/shop3.jpg"
                      alt={`${author.name} Mobile Service in Action`}
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Service in Action</h3>
                        <p className="text-sm text-gray-200">Professional tire installation</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div
                  className="group relative overflow-hidden bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02]"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/shop.jpg"
                      alt="Tire Balancing Service"
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Tire Balancing</h3>
                        <p className="text-sm text-gray-200">Precision equipment for perfect balance</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative overflow-hidden bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500 hover:scale-[1.02]"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <video
                      src="/about.mp4"
                      className="w-full h-[300px] object-cover"
                      controls
                      preload="metadata"
                      playsInline
                      poster="/shop3.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Service Overview</h3>
                        <p className="text-sm text-gray-200">Watch our mobile service in action</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Company Features */}
        <section className="relative mb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
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
                Our Features
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Makes Us
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Different</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional mobile tire and brake services with cutting-edge equipment and certified technicians.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Truck,
                  title: "Mobile Service",
                  description: "Fully-equipped service van bringing professional auto care to your location",
                  gradient: "from-blue-400 to-blue-600"
                },
                {
                  icon: Wrench,
                  title: "Expert Equipment",
                  description: "State-of-the-art tools and machinery for precise service delivery",
                  gradient: "from-green-400 to-green-600"
                },
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  description: "Round-the-clock service for all your tire and brake emergencies",
                  gradient: "from-orange-400 to-orange-600"
                },
                {
                  icon: Award,
                  title: "Quality Service",
                  description: "Certified technicians delivering professional and reliable service",
                  gradient: "from-purple-400 to-purple-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Enhanced Glass Card */}
                  <div className="relative h-full bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl p-10 shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500 group-hover:scale-105 text-center">
                    {/* Enhanced Icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl shadow-xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Enhanced Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-medium">
                      {feature.description}
                    </p>

                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Company Description */}
        <motion.section
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl p-12 md:p-16 shadow-2xl shadow-black/10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100/80 backdrop-blur-sm border border-orange-200/50 text-orange-700 text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our Story
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Commitment to
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Excellence</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
              <motion.div
                className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200/50 rounded-2xl p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-700">
                  <span className="font-bold text-orange-700">{author.name}</span> is a premier mobile tire and brake service provider
                  serving Maryland and surrounding areas. Our state-of-the-art
                  mobile service van is equipped with the latest tools and
                  technology to provide comprehensive tire and brake services at
                  your convenience.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-gray-700">
                  We understand that tire and brake issues can occur at any time,
                  which is why we offer <span className="font-bold text-blue-700">24/7 emergency services</span>. Our team of
                  certified technicians brings years of experience and expertise
                  directly to your location, whether you're at home, work, or
                  stranded on the road.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-2xl p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-gray-700">
                  From tire installations and rotations to brake pad replacements
                  and rotor services, we handle it all with <span className="font-bold text-green-700">professional precision</span>.
                  Our mobile service eliminates the hassle of visiting a traditional
                  shop, saving you valuable time while delivering the same
                  high-quality service you expect.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 rounded-2xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <p className="text-gray-700">
                  At <span className="font-bold text-purple-700">{author.name}</span>, we pride ourselves on our commitment to customer
                  satisfaction, transparent pricing, and reliable service. When you
                  choose us, you're choosing a team that puts your <span className="font-bold text-purple-700">safety and
                    convenience first</span>.
                </p>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Experience Professional Mobile Service?
                </h3>
                <p className="text-orange-100 mb-6 text-lg">
                  Contact us today for fast, reliable mobile tire and brake service at your location.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
