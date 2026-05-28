import React from 'react';


export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center lg:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 rounded-2xl glow-border overflow-hidden">
                <img
                  src="/profile-image.png"
                  alt="Professional profile image"
                  className="object-cover w-full h-full block"
                />
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
             I am a Full-Stack Developer and ML Enthusiast specializing in the intersection of scalable architecture and Machine Learning. Currently pursuing a B.Tech in AI & Data Science, I build high-performance applications using Java Spring Boot, React.js, and AWS. My foundation is built on algorithmic optimization, with over 300+ DSA problems solved, and a commitment to writing clean, modular code using SOLID principles.

              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
              Beyond core development, I focus on engineering "smart" solutions by integrating Generative AI and LLMs into production-ready backends. By leveraging the AWS ecosystem—including EKS, Lambda, and S3—I ensure these intelligent systems are cloud-native, resilient, and capable of scaling to meet modern demands. My goal is to deliver seamless, end-to-end products that turn complex data into actionable insights.
                
              </p>

              <div className="pt-4">
                <p className="font-semibold mb-4 neon-text">Interested in collaborating on innovative projects? Let's connect!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
