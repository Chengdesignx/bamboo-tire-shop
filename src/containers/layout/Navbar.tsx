'use client';

import { navbarSection } from '@/lib/content/navbar';
import { author } from '@/lib/content/portfolio';

import { Link as CLink } from '@/components';

import { fadeIn } from '@/styles/animations';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavItem = ({ href, children, onClick }: NavItemsProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <CLink
        href={href || `/#${children}`}
        onClick={onClick}
        className={`text-sm font-medium px-3 py-2 hover:text-orange-400 transition-colors duration-200 ${
          isActive ? 'text-orange-400' : 'text-neutral-700'
        }`}
      >
        {children}
      </CLink>
    </li>
  );
};

const Navbar = () => {
  const { navLinks } = navbarSection;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between mx-auto max-w-7xl px-6 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/20 shadow-lg"
    >
      <Link href="/#hero" className="text-lg font-semibold text-neutral-800">
        {author.name}
      </Link>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-neutral-800 md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-6">
          {navLinks.map(({ name, url }, i) => (
            <NavItem key={i} href={url}>
              {name}
            </NavItem>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 right-6 w-48 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4"
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map(({ name, url }, i) => (
              <NavItem key={i} href={url} onClick={() => setIsMenuOpen(false)}>
                {name}
              </NavItem>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
