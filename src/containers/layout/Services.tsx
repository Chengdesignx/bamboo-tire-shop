'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    title: 'Brake Change',
    description:
      'Your safety is our priority. Our expert brake change service ensures precise installation using premium-quality parts, giving you confidence on every drive.',
    imageUrl: '/tireman.png',
  },
  // {
  //   title: 'Rotor Change',
  //   description:
  //     'Keep your vehicle running smoothly with our efficient rotor change services. We focus on durability and performance to enhance your driving experience.',
  //   imageUrl: '/carTireOut.jpg',
  // },
  {
    title: 'Full Tire Service',
    description:
      'Experience comprehensive tire care, including installation, rotation, and balancing. We help you maintain optimal performance and safety for every journey.',
    imageUrl: '/tireMachines.jpg',
  },
  {
    title: 'Tire Sales',
    description:
      'Explore our wide range of high-quality tires suitable for all vehicle types. Our team will help you find the perfect match for your driving needs.',
    imageUrl: '/tires.jpg',
  },
  {
    title: 'Tire Change',
    description:
      'Enjoy quick and hassle-free tire change services tailored to your schedule. We ensure precision and quality for a seamless replacement experience.',
    imageUrl: '/tirechange.jpg',
  },
  {
    title: 'Tire Repair',
    description:
      'Extend the life of your tires with our expert repair services. From punctures to minor damage, we restore your tires to peak condition for safe travels.',
    imageUrl: '/carscreen.jpg',
  },
];

const ServiceSection = () => {
  return (
    <section id="#services" className="py-16 mx-auto  bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex  justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Quality Services</h2>
          <a
            href="services"
            className="text-primary font-semibold hover:underline"
          >
            VIEW ALL →
          </a>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image with hover zoom effect */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                  priority
                />
              </div>
              {/* Content with animated opacity */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-red-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 transition-opacity duration-300 group-hover:opacity-75">
                  {service.description}
                </p>
              </div>
              {/* Decorative underline that appears on hover */}
              <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
