'use client';
import { navbarSection } from '@/lib/content/navbar';
import { author } from '@/lib/content/portfolio';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Link as CLink, NavButton } from '@/components';

import { fadeIn, slideIn } from '@/styles/animations';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const hideNavWhileScrolling = ({
  id = 'navbar',
  offset = 100,
  when = true,
}: {
  id?: string;
  offset?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id);
  if (!nav) return;

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    if (when) {
      const curScrollPos = window.pageYOffset;
      if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
      else nav.style.top = '0';
      prevScrollPos = curScrollPos;
    }
  };
};

type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  index: number;
  delay: number;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick, index, delay }: NavItemsProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.li
      className={`group ${isActive ? 'text-red-500' : ''}`}
      variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
      initial="hidden"
      animate="show"
    >
      <CLink
        href={href || `/#${children}`}
        className={`block p-2 duration-500 hover:text-accent ${
          isActive ? 'font-bold' : ''
        }`}
        onClick={onClick}
        withPadding
      >
        {children}
      </CLink>
    </motion.li>
  );
};

const Navbar = () => {
  const { navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  useEffect(() => {
    hideNavWhileScrolling({ when: !navbarCollapsed });
  }, [navbarCollapsed]);

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="fixed md:mb-10 inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 pt-4 duration-500 md:px-6 xl:px-12 backdrop-blur-sm"
    >
      {/* Changed title styling only */}
      <motion.h1
        className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Link href="/#hero" className="block">
          {author.name}
        </Link>
      </motion.h1>

      <NavButton
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav className="capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto">
          <ul className="flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
            {navLinks.map(({ name, url }, i) => (
              <NavItem
                key={i}
                href={url}
                index={i}
                delay={ANIMATION_DELAY}
                onClick={() => setNavbarCollapsed(false)}
              >
                {name}
              </NavItem>
            ))}
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
