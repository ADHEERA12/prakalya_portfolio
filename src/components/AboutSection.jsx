import React from 'react';


export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center lg:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 rounded-2xl glow-border overflow-hidden">
                <img
                  src="/profile-image.jpg"
                  alt="Professional profile image"
                  fill
                  className="object-cover w-full h-full"
                  priority />
                
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="neon-text">Let Me Introduce Myself</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a software developer who enjoys building applications and learning new technologies. I like turning ideas into real products and exploring new tools in software development.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy working on projects, experimenting with new technologies, and improving my coding skills every day. My passion lies in creating elegant solutions to complex problems and building meaningful applications that make a difference.
              </p>

              <div className="pt-4">
                <p className="text-blue-400 font-semibold mb-4">Interested in collaborating on innovative projects? Let's connect!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
