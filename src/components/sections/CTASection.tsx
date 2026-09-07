import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-primary px-4">
      {/* Decorative */}
      <div className="absolute inset-0 bg-primary-dark/40" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto relative z-10 glass-dark border border-gold/40 rounded-none p-8 md:p-16 text-center max-w-5xl"
      >
        <span className="text-gold font-medium tracking-widest text-sm mb-4 block">יוצרים שינוי עיצובי יוצא דופן</span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
          מעוניינים לשדרג את מרחב המגורים<br className="hidden md:block" /> עם עבודות אלומיניום ברמת גימור מובחרת?
        </h2>
        <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          צוות המקצוענים שלנו זמין לתכנן ולהוציא לפועל את מבוקשכם. צרו איתנו קשר עוד היום לתיאום פגישת אפיון ותכנון ללא התחייבות.
        </p>

        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center gap-3 bg-gold text-white font-bold px-8 py-4 rounded-none transition-all duration-300 shadow-lg hover:-translate-y-[2px]"
        >
          <span>מלאו פרטים לקבלת הצעה אטרקטיבית</span>
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}
