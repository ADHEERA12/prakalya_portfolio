

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
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-lg font-bold neon-text hidden sm:inline">Developer</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group">
              
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
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
            className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}>
            
                {link.name}
              </a>
          )}
          </div>
        }
      </div>
    </nav>);

}
