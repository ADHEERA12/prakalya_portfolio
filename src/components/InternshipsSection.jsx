import React from 'react';
import { Briefcase } from 'lucide-react';

const internships = [
{
  company: 'Ceeras',
  role: 'Python Developer Intern',
  duration: 'May 2026 - Present',
  description: 'Collaborating on a web application using Django and React, contributing to both frontend and backend development. Implemented user authentication, database models, and responsive UI components, enhancing user experience and application functionality.',
  certificate: '/cerificates/Ceeras.png'
},
{
  company: 'Cognifyz Technologies',
  role: 'Machine Learning Intern',
  duration: 'Jan 2026 - Feb 2026',
  description: 'Developed and optimized predictive models using Python, Scikit-learn, and Pandas. Focused on data preprocessing, feature engineering, and evaluating model performance to extract actionable insights from complex datasets.',
  certificate: '/cerificates/Cognifyz.png'
},
{
  company: 'Codtech IT Solutions',
  role: 'Java Developer Intern',
  duration: 'Feb 2025 - March 2025',
  description: 'Developed 5+ RESTful APIs using Spring Boot to implement core business logic. Applied SOLID principles and design patterns to refactor code, improving readability and significantly reducing technical debt.',
  certificate: '/cerificates/CodTech.png'
},
];

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
            className="group glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 hover:border-purple-500/50 transform hover:translate-x-1">
            
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:neon-pink transition-colors">
                      {internship.role}
                    </h3>
                    <span className="px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold w-fit">
                      {internship.duration}
                    </span>
                  </div>

                  <p className="text-lg text-purple-400 font-semibold">
                    {internship.company}
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    {internship.description}
                  </p>
                  {internship.certificate ? (
                    <a
                      href={internship.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-colors text-sm font-semibold"
                    >
                      View Certificate
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
