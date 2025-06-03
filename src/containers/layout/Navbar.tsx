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
        className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 group ${isActive
          ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg'
          : 'text-gray-700 hover:text-orange-500 hover:bg-white/20'
          }`}
      >
        {children}
        {!isActive && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        )}
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
      className="fixed inset-x-0 top-4 sm:top-8 z-50 mx-auto max-w-6xl px-4 sm:px-6"
    >
      <div className="flex items-center justify-between bg-white/80 backdrop-blur-2xl border border-white/30 rounded-2xl px-6 py-4 shadow-xl shadow-black/5">
        {/* Logo */}
        <Link
          href="/#hero"
          className="group flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="hidden sm:block">{author.name}</span>
        </Link>

        {/* Mobile Menu Button - Enhanced Touch Target */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:text-orange-500 hover:bg-white/70 transition-all duration-300 focus:outline-none active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="w-6 h-6 flex flex-col justify-center items-center"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="w-6 h-0.5 bg-current block transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
            />
          </motion.div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-2">
            {navLinks.map(({ name, url }, i) => (
              <NavItem key={i} href={url}>
                {name}
              </NavItem>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Dropdown - Enhanced for Mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl shadow-black/10 p-3"
          >
            <ul className="flex flex-col space-y-1">
              {navLinks.map(({ name, url }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.1 }}
                >
                  <CLink
                    href={url}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex w-full text-left px-5 py-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50/50 rounded-xl transition-all duration-200 font-medium text-lg min-h-[48px] items-center active:scale-95"
                  >
                    {name}
                  </CLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
