import { author } from '@/lib/content/portfolio';
import { Car, Check, Clock, Shield, Wrench } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

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
    imageUrl: '/tireMachines.jpg',
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
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
    videoUrl: '/v1.mp4',
    imageUrl: '/tirechange.jpg',
    icon: <Car className="w-8 h-8 text-red-600" />,
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
    videoUrl: '/v2.mp4',
    imageUrl: '/tireMachines.jpg',
    icon: <Car className="w-8 h-8 text-red-600" />,
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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/tirechange.jpg')",
            backgroundPosition: 'center 75%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50">
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-white animate-fade-in">
                <h1 className="text-5xl font-bold mb-6">
                  {author.name} Services
                </h1>
                <p className="text-xl max-w-2xl mx-auto">
                  Professional mobile tire and brake services at your
                  convenience. Available 24/7 for all your vehicle needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="mb-24 last:mb-0 animate-fade-in-up"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                {service.videoUrl ? (
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster={service.imageUrl}
                  >
                    <source src={service.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Why Choose Us Section */}
        <div className="mt-32">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Mobile Service?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We bring professional tire and brake services directly to you,
              saving you time and ensuring convenience without compromising on
              quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow animate-fade-in-up"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 text-red-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
