import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ToolsSection from '@/components/ToolsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import InternshipsSection from '@/components/InternshipsSection';
import AchievementsSection from '@/components/AchievementsSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      
      {/* Main Content Sections */}
      <HeroSection />
      
      {/* Divider Section */}
      <div className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>
      </div>

      <AboutSection />

      <div className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </div>
      </div>

      <SkillsSection />
      <ToolsSection />

      <div className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
        </div>
      </div>

      <ProjectsSection />

      <div className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        </div>
      </div>

      <ResumeSection />
      <InternshipsSection />
      <AchievementsSection />

      <div className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </main>);

}
