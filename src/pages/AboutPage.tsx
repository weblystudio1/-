import { motion } from 'framer-motion';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CTASection } from '@/components/sections/CTASection';

export function AboutPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-20 bg-primary-dark relative overflow-hidden">
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold font-medium tracking-widest text-sm mb-4 block text-center md:text-right">החזון שמאחורי המפעל</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 text-center md:text-right">להוביל בעיצוב ויצירת איכות באלומיניום</h1>
              <div className="space-y-6 text-lg text-gray-100 leading-relaxed text-right">
                <p>
                  החברה נוסדה במטרה להתוות אמות מידה חדשות ומוקפדות לעולם עבודות האלומיניום בארץ. הסינרגיה בין אמנות מתקדמת, טכנולוגיה עדכנית, ויחס מסור וממוקד-לקוח, מעניקה למאות לקוחותינו איכות מגורים יוצאת דופן.
                </p>
                <p>
                  תחום ההתמחות המרכזי שלנו הוא פיתוח פתרונות קירוי, מפתחים וזגגות לבנייני יוקרה, בתים פרטיים ומבני מסחר רחבי היקף. לאורך שנות פעילותינו, פיתחנו כלים הנדסיים מנוסים לפתרון דרישות קונסטרוקטיביות מורכבות תוך עמידה בתווי הבטיחות הקפדניים ביותר.
                </p>
                <p className="text-white font-medium pr-6 border-r-2 border-gold pt-2 pb-2">
                  "אנו מאמינים כי אמינות ושלמות נמדדות בבחירת חומרי הגלם, בקרת הייצור הממושכת ובדקדקנות הבלתי מתפשרת ברגע ההרכבה בשטח."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <CTASection />
    </>
  );
}
