import { motion } from 'framer-motion';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CTASection } from '@/components/sections/CTASection';

export function ProjectsPage() {
  return (
    <>
      <ProjectsSection preview={false} />

      <CTASection />
    </>
  );
}
