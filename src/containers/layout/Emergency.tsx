import { Phone } from 'lucide-react';
import React from 'react';

export default function Emergency() {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
          <p className="text-xl mb-8">
            We're available 24/7 for all your tire and brake needs
          </p>
          <a
            href="tel:671116769"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-500 hover:bg-red-600 animate-bounce"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call 671116769
          </a>
        </div>
      </div>
    </div>
  );
}
