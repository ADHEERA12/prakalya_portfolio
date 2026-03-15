import React from 'react';

const skills = [
'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
'C++', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'Next.js',
'Tailwind CSS', 'Solidity', 'GraphQL', 'AWS'];


export default function SkillsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="neon-text">Professional Skillset</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) =>
          <div
            key={skill}
            className="group glassmorphism glow-border rounded-lg p-4 flex items-center justify-center cursor-pointer hover:shadow-[0_0_20px_rgba(251,65,218,0.3)] transition-all duration-300 transform hover:scale-105"
            style={{
              animationDelay: `${index * 0.05}s`
            }}>
            
              <span className="text-center font-semibold text-white group-hover:neon-pink transition-colors">
                {skill}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}
