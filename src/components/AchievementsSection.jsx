import React from 'react';
import { Award, Trophy, Star, GitBranch } from 'lucide-react';

const achievements = [
  {
    title: 'Contest Winner',
    description: 'Secured 2nd Prize in "Bit Banther" for analytical reasoning and 3rd Prize in "AI Art Binnacle" for Generative AI prompt engineering.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Industry Certifications',
    description: 'AWS Certified Cloud Practitioner, IBM Java Developer, and Microsoft AI & ML Engineering Specialist.',
    icon: Award,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Technical Cohorts',
    description: 'Participant in Infosys Pragati: Path to Future (Cohort 7) and the AWS Skill Builder program.',
    icon: Star,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Coding Consistency',
    description: 'Solved 300+ DSA problems on LeetCode and GeeksforGeeks; earned the 100 Days Consistency Badge in Leetcode.',
    icon: GitBranch,
    color: 'from-green-500 to-emerald-500'
  }];


export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="neon-text">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="group glassmorphism glow-border rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(251,65,218,0.3)] transition-all duration-300 hover:border-pink-500/50 transform hover:scale-105">

                {/* Header with Icon */}
                <div className={`bg-gradient-to-r ${achievement.color} p-1`}>
                  <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 p-6 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(251,65,218,0.5)] transition-all duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:neon-pink transition-colors">
                      {achievement.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
