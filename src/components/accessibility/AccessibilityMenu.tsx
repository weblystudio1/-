import React, { useState, useEffect } from 'react';
import { Accessibility, X, Type, Contrast, MousePointer2, ZoomIn, ZoomOut, RefreshCcw, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  useEffect(() => {
    const handleOpenAccessibility = () => setIsOpen(true);
    window.addEventListener('open-accessibility', handleOpenAccessibility);
    return () => window.removeEventListener('open-accessibility', handleOpenAccessibility);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply Font Size
    root.style.fontSize = `${fontSize}%`;
    
    // Apply Contrast
    if (contrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply Grayscale
    if (grayscale) {
      root.classList.add('grayscale-mode');
    } else {
      root.classList.remove('grayscale-mode');
    }

    // Highlight Links
    if (highlightLinks) {
      root.classList.add('highlight-links');
    } else {
      root.classList.remove('highlight-links');
    }

    // Readable Font
    if (readableFont) {
      root.classList.add('readable-font');
    } else {
      root.classList.remove('readable-font');
    }

  }, [fontSize, contrast, grayscale, highlightLinks, readableFont]);

  const reset = () => {
    setFontSize(100);
    setContrast(false);
    setGrayscale(false);
    setHighlightLinks(false);
    setReadableFont(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] w-12 h-12 bg-transparent border border-white/20 text-white rounded-full flex items-center justify-center hover:scale-110 hover:border-gold hover:text-gold transition-all duration-300 outline-none focus:ring-2 focus:ring-gold"
        aria-label="תפריט נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 z-[10000]"
            />
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-primary-dark border-l border-white/10 z-[10001] shadow-2xl p-6 overflow-y-auto"
              dir="rtl"
            >
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <Accessibility className="w-6 h-6 text-gold" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-white">תפריט נגישות</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg text-gray-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Font Size */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-400 block">גודל טקסט</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setFontSize(prev => Math.min(prev + 10, 150))}
                      className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold/50 rounded-lg text-white transition-all"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>הגדל</span>
                    </button>
                    <button
                      onClick={() => setFontSize(prev => Math.max(prev - 10, 80))}
                      className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold/50 rounded-lg text-white transition-all"
                    >
                      <ZoomOut className="w-4 h-4" />
                      <span>הקטן</span>
                    </button>
                  </div>
                </div>

                {/* Toggles */}
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => setContrast(!contrast)}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      contrast ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <Contrast className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">ניגודיות גבוהה</span>
                  </button>

                  <button
                    onClick={() => setGrayscale(!grayscale)}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      grayscale ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <RefreshCcw className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">גווני אפור</span>
                  </button>

                  <button
                    onClick={() => setHighlightLinks(!highlightLinks)}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      highlightLinks ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <MousePointer2 className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">הדגשת קישורים</span>
                  </button>

                  <button
                    onClick={() => setReadableFont(!readableFont)}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      readableFont ? 'bg-gold border-gold text-white' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <Type className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">גופן קריא</span>
                  </button>
                </div>

                {/* Navigation */}
                <div className="pt-6 border-t border-white/10 space-y-2">
                  <Link
                    to="/accessibility"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group"
                  >
                    <FileText className="w-5 h-5 text-gold" />
                    <span className="font-medium">הצהרת נגישות</span>
                  </Link>
                  
                  <button
                    onClick={reset}
                    className="w-full text-center py-4 text-gold hover:text-white transition-colors text-sm font-medium"
                  >
                    איפוס הגדרות
                  </button>
                </div>
              </div>
              
              <div className="mt-8 text-center text-[10px] text-gray-500">
                מ.ס אלומיניום - מחויבים לנגישות ושירות שוויוני
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
