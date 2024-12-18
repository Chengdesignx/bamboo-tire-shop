import { Clock, MapPin, Shield } from 'lucide-react';
import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
            <p className="text-gray-600">
              Available whenever you need us, day or night
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile Service</h3>
            <p className="text-gray-600">We come to your location</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Professional service with quality parts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
