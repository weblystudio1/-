import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="pt-24 pb-12 md:py-24 bg-primary-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-gold font-medium tracking-widest text-sm mb-4 block">הסיפור שלנו</span>
            
            {/* Google Rating Badge */}
            <div className="flex items-center justify-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-2 w-fit mx-auto rounded-none">
              <span className="text-white font-bold text-sm">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-gold text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300 text-xs font-medium">18 המלצות מאומתות בגוגל • מומחי אלומיניום בארץ</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-8 leading-tight text-center">
              השותפים המקצועיים לכל עבודת אלומיניום
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto text-center">
              חברת מ.ס אלומיניום מובילה את תחום העיצוב, הייצור וההקמה של מערכות אלומיניום מתקדמות, פתרונות הצללה וסגירות מרפסת מעוצבות. אנו חורטים על דגלנו רמת דיוק עילאית, יחס אישי ותוצאה סופית מרהיבה עבור לקוחותינו באשקלון ובפריסה ארצית.
            </p>
            
            <ul className="space-y-5 mb-10 inline-block text-right">
              {[
                'הבנה הנדסית ומקצועיות טכנולוגית עמוקה',
                'בחירה בחומרי גלם מובחרים ובלתי מתפשרים',
                'ייעוץ וליווי צמוד מהשרטוט הראשוני ועד המסירה',
                'התחייבות מלאה ועמידה מדויקת בזמנים'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white text-lg md:text-xl font-medium">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
