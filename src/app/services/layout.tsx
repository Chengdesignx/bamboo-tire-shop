import { seoData } from '@/lib/content/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Tire & Brake Services in Maryland | Bamboo Tire Shop',
  description: 'Professional mobile tire change, brake repair, tire balancing, and PSI services in Maryland. 24/7 emergency service at your location. Licensed technicians, fast response.',
  keywords: 'mobile tire service Maryland, emergency tire change, brake repair, tire balancing, PSI service, roadside assistance',
  openGraph: {
    title: 'Mobile Tire & Brake Services in Maryland | Bamboo Tire Shop',
    description: 'Professional mobile tire change, brake repair, tire balancing, and PSI services in Maryland. 24/7 emergency service at your location.',
    url: `${seoData.url}/services`,
    images: [
      {
        url: `${seoData.url}/tirechange.jpg`,
        width: 1200,
        height: 630,
        alt: 'Mobile tire service in Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Tire & Brake Services in Maryland | Bamboo Tire Shop',
    description: 'Professional mobile tire change, brake repair, tire balancing, and PSI services in Maryland. 24/7 emergency service at your location.',
    images: [`${seoData.url}/tirechange.jpg`]
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
