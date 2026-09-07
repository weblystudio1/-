import React from 'react';
import { motion } from 'motion/react';
import { Accessibility, CheckCircle2 } from 'lucide-react';

export function AccessibilityPage() {
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
              <Accessibility className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">התאמת נגישות האתר</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">פתח דבר</h2>
              <p>
                אנו במ.ס אלומיניום מקפידים על מתן הזדמנות שווה וחווית לקוח אופטימלית לכל משתמש, לרבות אנשים בעלי מוגבלות. אנו פועלים מתוך תפיסה כי מרחב הרשת חייב להיות פתוח ומותאם לכולם לשם חוויית שימוש ראויה ומכבדת.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">עמידה בתקני ההנגשה</h2>
              <p>
                מערכת האתר תואמת את התיקונים והתקנות של חוק שוויון זכויות לאנשים עם מוגבלות. התאמות אלו הוטמעו בהתאם להנחיות התקן הישראלי ת"י 5568 ברמת הנגישות AA, וכן להנחיות ה-WCAG 2.0 העולמיות.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">רשימת השיפורים וההתאמות</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'אפשרות מלאה לניווט בעזרת המקלדת',
                  'שינוי בהגדרות ניגודיות הגוונים',
                  'שינוי גודל הפונטים ללא עיוות התצוגה',
                  'סימון והדגשת קישורים לנראות מיטבית',
                  'התאמה מלאה למערכות קוראות מסך',
                  'מבנה היגיון תקני של תגיות וכותרות',
                  'הגדרת תיאור תמונה קולי (Alt tag)',
                  'השתקת אלמנטים דינמיים מהבהבים'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">משוב ודיווח על תקלות</h2>
              <p>
                נוכח דינמיות התוכן אנו שואפים להתמיד בהנגשה, אך יתכן ותגלו אזורים הזקוקים לשיפור. אם מצאתם כשל או שיש לכם רעיון לייעול, נשמח לעמוד לרשותכם.
              </p>
              <div className="glass p-6 border border-white/10 space-y-2">
                <p><strong>אחראי הנגשת תוכן:</strong> מ.ס אלומיניום</p>
                <p><strong>ליצירת קשר טלפוני:</strong> 052-322-1560</p>
                <p><strong>כתובת מייל:</strong> weblystudio1@gmail.com</p>
              </div>
            </section>

            <p className="text-sm pt-8 border-t border-white/10 italic">
              עודכן לאחרונה: יוני 2026
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
