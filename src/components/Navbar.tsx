import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tech Stack', href: '#techstack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Reviews', href: '#recommendations' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      {/* Neon glow effect when scrolled */}
      {scrolled && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF8C]/50 to-transparent" />
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300" />
            <div className="relative bg-[#0A0A0A]/90 backdrop-blur-xl border border-gray-800/50 rounded-lg px-4 py-2 group-hover:border-[#00FF8C]/30 transition-all duration-300">
              <span className="text-white font-bold text-xl bg-gradient-to-r from-[#00FF8C] to-[#00FFFF] bg-clip-text text-transparent">
                PR
              </span>
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
                  className="group relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF0066]/20 via-[#00FF8C]/20 to-[#00FFFF]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#00FF8C]/30 rounded-lg transition-colors duration-300" />
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00FF8C] to-[#00FFFF] group-hover:w-full group-hover:left-0 transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group p-2 text-gray-300 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0066]/20 to-[#00FFFF]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
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
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-xl border border-gray-800/50 rounded-lg m-2" />
                
                <div className="relative px-4 pt-4 pb-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative block px-4 py-3 text-base font-medium text-gray-300 hover:text-white transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF0066]/10 to-[#00FFFF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute left-0 top-1/2 w-0 h-6 bg-gradient-to-r from-[#00FF8C] to-[#00FFFF] group-hover:w-1 transition-all duration-300 transform -translate-y-1/2" />
                      <span className="relative z-10">{link.name}</span>
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