

import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Code2 } from 'lucide-react';

const roles = ['Software Developer', 'AI Enthusiast', 'Full Stack Developer', 'Open Source Contributor'];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const role = roles[currentRole];

      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Enhanced Animated Background with Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) =>
          <div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#ff006e' : '#ffbe0b',
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}>
          </div>
        )}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-magenta-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animation: 'float 10s ease-in-out infinite 1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animation: 'float 12s ease-in-out infinite 2s' }}></div>

      {/* Animated Lines Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'moveGrid 20s linear infinite'
      }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Hi There 👋</span>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="neon-text">I am PRAKALYA S</span>
            </h1>
          </div>

          <div className="h-20">
            <p className="text-xl md:text-2xl font-semibold">
              <span className="neon-blue">{displayText}</span>
              <span className="ml-1 animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            I build cool software and love solving problems using technology. I enjoy learning new tools and creating things that help people.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-bold rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all duration-300">

              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-300 font-bold rounded-lg hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300">

              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-xl glassmorphism flex items-center justify-center hover:glow-border transition-all duration-300 text-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">

              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-xl glassmorphism flex items-center justify-center hover:glow-border transition-all duration-300 text-magenta-400 hover:text-magenta-300 hover:shadow-[0_0_20px_rgba(255,0,110,0.5)]">

              <Linkedin size={24} />
            </a>
            <a
              href="https://codolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-xl glassmorphism flex items-center justify-center hover:glow-border transition-all duration-300 text-yellow-400 hover:text-yellow-300 hover:shadow-[0_0_20px_rgba(255,190,11,0.5)]">

              <Code2 size={24} />
            </a>
          </div>


        </div>


      </div>


    </section>);

}
