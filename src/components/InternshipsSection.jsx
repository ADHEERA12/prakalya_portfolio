import React from 'react';
import { Briefcase } from 'lucide-react';

const internships = [
{
  company: 'Tech Startup Inc',
  role: 'Software Developer Intern',
  duration: '3 Months',
  description: 'Worked on real world software projects and learned industry development practices. Contributed to building features for web application.'
},
{
  company: 'Digital Solutions LLC',
  role: 'Full Stack Developer Intern',
  duration: '4 Months',
  description: 'Developed and maintained client-side and server-side features. Collaborated with the team on database optimization and API development.'
},
{
  company: 'Innovation Labs',
  role: 'AI/ML Engineering Intern',
  duration: '3 Months',
  description: 'Worked on machine learning models and data processing pipelines. Implemented automation solutions that improved efficiency.'
}];


export default function InternshipsSection() {
  return (
    <section id="internships" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="neon-text">Internship Experience</span>
        </h2>

        <div className="space-y-8">
          {internships.map((internship, index) =>
          <div
            key={index}
            className="group glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_20px_rgba(251,65,218,0.3)] transition-all duration-300 hover:border-pink-500/50 transform hover:translate-x-1">
            
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(251,65,218,0.4)] transition-all duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:neon-pink transition-colors">
                      {internship.role}
                    </h3>
                    <span className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold w-fit">
                      {internship.duration}
                    </span>
                  </div>

                  <p className="text-lg text-blue-400 font-semibold">
                    {internship.company}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {internship.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
