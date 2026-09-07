import React from 'react';
import { motion } from 'motion/react';
import { FileText, AlertCircle, Info } from 'lucide-react';

export function TermsPage() {
  return (
    <main className="pt-32 pb-20 bg-primary-dark min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark p-8 md:p-12 border border-gold/20"
          dir="rtl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">הסכם תנאי גלישה ושימוש</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">1. קבלת התנאים ומחויבות</h2>
              <p>
                המעבר והכניסה לאתר מ.ס אלומיניום (להלן: "האתר") כפופים לכללים המוזכרים להלן. ביקור בדפי האתר ובחירת שירותיו מבטאים את אישורכם המלא והבלתי מסויג לסעיפים אלה. במידה ואינכם מסכימים להנחיות, עליכם להפסיק את הגלישה מיד.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">2. זכויות יוצרים וקניין</h2>
              <p>
                כל הנכסים הדיגיטליים המפורסמים באתר, לרבות חומרים מילוליים, תצלומים, סימני מסחר, מוטיבים עיצוביים ואמנות גרפית, הינם קניינה המובהק של חברת מ.ס אלומיניום ומוגנים בחוקי זכויות יוצרים מקומיים ובינלאומיים. כל העתקה, שעתוק, הפצה או שימוש מסחרי בהם אסורים ללא סמכות בכתב מאתנו.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">3. הגבלת יעדי השימוש</h2>
              <p>
                חווית השימוש מיועדת למטרות אינפורמטיביות ולא-מסחריות של המשתמש הקצה. הנכם מתחייב להימנע מפעילויות פוגעניות או שליחת תוכנות זדוניות לשרתי ומערכות האתר. נטילת מידע מהאתר לצרכים מסחריים מקבילים או מתחרים אסורה לחלוטין.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">4. הגבלת אחריות</h2>
              <p>
                החברה משקיעה מאמצים כנים לוודא כי המידע והפרטים יהיו ללא רבב. יחד עם זאת, התכנים מוצגים במתכונתם הנוכחית (AS-IS) ואין לראות בהם התחייבות חוזית למעט הזמנות פורמליות בכתב. השימוש בתכנים הינו באחריותכם הפרטית.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">5. הפניות לאתרי צד שלישי</h2>
              <p>
                האתר עשוי להפנות לאתרי אינטרנט של חברות אחרות שאינן בשליטתנו. החברה אינה מותחת חסות, בוחנת או אחראית לתנאים, לחוקים או לאמינות האתרים המקושרים.
              </p>
            </section>

            <div className="bg-gold/5 p-6 border border-gold/20 rounded-xl flex items-start gap-4">
              <Info className="w-6 h-6 text-gold shrink-0 mt-1" />
              <p className="text-sm">
                הנהלת האתר זכאית לשנות או להתאים את ניסוח סעיפים אלו לפי שיקול דעתה ומבלי למסור על כך הודעה. אנו ממליצים לבחון מסמך זה מפעם לפעם.
              </p>
            </div>

            <p className="text-sm pt-8 border-t border-white/10 italic">
              עודכן לאחרונה: יוני 2026
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
