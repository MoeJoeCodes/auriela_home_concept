'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rugs', href: '/rugs' },
    { name: 'Curtains', href: '/curtains' },
    { name: 'Chandeliers', href: '/chandeliers' },
    { name: 'Furniture', href: '/furniture' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="font-playfair text-2xl tracking-widest text-charcoal flex-shrink-0 text-center md:text-left flex-1 md:flex-none">
          AURELIA HOME
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-montserrat text-xs tracking-widest uppercase transition-colors hover:text-gold ${pathname === link.href ? 'text-charcoal border-b border-charcoal pb-1' : 'text-charcoal/80'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/cart" className="relative text-charcoal hover:text-gold transition-colors block">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-charcoal text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-montserrat">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-cream z-50 flex flex-col px-6 py-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="font-playfair text-2xl tracking-widest text-charcoal">
              AURELIA HOME
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-charcoal hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 font-montserrat text-lg tracking-widest uppercase text-charcoal">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-gold transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
