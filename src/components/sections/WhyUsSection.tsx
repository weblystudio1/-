import { motion } from 'framer-motion';
import { Award, Compass, HeartHandshake, Wrench, Settings2, ShieldCheck } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'ותק ומקצועיות ללא פשרות', desc: 'שנים רבות של עשייה ופיתוח פתרונות מתקדמים בחזית התעשייה.' },
  { icon: Compass, title: 'חומרים מובחרים בלבד', desc: 'ייבוא ועבודה עם פרופילי אלומיניום ופרזול מהרמה הגבוהה ביותר.' },
  { icon: HeartHandshake, title: 'שירות אישי ומסור', desc: 'ליווי רצוף ומענה מהיר לאורך כל התהליך לשקט הבריאותי שלכם.' },
  { icon: Wrench, title: 'ביצוע והרכבה מדויקת', desc: 'התקנות בשטח ע"י מומחים קפדניים השומרים על ניקיון ורמת גימור מושלמת.' },
  { icon: ShieldCheck, title: 'ביטחון ואחריות מלאה', desc: 'ראש שקט עם אחריות רחבה וממושכת עבור העבודות והמערכות השונות.' },
  { icon: Settings2, title: 'מוצרים בהזמנה אישית', desc: 'יכולת התאמה ותכנון יצירתי לכל פרויקט, חלום או שרטוט של אדריכל.' }
];

export function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 relative bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col md:items-center md:text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-widest text-sm mb-3 block">החתימה המקצועית</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white mb-6">מה הופך אותנו לבחירה הנכונה עבורכם?</h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              עבודה איתנו מקנה לכם ביטחון ושקט נפשי מתחילת הדרך. השילוב המושלם בין מומחיות הנדסית, חומרי פרימיום ועבודת ידיים יצירתית מבטיח מוצרי פאר עמידים ויציבים לאורך זמן.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass border border-white/5 p-6 rounded-none transition-all gold-glow-hover group"
              >
                <Icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-heading font-medium text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
