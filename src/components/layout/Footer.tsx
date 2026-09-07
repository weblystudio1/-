import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, MapPin, ChevronLeft } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-primary-dark pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16 text-sm md:text-base">
          {/* Brand */}
          <div className="space-y-4 md:space-y-6 col-span-1">
            <Link to="/" className="flex items-center group inline-flex">
              <img 
                src="https://res.cloudinary.com/dzyx5ablm/image/upload/v1788786068/Untitled_1_mhx6l4_wgxoxi.png" 
                alt="מ.ס אלומיניום" 
                className="h-8 sm:h-9 md:h-10 w-auto max-w-[180px] sm:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
              מ.ס אלומיניום מתמחה בפתרונות אלומיניום מתקדמים, פרגולות וסגירת מרפסות באשקלון והסביבה.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61570391716388&locale=he_IL" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-none border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all gold-glow-hover">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-6">
            <h4 className="font-heading text-base md:text-lg font-medium text-white">ניווט</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: 'ראשי', path: '/' },
                { name: 'אודות החברה', path: '/about' },
                { name: 'גלריית פרויקטים', path: '/projects' },
                { name: 'יצירת קשר', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 group">
                    <ChevronLeft className="w-3 h-3 text-gold/0 group-hover:text-gold transition-all -ml-1 group-hover:ml-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 md:space-y-6 col-span-2 lg:col-span-1">
            <h4 className="font-heading text-base md:text-lg font-medium text-white">יצירת קשר</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="tel:0523221560" className="flex items-start gap-2.5 md:gap-3 text-gray-400 hover:text-gold transition-colors group">
                  <div className="mt-0.5 md:mt-1 w-6 h-6 md:w-8 md:h-8 rounded-none border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    <Phone className="w-2.5 h-2.5 md:w-3 md:h-3 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 mb-0.5 md:mb-1">טלפון ישיר</p>
                    <p className="font-medium text-xs md:text-sm" dir="ltr">052-322-1560</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:weblystudio1@gmail.com" className="flex items-start gap-2.5 md:gap-3 text-gray-400 hover:text-gold transition-colors group">
                  <div className="mt-0.5 md:mt-1 w-6 h-6 md:w-8 md:h-8 rounded-none border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    <Mail className="w-2.5 h-2.5 md:w-3 md:h-3 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 mb-0.5 md:mb-1">אימייל חברה</p>
                    <p className="font-medium text-xs md:text-sm">weblystudio1@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5 md:gap-3 text-gray-400">
                <div className="mt-0.5 md:mt-1 w-6 h-6 md:w-8 md:h-8 rounded-none border border-gold/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-500 mb-0.5 md:mb-1">משרדי החברה</p>
                  <p className="font-medium text-xs md:text-sm">שביל חודשי השנה 2, אשקלון, 7872684</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} מ.ס אלומיניום. כל הזכויות שמורות.
          </p>
          <div className="flex gap-4 md:gap-6 text-gray-500">
            <Link to="/terms" className="hover:text-gold transition-colors">תקנון אתר</Link>
            <Link to="/privacy" className="hover:text-gold transition-colors">מדיניות פרטיות</Link>
            <Link to="/accessibility" className="hover:text-gold transition-colors">הצהרת נגישות</Link>
            <button 
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-accessibility'));
              }}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              הגדרות נגישות
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
