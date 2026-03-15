import React from 'react';
import { Github, Linkedin, Instagram, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-blue-500/20 bg-gradient-to-t from-blue-600/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-lg font-bold neon-text">Developer</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future with code, creativity, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((link) =>
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                
                  {link}
                </a>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {[
              { icon: Github, name: 'GitHub' },
              { icon: Linkedin, name: 'LinkedIn' },
              { icon: Code2, name: 'Codolio' },
              { icon: Instagram, name: 'Instagram' }].
              map(({ icon: Icon, name }) =>
              <a
                key={name}
                href="#"
                className="w-10 h-10 rounded-lg glassmorphism flex items-center justify-center hover:glow-border transition-all duration-300 text-gray-400 hover:text-blue-400"
                title={name}>
                
                  <Icon size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Your Name. All rights reserved. | Built with React, Next.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>);

}
