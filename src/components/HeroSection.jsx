import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Code2 } from 'lucide-react';

export default function HeroSection() {
  const roles = [
    'Software Developer',
    'Java Backend Engineer',
    'Machine Learning Engineer (Junior)',
    'AI Integration Engineer',
    'AWS Cloud Developer',
    'API Developer'
  ];

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
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden text-white">

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="py-12 md:py-20 lg:py-28 px-4 lg:px-0">
          <p className="text-2xl md:text-3xl text-gray-300 font-medium">Hi There <span aria-hidden>👋</span></p>
          <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ff66b3]">PRAKALYA S</span>
          </h1>

          <p className="mt-4 text-xl text-[#b983ff] font-semibold">{displayText}<span className="ml-1 animate-pulse">|</span></p>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">I build cool software and love solving problems using technology. I enjoy learning new tools and creating things that help people.</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#ff6eb4] text-white rounded-lg shadow-lg hover:opacity-95">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center px-6 py-3 border-2 border-[#ff66b3]/60 text-[#ff66b3] rounded-lg hover:bg-white/5">Get In Touch</a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/ADHEERA12" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-slate-900/40 flex items-center justify-center text-cyan-400 hover:text-cyan-300">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/prakalya2006/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-slate-900/40 flex items-center justify-center text-pink-400 hover:text-pink-300">
              <Linkedin size={18} />
            </a>
            <a href="https://codolio.com/profile/aheera" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-slate-900/40 flex items-center justify-center text-yellow-400 hover:text-yellow-300">
              <Code2 size={18} />
            </a>
          </div>
        </div>

        {/* Right - use provided sideimage.png from public folder */}
        <div className="flex justify-center lg:justify-end px-4 lg:px-0">
          <img src="/sideimage.png" alt="Side illustration" className="w-full max-w-[620px] object-contain" />
        </div>
      </div>
    </section>
  );
}
