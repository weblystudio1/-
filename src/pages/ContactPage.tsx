import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mykvbzbw', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError('אירעה שגיאה בשליחת הטופס. אנא נסו שוב.');
      }
    } catch (err) {
      setError('אירעה שגיאה בשליחת הטופס. אנא נסו שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="pt-28 md:pt-32 pb-20 bg-primary-dark relative overflow-hidden min-h-screen flex items-center">
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            נתחיל לתכנן את המוצר הבא שלכם
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-300 px-4"
          >
            מלאו את פרטיכם וניצור עמכם קשר בהקדם לתיאום פגישה מקצועית.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 glass-dark border border-white/10 rounded-none shadow-2xl">
          
          {/* Contact Info (Right side in RTL) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-primary/20 p-10 md:p-12 border-l border-white/10 relative overflow-hidden"
          >
            
            <h3 className="text-3xl font-heading font-bold text-white mb-8">דרכי התקשרות</h3>
            
            <div className="space-y-10 relative z-10">
              <a href="tel:0523221560" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">נייד זמין</p>
                  <p className="text-xl font-medium text-white tracking-wider" dir="ltr">052-322-1560</p>
                </div>
              </a>
              
              <a href="mailto:weblystudio1@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">כתובת אימייל</p>
                  <p className="text-lg font-medium text-white break-all">weblystudio1@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">מיקום הסדנה והמשרדים</p>
                  <p className="text-lg font-medium text-white">שביל חודשי השנה 2, אשקלון, 7872684</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">שעות מענה ופעילות</p>
                  <div className="text-sm font-medium text-white space-y-1">
                    <p>ראשון - חמישי: 08:00 – 21:00</p>
                    <p>יום שישי: 08:00 – 16:00</p>
                    <p>יום שבת: סגור</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="https://wa.me/972523221560" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-white/5 border border-gold text-gold hover:bg-gold hover:text-white font-bold text-lg px-6 py-4 transition-all duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>צ’אט מהיר בוואטסאפ</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 p-8 md:p-12 relative z-10"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8">השאירו הודעה ונציגנו יחזור</h3>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-gold/10 border border-gold/30 p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]"
                >
                  <CheckCircle className="w-16 h-16 text-gold" />
                  <h4 className="text-2xl font-bold text-white">פנייתכם נשלחה!</h4>
                  <p className="text-gray-300">הפרטים שלכם הגיעו אלינו. נציג מטעמנו ייצור אתכם קשר טלפוני בקרוב.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-gold hover:text-white transition-colors underline underline-offset-4"
                  >
                    חזרה לטופס
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 text-sm">
                      משהו השתבש במהלך השליחה. אנא נסו להזין שנית.
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-100">שם הלקוח</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-primary transition-all"
                        placeholder="ישראל ישראלי"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-100">נייד זמין</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        dir="ltr"
                        className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-primary transition-all text-right"
                        placeholder="052-322-1560"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-100">כתובת פרויקט / עיר</label>
                    <input 
                      type="text" 
                      name="city"
                      className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-primary transition-all"
                      placeholder="אשקלון, תל אביב וכד'"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-100">שירות מבוקש</label>
                    <select name="work_type" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold focus:bg-primary transition-all appearance-none cursor-pointer">
                      <option value="" className="bg-primary-dark">אנא בחרו קטגוריה...</option>
                      <option value="pergola" className="bg-primary-dark">פרגולת אלומיניום מעוצבת</option>
                      <option value="windows" className="bg-primary-dark">חלונות אלומיניום חדשים</option>
                      <option value="blinds" className="bg-primary-dark">שלבים ותריסים חשמליים</option>
                      <option value="other" className="bg-primary-dark">ארכיטקטורה מותאמת אישית</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-100">פירוט נוסף (לא חובה)</label>
                    <textarea 
                      name="message"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-primary transition-all resize-none"
                      placeholder="שתפו אותנו בקווים כלליים על התוכניות שלכם..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-2 w-full bg-gold text-white font-bold text-lg rounded-none px-4 py-5 transition-all duration-300 shadow-lg hover:-translate-y-[2px] disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    <span>{isSubmitting ? 'מעבד...' : 'שליחת הפניה'}</span>
                    {!isSubmitting && <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
