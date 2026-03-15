import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
{
  id: 1,
  title: 'AI Chat Application',
  description: 'Intelligent chatbot powered by machine learning algorithms. Real-time messaging with natural language processing capabilities.',
  tags: ['Python', 'React', 'AI/ML'],
  github: '#',
  demo: '#'
},
{
  id: 2,
  title: 'Full Stack E-Commerce',
  description: 'Complete e-commerce platform with payment integration, user authentication, and real-time inventory management.',
  tags: ['React', 'Node.js', 'MongoDB'],
  github: '#',
  demo: '#'
},
{
  id: 3,
  title: 'Data Visualization Dashboard',
  description: 'Interactive dashboard for analyzing large datasets with real-time updates and custom visualization options.',
  tags: ['React', 'D3.js', 'TypeScript'],
  github: '#',
  demo: '#'
},
{
  id: 4,
  title: 'Cloud Infrastructure Tool',
  description: 'DevOps tool for managing cloud resources with automated deployment and monitoring capabilities.',
  tags: ['AWS', 'Docker', 'Kubernetes'],
  github: '#',
  demo: '#'
},
{
  id: 5,
  title: 'Mobile Weather App',
  description: 'Cross-platform mobile application providing real-time weather updates with location-based forecasting.',
  tags: ['React Native', 'Firebase'],
  github: '#',
  demo: '#'
},
{
  id: 6,
  title: 'Blockchain Smart Contracts',
  description: 'Decentralized finance smart contracts with security audits and comprehensive testing framework.',
  tags: ['Solidity', 'Web3.js', 'Ethereum'],
  github: '#',
  demo: '#'
}];


export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="neon-text">My Recent Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) =>
          <div
            key={project.id}
            className="group glassmorphism glow-border rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(251,65,218,0.4)] transition-all duration-300 hover:border-pink-500/50 transform hover:scale-105">
            
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                <div className="text-5xl">📦</div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:neon-pink transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  
                      {tag}
                    </span>
                )}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                  
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                  href={project.demo}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_15px_rgba(251,65,218,0.3)] transition-all duration-300">
                  
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
