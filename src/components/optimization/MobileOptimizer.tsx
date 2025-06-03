'use client';

import { useEffect } from 'react';
import useMobile from '@/lib/hooks/use-mobile';

const MobileOptimizer = () => {
  const { isMobile, isTouchDevice } = useMobile();

  useEffect(() => {
    // Optimize for mobile devices
    if (isMobile || isTouchDevice) {
      // Disable hover effects on touch devices
      document.documentElement.classList.add('touch-device');
      
      // Add mobile-specific optimizations
      const style = document.createElement('style');
      style.textContent = `
        /* Disable hover effects on touch devices */
        .touch-device *:hover {
          -webkit-transform: none !important;
          transform: none !important;
        }
        
        /* Optimize animations for mobile */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Improve mobile scrolling */
        body {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }
        
        /* Optimize touch interactions */
        button, a, [role="button"] {
          touch-action: manipulation;
          -webkit-user-select: none;
          user-select: none;
        }
        
        /* Prevent zoom on form inputs */
        input, textarea, select {
          font-size: 16px !important;
        }
        
        /* Optimize video for mobile */
        video {
          object-fit: cover;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
        document.documentElement.classList.remove('touch-device');
      };
    }
  }, [isMobile, isTouchDevice]);

  useEffect(() => {
    // Preload critical resources for mobile
    if (isMobile) {
      const preloadLinks = [
        { href: '/shop3.jpg', as: 'image' },
        { href: '/v1.mp4', as: 'video' },
        { href: '/v2.mp4', as: 'video' },
      ];

      preloadLinks.forEach(({ href, as }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (as === 'video') {
          link.setAttribute('crossorigin', 'anonymous');
        }
        document.head.appendChild(link);
      });
    }
  }, [isMobile]);

  return null; // This component doesn't render anything
};

export default MobileOptimizer;
