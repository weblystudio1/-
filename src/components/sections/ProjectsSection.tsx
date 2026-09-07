import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const projectsData = [
  { id: 1, img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1781715859/Screenshot_1159_cx64xc.png' },
  { id: 2, img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1781715859/Screenshot_1160_vnny0n.png' },
  { id: 3, img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1781715859/Screenshot_1161_uiqkyd.png' },
  { id: 4, img: 'https://res.cloudinary.com/dzyx5ablm/image/upload/v1781715860/Screenshot_1162_f7lxju.png' },
];

export function ProjectsSection({ preview = false }: { preview?: boolean }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-gold font-medium tracking-widest text-sm mb-3 block">מבט אל הפרויקטים</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">עשייה מעוררת השראה</h2>
            <p className="text-gray-300 text-base sm:text-lg">הצצה קטנה ומדויקת לעבודות הנבחרות שלנו ברחבי ישראל. הגימור המקצועי מדבר בעד עצמו.</p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid - Full Bleed */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full"
      >
        <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="group relative cursor-pointer rounded-none overflow-hidden aspect-[4/3] bg-primary border border-white/5 hover:border-gold/30 transition-colors shadow-xl"
                onClick={() => setSelectedImage(project.img)}
              >
                <img 
                  src={project.img} 
                  alt="מ.ס אלומיניום - פרויקטים" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay indicating zoom capability with NO text captions */}
                <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div 
                    className="p-4 rounded-full bg-gold/10 border border-gold/40 text-gold shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ZoomIn className="w-8 h-8" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      {/* Lightbox for zooming */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 md:p-12 bg-primary-dark/95"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative inline-flex max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 z-[110] p-2 sm:p-3 rounded-full bg-white text-black shadow-xl hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </button>
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                src={selectedImage}
                alt="Project Full View"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain shadow-2xl shadow-black/80"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
