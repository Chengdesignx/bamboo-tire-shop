'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const services = [
  {
    title: 'Tire Change',
    description:
      'Professional tire change service at your location. Our experienced technicians will safely replace your tires with precision and care.',
    imageUrl: '/tirechange.jpg',
    videoUrl: '/v1.mp4',
    tags: [
      'On-site Service',
      'All Tire Types',
      'Quick Service',
      'Emergency Assistance',
    ],
    link: '/services',
  },
  {
    title: 'Tire Balancing',
    description:
      'Expert tire balancing service to ensure smooth rides and even tire wear. We use state-of-the-art equipment for precise balancing.',
    imageUrl: '/p1.jpg',
    videoUrl: '/v2.mp4',
    tags: [
      'Wheel Balancing',
      'Vibration Fix',
      'Extended Tire Life',
      'Better Handling',
    ],
    link: '/services',
  },
  {
    title: 'PSI Service',
    description:
      'Professional tire pressure service to maintain optimal PSI levels for safety and performance. We ensure your tires are properly inflated.',
    imageUrl: '/tirechange2.jpg',
    videoUrl: '/about.mp4',
    tags: [
      'Pressure Check',
      'TPMS Service',
      'Safety Check',
      'Inflation Service',
    ],
    link: '/services',
  },
  {
    title: 'Jump Start',
    description:
      'Quick and reliable jump start service when you need it most. Our professional team will get your vehicle running again safely.',
    imageUrl: '/tirechange.jpg',
    videoUrl: '/v1.mp4',
    tags: [
      'Battery Service',
      'Quick Response',
      '24/7 Available',
      'Safe Starting',
    ],
    link: '/services',
  },
  // {
  //   title: 'Gas Service',
  //   description:
  //     'Emergency fuel delivery service when you run out of gas. We\'ll bring the fuel you need directly to your location.',
  //   imageUrl: '/tireMachines.jpg',
  //   videoUrl: '/v2.mp4',
  //   tags: [
  //     'Fuel Delivery',
  //     'All Fuel Types',
  //     'Quick Response',
  //     'Any Location',
  //   ],
  //   link: '/services',
  // },
];

const ServiceSection = () => {
  const [modalVideo, setModalVideo] = useState<{
    src: string;
    poster: string;
  } | null>(null);

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
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
            Our Services
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Mobile
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Tire Services</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of mobile tire and brake services to keep your vehicle running safely and efficiently, delivered directly to your location.
          </p>
        </motion.div>
        {/* Services Grid */}
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="group relative mb-16 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Glass Card */}
            <div className="flex flex-col lg:flex-row items-center bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden">
              {/* Media Section */}
              <div className={`w-full lg:w-1/2 h-64 lg:h-80 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                {service.videoUrl ? (
                  <div className="w-full h-full relative group/video">
                    <video
                      className="w-full h-full object-cover"
                      poster={service.imageUrl}
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={service.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
                      <button
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={() =>
                          setModalVideo({
                            src: service.videoUrl,
                            poster: service.imageUrl,
                          })
                        }
                        aria-label="Play video"
                      >
                        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-4 hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className={`w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-6"></div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-gray-800 font-semibold mb-3">Service Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-orange-100/80 backdrop-blur-sm border border-orange-200/50 text-orange-700 text-sm px-4 py-2 rounded-full font-medium hover:bg-orange-200/80 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={service.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group/link"
                  >
                    View Service Details
                    <svg
                      className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Enhanced Video Modal */}
      {modalVideo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalVideo(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl mx-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300"
              onClick={() => setModalVideo(null)}
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              controls
              autoPlay
              playsInline
              className="w-full aspect-video object-contain bg-black rounded-3xl"
              poster={modalVideo.poster}
              preload="metadata"
            >
              <source src={modalVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ServiceSection;
