import React from 'react';

const tools = [
{ name: 'VS Code', icon: '💻' },
{ name: 'Postman', icon: '🚀' },
{ name: 'Git', icon: '🔀' },
{ name: 'Chrome', icon: '🌐' },
{ name: 'Linux', icon: '🐧' },
{ name: 'Docker', icon: '🐳' }];


export default function ToolsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="neon-text">Tools I Use</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) =>
          <div
            key={tool.name}
            className="group relative">
            
              <div className="glassmorphism glow-border rounded-lg p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-[0_0_20px_rgba(85,252,119,0.4)] transition-all duration-300 transform hover:scale-110 hover:border-green-400/50"
            style={{
              animation: `float 4s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`
            }}>
              
                <span className="text-4xl">{tool.icon}</span>
                <p className="text-sm font-semibold text-center text-white group-hover:text-green-400 transition-colors">
                  {tool.name}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
