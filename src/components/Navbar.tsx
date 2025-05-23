import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Zap } from 'lucide-react';

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME.exe', href: '#home', icon: '🏠' },
    { name: 'ABOUT.sys', href: '#about', icon: '👤' },
    { name: 'SKILLS.dll', href: '#skills', icon: '⚡' },
    { name: 'TECH.stack', href: '#tech-stack', icon: '🔧' },
    { name: 'EXPERIENCE.log', href: '#experience', icon: '📊' },
    { name: 'TIMELINE.db', href: '#timeline', icon: '📅' },
    { name: 'PROJECTS.zip', href: '#projects', icon: '💼' },
    { name: 'REVIEWS.json', href: '#recommendations', icon: '⭐' },
    { name: 'CONTACT.init', href: '#contact', icon: '📡' }
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-cyberpunk-purple/90 border-b border-cyberpunk-pink/30' 
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: scrolled ? '0 0 30px rgba(255, 42, 109, 0.3)' : 'none'
      }}
    >
      {/* Cyberpunk neon glow effect when scrolled */}
      {scrolled && (
        <>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyberpunk-pink to-transparent animate-pulse" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyberpunk-blue to-transparent" />
        </>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Cyberpunk Logo */}
          <motion.div 
            className="flex-shrink-0 relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green rounded-lg opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
            <div className="relative bg-black/90 backdrop-blur-xl border-2 border-cyberpunk-blue rounded-lg px-4 py-2 group-hover:border-cyberpunk-pink transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-cyberpunk-green" />
                <span className="text-white font-mono font-bold text-xl neon-text-pink">
                  RAMY.exe
                </span>
                <Zap className="w-4 h-4 text-cyberpunk-yellow animate-pulse" />
              </div>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative px-3 py-2 text-sm font-mono font-medium text-gray-300 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-pink/20 via-cyberpunk-blue/20 to-cyberpunk-green/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-cyberpunk-blue/50 rounded-lg transition-colors duration-300" />
                  
                  <div className="relative z-10 flex items-center space-x-1">
                    <span className="text-xs">{link.icon}</span>
                    <span>{link.name}</span>
                  </div>
                  
                  {/* Cyberpunk underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-blue group-hover:w-full group-hover:left-0 transition-all duration-300"
                  />
                  
                  {/* Additional glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-cyberpunk-blue/10 blur-sm rounded-lg" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group p-2 text-gray-300 hover:text-white border border-cyberpunk-blue/30 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                boxShadow: '0 0 10px rgba(5, 217, 232, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-pink/20 to-cyberpunk-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className="text-cyberpunk-pink" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className="text-cyberpunk-blue" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="relative">
                {/* Cyberpunk glassmorphism background */}
                <div className="absolute inset-0 bg-cyberpunk-purple/95 backdrop-blur-xl border-2 border-cyberpunk-pink/30 rounded-lg m-2" 
                     style={{
                       boxShadow: '0 0 30px rgba(255, 42, 109, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                     }} />
                
                <div className="relative px-4 pt-4 pb-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative block px-4 py-3 text-base font-mono font-medium text-gray-300 hover:text-white transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-pink/20 to-cyberpunk-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute left-0 top-1/2 w-0 h-6 bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-blue group-hover:w-1 transition-all duration-300 transform -translate-y-1/2" />
                      
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="text-sm">{link.icon}</span>
                        <span>{link.name}</span>
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-cyberpunk-blue/5 blur rounded-lg" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;