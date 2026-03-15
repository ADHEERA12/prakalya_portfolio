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
            <div className="glassmorphism glow-border rounded-xl p-8 text-center space-y-6 h-full flex flex-col justify-center hover:shadow-[0_0_30px_rgba(85,252,119,0.3)] transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Download CV</h3>
                <p className="text-gray-400 text-sm mb-4">Get my complete resume in PDF format</p>
              </div>
              <a
                href="#"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(85,252,119,0.4)] transition-all duration-300">
                
                Download CV
              </a>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <div className="glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_20px_rgba(47,70,250,0.3)] transition-all duration-300">
              <h3 className="text-2xl font-bold neon-blue mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-500 pl-6 pb-6">
                  <p className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-400 mb-2">University Name</p>
                  <p className="text-sm text-gray-500">2020 - 2024</p>
                  <p className="text-gray-300 mt-3">
                    Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning, Database Management
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_20px_rgba(251,65,218,0.3)] transition-all duration-300">
              <h3 className="text-2xl font-bold neon-pink mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-pink-500 pl-6 pb-6">
                  <p className="text-xl font-semibold text-white">Senior Developer</p>
                  <p className="text-gray-400 mb-2">Tech Company Name</p>
                  <p className="text-sm text-gray-500">2023 - Present</p>
                  <p className="text-gray-300 mt-3">
                    Led development of key features, mentored junior developers, and improved application performance by 40%
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Highlights */}
            <div className="glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_20px_rgba(85,252,119,0.3)] transition-all duration-300">
              <h3 className="text-2xl font-bold neon-green mb-6">Key Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Full Stack Development', 'UI/UX Design', 'Cloud Architecture', 'DevOps', 'Team Leadership', 'Problem Solving'].map((skill) =>
                <div key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
