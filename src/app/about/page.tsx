import { Award, Clock, Truck, Wrench } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="bg-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div
          className="text-center mb-16 bg-cover bg-center py-24 rounded-lg shadow-lg relative"
          style={{ backgroundImage: "url('/tireStore.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">About Destiny Tire shop</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted mobile tire and brake service provider in Maryland, bringing professional auto care directly to your location.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <Image 
              src="/tiremachines.jpg" 
              alt="Destiny Tire shop Service Van"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              width={800}
              height={600}
            />
            <Image 
              src="/p1.jpg" 
              alt="Mobile Service in Action"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              width={800}
              height={600}
            />
          </div>
          <div className="space-y-8">
            <Image 
              src="/carscreen.jpg" 
              alt="Tire Balancing Service"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              width={800}
              height={600}
            />
            <video
              src="v1.mp4"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>

        {/* Company Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <Truck className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile Service</h3>
            <p className="text-gray-600">Fully-equipped service van bringing professional auto care to your location</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <Wrench className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Equipment</h3>
            <p className="text-gray-600">State-of-the-art tools and machinery for precise service delivery</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <Clock className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Round-the-clock service for all your tire and brake emergencies</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <Award className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Service</h3>
            <p className="text-gray-600">Certified technicians delivering professional and reliable service</p>
          </div>
        </div>

        {/* Company Description */}
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to Excellence</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Destiny Tire shop is a premier mobile tire and brake service provider serving Maryland and surrounding areas. Our state-of-the-art mobile service van is equipped with the latest tools and technology to provide comprehensive tire and brake services at your convenience.
            </p>
            <p>
              We understand that tire and brake issues can occur at any time, which is why we offer 24/7 emergency services. Our team of certified technicians brings years of experience and expertise directly to your location, whether you're at home, work, or stranded on the road.
            </p>
            <p>
              From tire installations and rotations to brake pad replacements and rotor services, we handle it all with professional precision. Our mobile service eliminates the hassle of visiting a traditional shop, saving you valuable time while delivering the same high-quality service you expect.
            </p>
            <p>
              At Destiny Tire shop, we pride ourselves on our commitment to customer satisfaction, transparent pricing, and reliable service. When you choose us, you're choosing a team that puts your safety and convenience first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
