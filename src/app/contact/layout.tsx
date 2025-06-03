import { seoData, author } from '@/lib/content/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Bamboo Tire Shop | Mobile Tire Service Maryland | Call (240) 501-4795',
  description: `Contact Bamboo Tire Shop for mobile tire and brake services in Maryland. Call ${author.phone} for 24/7 emergency tire service, brake repair, and roadside assistance. Serving Greenbelt and surrounding areas.`,
  keywords: 'contact Bamboo Tire Shop, mobile tire service Maryland, emergency tire service phone number, tire repair contact, brake service Maryland',
  openGraph: {
    title: 'Contact Bamboo Tire Shop | Mobile Tire Service Maryland | Call (240) 501-4795',
    description: `Contact Bamboo Tire Shop for mobile tire and brake services in Maryland. Call ${author.phone} for 24/7 emergency tire service, brake repair, and roadside assistance.`,
    url: `${seoData.url}/contact`,
    images: [
      {
        url: `${seoData.url}/carContact.jpg`,
        width: 1200,
        height: 630,
        alt: 'Contact Bamboo Tire Shop for mobile tire service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Bamboo Tire Shop | Mobile Tire Service Maryland | Call (240) 501-4795',
    description: `Contact Bamboo Tire Shop for mobile tire and brake services in Maryland. Call ${author.phone} for 24/7 emergency service.`,
    images: [`${seoData.url}/carContact.jpg`]
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
