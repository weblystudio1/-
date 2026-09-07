import { motion } from 'framer-motion';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import { useEffect } from 'react';

export function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="bg-primary-dark pt-16 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
            >
              סל פתרונות האלומיניום
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-400 font-light"
            >
              אנו מייצרים ומיישמים מגוון עשיר של פתרונות אלומיניום חדשניים, המעמידים רף חדש של הנדסה, קו נקי ואיכות עמידה ביותר.
            </motion.p>
          </div>
        </div>
      </div>

      <ServicesSection />
      <CTASection />
    </motion.div>
  );
}
