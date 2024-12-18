import { Car, Check,Clock, Shield, Wrench } from 'lucide-react';
import React from 'react';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/tirechange.jpg')", // Add your image
            backgroundPosition: "center 75%"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  Professional mobile tire and brake services at your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tire Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <Car className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Tire Installation',
                'Climatisation',
                'Electric system',
                'Battery service',
                'Engine Diagnostics'
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brake Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Wrench className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Brake Services</h3>
            <ul className="space-y-3">
              {[
                'Brake Pad Replacement',
                'Brake Rotor Service',
                'Brake Fluid Exchange',
                'Brake System Inspection',
                'Emergency Brake Repair'
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Emergency Services</h3>
            <ul className="space-y-3">
              {[
                '24/7 Mobile Service',
                'Roadside Assistance',
                'Emergency Tire Change',
                'Emergency Brake Repair',
                'Quick Response Time'
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">See Our Service in Action</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Watch how our skilled technicians provide professional mobile tire and brake services right at your location
            </p>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <video 
                
                playsInline
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                controls
                // poster="/manontesla.jpg"
              >
                <source src="/v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Our Mobile Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Availability",
                description: "Emergency service available round the clock"
              },
              {
                icon: <Car className="w-8 h-8" />,
                title: "Mobile Service",
                description: "We come to your location"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Licensed & Insured",
                description: "Professional and certified service"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Quality Parts",
                description: "Only the best parts and equipment"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 text-red-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}