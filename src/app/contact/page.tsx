import { Clock, MapPin, MessageSquare,Phone } from 'lucide-react';
import React from 'react';
import { author } from '@/lib/content/portfolio';

export default function ContactUs() {
  const whatsappNumber = author.phone.replace(/\D/g, ''); // Remove any special characters from phone number
  const whatsappMessage = "Hello! I need assistance with tire or brake service.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need mobile tire or brake service? We're here to help 24/7. Contact us for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Available 24/7 for emergencies</p>
            <a 
              href={`tel:${author.phone}`} 
              className="text-lg font-semibold text-red-600 hover:text-red-700"
            >
              {author.phone}
            </a>
          </div>

          {/* WhatsApp Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Chat with us instantly</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Message on WhatsApp
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Service Area</h3>
            <p className="text-gray-600 mb-4">Mobile service throughout Maryland</p>
            <p className="text-gray-700">
              We come to your location for all tire and brake services
            </p>
          </div>
        </div>

        {/* Service Hours */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-lg mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Service Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Sunday</span>
                  <span className="text-gray-600">8:00 AM - 10:00 PM</span>
                </div>
                
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-red-600 mr-2" />
                  <h3 className="text-lg font-semibold">24/7 Emergency Service</h3>
                </div>
                <p className="text-gray-700">
                  Available round the clock for urgent tire and brake emergencies. Call our emergency line for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.2693744423036!2d-76.94724212536362!3d38.82629125089872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7bdeeefe730c1:0x46e12861dc376e58!2s4534+St+Barnabas+Rd%2C+Marlow+Heights%2C+MD+20748%2C+USA!5e0!3m2!1sen!2scm!4v1732198240363!5m2!1sen!2scm"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}