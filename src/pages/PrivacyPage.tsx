import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Mail } from 'lucide-react';

export function PrivacyPage() {
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
              <Shield className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">מדיניות הגנת הפרטיות</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">1. תמצית מדיניות</h2>
              <p>
                מ.ס אלומיניום (להלן: "החברה") שמה דגש רב על שמירה על פרטיות לקוחותיה ומבקריה ברשת. מסמך זה מציג את הכללים והקווים המנחים לפיהם מעובד ונשמר המידע המועבר לרשותנו.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">2. אופן צבירת הנתונים</h2>
              <p>
                החברה עשויה לאסוף פרטים אישיים המועברים ביוזמתכם בעת שליחת הודעה או מילוי טופס פנייה (לרבות שם, מספר נייד ואימייל) לצרכי יצירת קשר בלבד. כמו כן, מועברים נתונים סטטיסטיים בלתי מזהים לצורך אופטימיזציה של תפעול האתר.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">3. מטרת ההחזקה במידע</h2>
              <p>
                עיבוד הנתונים שיימסרו לנו יבוצע בכפוף למסמך פרטיות זה ועל פי הוראות חוק הגנת הפרטיות, למען היעדים הבאים:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>מענה טלפוני או דיגיטלי לפנייתכם.</li>
                <li>ייעול ושיפור חווית המשתמש וממשק הגלישה במובייל ובדסקטופ.</li>
                <li>מתן מענה מקצועי, ליווי הפרויקט ושימור השירות.</li>
                <li>עדכון והעברת תכנים פרסומיים רלוונטיים (בכפוף להרשאה מוקדמת מראש).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">4. שימוש בקבצי קוקיז</h2>
              <p>
                לשם שיפור שיעורי טעינה וגלישה נוחה, האתר נעזר בקבצי עוגיות (Cookies), המאפשרים התאמה אישית של התוכן, אימות כניסה ואיסוף בלתי מסווג של סטטיסטיקות תעבורה.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gold">5. מנגנון האבטחה</h2>
              <p>
                אנו מיישמים פתרונות תקופתיים קפדניים של אבטחה וכלי הצפנה לצורך מזעור חדירה בלתי מורשית למסדי הנתונים, אך איננו יכולים להתחייב להגנה קטגורית ומוחלטת.
              </p>
            </section>

            <div className="glass p-6 border border-white/10 rounded-xl flex items-center gap-4">
              <Mail className="w-6 h-6 text-gold shrink-0" />
              <div>
                <p className="font-bold text-white">נתקלתם בשאלות כלשהן?</p>
                <p>שלחו לנו הודעה ישירה לכתובת: weblystudio1@gmail.com</p>
              </div>
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
