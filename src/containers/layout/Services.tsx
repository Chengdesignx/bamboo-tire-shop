'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const services = [
  {
    title: 'Brake Change',
    description:
      'Expert brake change service with premium-quality parts for your safety and confidence on every drive.',
    imageUrl: '/tireman.png',
    videoUrl: '/v2.mp4',
    tags: [
      'Brake Inspection',
      'Pad Replacement',
      'Rotor Replacement',
      'Fluid Top-up',
    ],
    link: '/services',
  },
  {
    title: 'Full Tire Service',
    description:
      'Comprehensive tire care including installation, rotation, and balancing for optimal performance and safety.',
    imageUrl: '/tireMachines.jpg',
    videoUrl: '/v1.mp4',
    tags: [
      'Tire Installation',
      'Tire Rotation',
      'Tire Balancing',
      'Pressure Check',
    ],
    link: '/services',
  },
  {
    title: 'Tire Sales',
    description:
      'Wide range of high-quality tires for all vehicle types. We help you find the perfect match for your needs.',
    imageUrl: '/shop3.jpg',
    videoUrl: '',
    tags: ['All Brands', 'All Sizes', 'Expert Advice', 'Affordable Prices'],
    link: '/services',
  },
  {
    title: 'Tire Change',
    description:
      'Quick and hassle-free tire change services, ensuring precision and quality for a seamless experience.',
    imageUrl: '/tirechange.jpg',
    videoUrl: '/v1.mp4',
    tags: [
      'On-site Service',
      'Fast Replacement',
      'Wheel Alignment',
      'Valve Check',
    ],
    link: '/services',
  },
  {
    title: 'Tire Repair',
    description:
      'Extend the life of your tires with expert repair services. We restore your tires to peak condition for safe travels.',
    imageUrl: '/shop.jpg',
    videoUrl: '',
    tags: ['Puncture Repair', 'Leak Fix', 'Tread Inspection', 'Patch & Plug'],
    link: '/services',
  },
];

const ServiceSection = () => {
  const [modalVideo, setModalVideo] = useState<{
    src: string;
    poster: string;
  } | null>(null);

  return (
    <section id="services" className="py-20 bg-[#FFF9F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of mobile tire and brake services to
            keep your vehicle running safely and efficiently.
          </p>
        </div>
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Media Section (Image or Video) */}
            <div className="w-full md:w-1/2 h-64 md:h-80 relative">
              {service.videoUrl ? (
                <div
                  className="w-full h-full cursor-pointer"
                  onClick={() =>
                    setModalVideo({
                      src: service.videoUrl,
                      poster: service.imageUrl,
                    })
                  }
                >
                  <video
                    className="w-full h-full object-cover pointer-events-none"
                    poster={service.imageUrl}
                  >
                    <source src={service.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <svg
                      className="w-16 h-16 text-white opacity-80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
                    </svg>
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
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <div className="w-12 h-1 bg-orange-300 rounded mb-4" />
              <div className="mb-3 text-gray-700 font-medium">
                Service Features
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={service.link}
                className="text-orange-500 font-semibold hover:underline flex items-center gap-1 text-sm"
              >
                View Service Details
                <svg
                  className="w-4 h-4 ml-1"
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
            </div>
          </motion.div>
        ))}
      </div>
      {/* Video Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-3xl h-1/2 bg-black rounded-2xl flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10"
              onClick={() => setModalVideo(null)}
              aria-label="Close video"
            >
              &times;
            </button>
            <video
              controls
              autoPlay
              className="w-full h-full object-contain rounded-2xl bg-black"
              poster={modalVideo.poster}
            >
              <source src={modalVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
