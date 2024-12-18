'use client';
import { Button } from '@/components/ui/button';

import { Car, Phone, RotateCw, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6 relative h-20">
            <Image
              src="/carContact.jpg"
              alt="Destiny Tire shop Service Van"
              width={800}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Mobile Tire Service at Your Location
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We bring professional tire and brake service directly to you. No
            need to visit a shop - we'll come to your home or office!
          </p>
        </div>

        <div className="grid gap-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Our Mobile Service?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Convenient service at your location</li>
              <li>Professional equipment on our service van</li>
              <li>Experienced mobile technicians</li>
              <li>Time-saving - no need to visit a shop</li>
              <li>Complete tire and brake solutions</li>
            </ul>
          </div>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Car className="mr-4 h-6 w-6 text-red-500" />
                  <div>
                    <h3 className="font-medium">Mobile Tire Service</h3>
                    <p className="text-gray-300">
                      Professional tire service at your location
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Wrench className="mr-4 h-6 w-6 text-red-500" />
                  <div>
                    <h3 className="font-medium">Brake and Rotor Changes</h3>
                    <p className="text-gray-300">
                      Complete brake service and maintenance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCw className="mr-4 h-6 w-6 text-red-500" />
                  <div>
                    <h3 className="font-medium">Rotate & Balance</h3>
                    <p className="text-gray-300">
                      Professional tire rotation and balancing
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-red-500" />
                  <div>
                    <h3 className="font-medium">Contact</h3>
                    <p className="text-gray-300">
                      <a
                        href="tel:240-779-5349"
                        className="hover:text-white transition-colors"
                      >
                        (240) 779-5349
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold mb-4">
            Need Emergency Tire Service?
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Don't stress about tire problems - we'll come to you! Our mobile
            service van is equipped with everything needed for professional tire
            and brake service.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700"
            onClick={() => (window.location.href = 'tel:240-779-5349')}
          >
            Call Now: (240) 779-5349
          </Button>
        </div>
      </div>
    </div>
  );
}
