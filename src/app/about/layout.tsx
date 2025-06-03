import { seoData } from '@/lib/content/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bamboo Tire Shop | Professional Mobile Tire Service in Maryland',
  description: 'Learn about Bamboo Tire Shop, Maryland\'s trusted mobile tire and brake service provider. Professional technicians, 24/7 emergency service, and quality workmanship since our founding.',
  keywords: 'about Bamboo Tire Shop, mobile tire service Maryland, professional tire technicians, emergency tire service, Maryland auto repair',
  openGraph: {
    title: 'About Bamboo Tire Shop | Professional Mobile Tire Service in Maryland',
    description: 'Learn about Bamboo Tire Shop, Maryland\'s trusted mobile tire and brake service provider. Professional technicians, 24/7 emergency service, and quality workmanship.',
    url: `${seoData.url}/about`,
    images: [
      {
        url: `${seoData.url}/about.jpg`,
        width: 1200,
        height: 630,
        alt: 'About Bamboo Tire Shop - Professional mobile tire service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bamboo Tire Shop | Professional Mobile Tire Service in Maryland',
    description: 'Learn about Bamboo Tire Shop, Maryland\'s trusted mobile tire and brake service provider. Professional technicians, 24/7 emergency service.',
    images: [`${seoData.url}/about.jpg`]
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
