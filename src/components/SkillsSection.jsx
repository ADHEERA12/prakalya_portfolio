import React from 'react';
import { Code2, GitBranch, Server, Monitor, Database, Cloud, Cpu } from 'lucide-react';

const categories = [
  {
    title: 'Programming languages',
    icon: Code2,
    tags: ['Java', 'Python', 'C++', 'SQL']
  },
  {
    title: 'Backend technologies',
    icon: Server,
    tags: ['Spring Boot', 'Django']
  },
  {
    title: 'Frontend development',
    icon: Monitor,
    tags: ['Html', 'React.js', 'Bootstrap']
  },
  {
    title: 'Databases',
    icon: Database,
    tags: ['MySQL', 'PostgreSQL']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    tags: ['AWS IAM', 'EC2', 'S3', 'Lambda', 'DynamoDB', 'SNS', 'Amazon EKS', 'GitHub Actions', 'Git / GitHub']
  },
  {
    title: 'ML, DL & libraries',
    icon: Cpu,
    tags: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib']
  }
];

function Tag({ children }) {
  return (
    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-purple-400/30">{children}</span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="neon-text">Skills & Tools</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="glassmorphism glow-border rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold">
                    {Icon ? <Icon className="w-5 h-5 text-white" /> : null}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                </div>

                <div className="mt-2">
                  {cat.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
