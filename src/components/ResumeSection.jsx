import React from 'react';
import { Download } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="neon-text">My Resume</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Download Resume Card */}
          <div className="lg:col-span-1">
            <div className="glassmorphism glow-border rounded-xl p-8 text-center space-y-6 h-full flex flex-col justify-center hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Download CV</h3>
                <p className="text-gray-400 text-sm mb-4">Get my complete resume in PDF format</p>
              </div>
              <a
                href="/resume.pdf"
                download
                aria-label="Download resume PDF"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300">
                Download CV
              </a>
            </div>
          </div>

         

           
          </div>
        </div>
    
    </section>);

}
