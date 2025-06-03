import { MetadataRoute } from 'next'
import { seoData } from '@/lib/content/portfolio'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/_next/'],
    },
    sitemap: `${seoData.url}/sitemap.xml`,
  }
}
