// /components/Testimonials.js

import { author } from '@/lib/content/portfolio';

import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

function Testimonial({ name, role, content, rating, image }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6">{content}</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
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
        'Managing a fleet of delivery vehicles, I need reliable service. Destiny Tire shop has been our go-to mobile service provider. Their response time and quality of work are outstanding.',
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
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
