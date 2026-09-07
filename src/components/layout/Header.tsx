import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'ראשי', path: '/' },
  { name: 'אודות', path: '/about' },
  { name: 'פרויקטים', path: '/projects' },
  { name: 'צור קשר', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHeaderScrolled = isScrolled || location.pathname !== '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          isHeaderScrolled ? 'bg-[#111827]/95 py-2 md:py-3 border-b border-white/10 shadow-md backdrop-blur-md' : 'bg-transparent py-3 md:py-4 mt-2'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="https://res.cloudinary.com/dzyx5ablm/image/upload/v1788786068/Untitled_1_mhx6l4_wgxoxi.png" 
                alt="מ.ס אלומיניום" 
                className={cn(
                  "w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-sm max-w-[140px] sm:max-w-[170px] md:max-w-[200px]",
                  isHeaderScrolled ? "h-5 sm:h-6" : "h-6 sm:h-7 md:h-8"
                )} 
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative text-sm md:text-base font-semibold transition-colors hover:text-gold py-1"
                  >
                    <span className={cn(isActive ? 'text-gold' : 'text-white/80 hover:text-gold')}>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold"
                        initial={false}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Contact CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:0523221560"
                className={cn(
                  "hidden lg:flex items-center gap-2 text-xs md:text-sm font-medium border rounded-none px-4 py-1.5 transition-all duration-300 shadow-sm",
                  isHeaderScrolled 
                    ? "bg-transparent border-white/30 text-white hover:bg-white/10" 
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                )}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>052-322-1560</span>
              </a>

              <button
                className="md:hidden p-1.5 text-white hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary-dark/95 z-[60]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[65%] max-w-[260px] bg-[#111827] border-r border-white/10 z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-4 flex justify-end">
                <button
                  className="p-1.5 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col px-6 gap-5 mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-heading text-lg font-light text-white hover:text-gold transition-colors border-b border-white/5 pb-3"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-5 mt-auto flex flex-col gap-3">
                <a
                  href="https://wa.me/972523221560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full bg-white/5 text-gold border border-gold/30 rounded-none py-3 text-sm font-medium hover:bg-gold hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>וואטסאפ</span>
                </a>
                <a
                  href="tel:0523221560"
                  className="flex items-center justify-center gap-1.5 w-full bg-gold/10 text-gold border border-gold/30 rounded-none py-3 text-sm font-medium hover:bg-gold/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>052-322-1560</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
