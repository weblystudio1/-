import { motion } from 'framer-motion';
import { PhoneCall, FileSearch, Ruler, Factory, Hammer } from 'lucide-react';

const steps = [
  { icon: PhoneCall, title: 'יצירת קשר ראשונית', desc: 'שיחת אפיון קצרה בה אנו ממפים את דרישות המבנה והרצונות העיצוביים שלכם.' },
  { icon: FileSearch, title: 'תכנון וגיבוש קונספט', desc: 'תכנון מקיף מול האדריכל או הלקוח לבחירת הפרופיל והצבע המתאימים ביותר.' },
  { icon: Ruler, title: 'מדידה מקצועית בשטח', desc: 'מדידת מרחק ולייזר בשטח כדי להבטיח התאמה מלאה ולמנוע כשלים בהמשך.' },
  { icon: Factory, title: 'ייצור קפדני במפעל', desc: 'תהליך ייצור מבוקר בסדנה שלנו המבטיח דיוק מילימטרי ואיכות עבודה גבוהה.' },
  { icon: Hammer, title: 'הרכבה וגמר בשטח', desc: 'התקנה איכותית ונקייה בבית הלקוח על ידי צוות מנוסה עד לקבלת מפתח.' }
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium tracking-widest text-sm mb-3 block">תהליך העבודה שלנו</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white mb-6">משלב היצירה ועד לתוצאה המוגמרת</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rotate-45 glass border border-gold/40 flex items-center justify-center mb-8 sm:mb-10 relative group-hover:border-gold transition-colors duration-500 gold-glow hover:scale-105 mx-auto mt-4">
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-none bg-gold text-white font-bold flex items-center justify-center -rotate-45 shadow-lg text-sm sm:text-base">
                      {index + 1}
                    </div>
                    <div className="-rotate-45">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold block" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 sm:mb-3 group-hover:text-gold transition-colors">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
