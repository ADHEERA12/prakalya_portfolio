

import React, { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Internships', href: '#internships' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }];


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'glassmorphism' : 'bg-transparent'}`
    }>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" aria-label="PRAKALYA S home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#ff66b3]">PRAKALYA S</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group">
              
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors">
            
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen &&
        <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}>
            
                {link.name} 
              </a>
          )}
          </div>
        }
      </div>
    </nav>);

}
