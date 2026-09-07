import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection preview />
      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
