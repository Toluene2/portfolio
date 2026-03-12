import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Twitter, Linkedin, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-orange-200 flex flex-col">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-serif text-xl font-semibold tracking-tight">My Story</Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-stone-600 hover:text-orange-600 transition-colors text-sm font-medium">About Me</Link>
              <Link to="/university" className="text-stone-600 hover:text-orange-600 transition-colors text-sm font-medium">Adeleke University</Link>
              <Link to="/projects" className="text-stone-600 hover:text-orange-600 transition-colors text-sm font-medium">Projects</Link>
              <Link to="/gallery" className={`text-sm font-medium transition-colors ${location.pathname === '/gallery' ? 'text-orange-600' : 'text-stone-600 hover:text-orange-600'}`}>Gallery</Link>
              <Link to="/contact" className="text-stone-600 hover:text-orange-600 transition-colors text-sm font-medium">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleMenu} className="text-stone-600 hover:text-stone-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-stone-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-orange-600 rounded-md text-base font-medium">About Me</Link>
              <Link to="/university" onClick={toggleMenu} className="block px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-orange-600 rounded-md text-base font-medium">Adeleke University</Link>
              <Link to="/projects" onClick={toggleMenu} className="block px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-orange-600 rounded-md text-base font-medium">Projects</Link>
              <Link to="/gallery" onClick={toggleMenu} className="block px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-orange-600 rounded-md text-base font-medium">Gallery</Link>
              <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-orange-600 rounded-md text-base font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="py-12 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.instagram.com/toluene021/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-orange-600 transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/AdeyeyeToluwas1" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-orange-600 transition-all">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-orange-600 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="joshuaoladele17@gmail.com" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-orange-600 transition-all">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} My Personal Website. Built with React & Tailwind.</p>
            <p className="mt-2 flex items-center justify-center gap-1">
              <MapPin size={14} /> Adeleke University, Ede, Osun State, Nigeria
            </p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors z-50"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
