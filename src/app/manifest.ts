import { MetadataRoute } from 'next'
import { seoData, author } from '@/lib/content/portfolio'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoData.title,
    short_name: author.name,
    description: seoData.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f97316',
    icons: [
      {
        src: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
