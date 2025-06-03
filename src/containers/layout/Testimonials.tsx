'use client';

import { author } from '@/lib/content/portfolio';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  index: number;
}

function Testimonial({ name, role, content, rating, image, index }: TestimonialProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Glass Card */}
      <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white/80">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <Quote className="w-12 h-12 text-orange-500" />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
            >
              <Star
                className={`w-5 h-5 ${i < rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
                  }`}
              />
            </motion.div>
          ))}
          <span className="ml-2 text-sm font-medium text-gray-600">
            {rating}.0
          </span>
        </div>

        {/* Content */}
        <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg italic relative z-10">
          "{content}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center relative z-10">
          <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-orange-200/50 group-hover:ring-orange-300/70 transition-all duration-300">
            <Image
              src={image}
              alt={name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-700 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-gray-600 text-sm font-medium">{role}</p>
          </div>
        </div>

        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Vehicle Owner',
      content: `${author.name} saved my day! They came to my office parking lot and replaced my flat tire in under an hour. Professional, quick, and incredibly convenient service.`,
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
    },
    {
      name: 'Michael Chen',
      role: 'Business Fleet Manager',
      content:
        'Managing a fleet of delivery vehicles, I need reliable service. Bamboo Tire Shop has been our go-to mobile service provider. Their response time and quality of work are outstanding.',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
    },
    {
      name: 'David Thompson',
      role: 'Car Enthusiast',
      content:
        'The expertise of their technicians is impressive. They handled my performance brake upgrade with precision and care. Highly recommend their mobile service!',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
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
            Customer Reviews
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Say About Us</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who have experienced our exceptional mobile tire service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                5.0
              </div>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <p className="text-gray-600 font-medium">Service Available</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                30min
              </div>
              <p className="text-gray-600 font-medium">Average Response</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
