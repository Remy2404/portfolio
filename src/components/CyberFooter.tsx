import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import { CyberBadge } from './CyberpunkElements';

const CyberFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);
    
    return () => {
      clearInterval(timer);
      clearInterval(glitchInterval);
    };
  }, []);
  
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Remy2404', icon: <Github className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/phon-ramy-81025a2a9/', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Email', href: 'mailto:meemii191@gmail.com', icon: <Mail className="w-5 h-5" /> },
  ];
  
  return (
    <footer className="relative overflow-hidden border-t border-cyberpunk-blue/30 bg-gradient-to-b from-transparent to-cyberpunk-darker">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] animate-scanline opacity-20"></div>
      </div>
      
      {/* Moving circuits in background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M0,0 L20,0 L20,20 L40,20 L40,40 L60,40 L60,60 L80,60 L80,80 L100,80 L100,100 L0,100 Z" 
            fill="none" 
            stroke="#05D9E8" 
            strokeWidth="0.2"
            className="animate-pulse"
          />
          <path 
            d="M0,100 L20,100 L20,80 L40,80 L40,60 L60,60 L60,40 L80,40 L80,20 L100,20 L100,0" 
            fill="none" 
            stroke="#FF2A6D" 
            strokeWidth="0.2"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Terminal Info */}
          <div className="font-mono">
            <div className="text-xl mb-4 text-cyberpunk-pink font-bold flex items-center">
              <Terminal className="w-5 h-5 mr-2" />
              <span className={isGlitching ? 'animate-neonFlicker' : ''}>SYS_INFO</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-cyberpunk-blue mr-2">$</span>
                <span className="text-gray-400">uptime:&nbsp;</span>
                <span className="text-cyberpunk-green">{Math.floor(Math.random() * 1000) + 1} days</span>
              </div>
              <div className="flex items-center">
                <span className="text-cyberpunk-blue mr-2">$</span>
                <span className="text-gray-400">version:&nbsp;</span>
                <CyberBadge label="v4.2.0" color="pink" className="ml-1" />
              </div>
              <div className="flex items-center">
                <span className="text-cyberpunk-blue mr-2">$</span>
                <span className="text-gray-400">last_update:&nbsp;</span>
                <span className="text-cyberpunk-yellow">{currentTime.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <span className="text-cyberpunk-blue mr-2">$</span>
                <span className="text-gray-400">status:&nbsp;</span>
                <span className="bg-cyberpunk-green/20 text-cyberpunk-green px-1 rounded animate-pulse">ONLINE</span>
              </div>
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="font-mono">
            <div className="text-xl mb-4 text-cyberpunk-blue font-bold flex items-center">
              <Code className="w-5 h-5 mr-2" />
              <span>NAVIGATION</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <NavLink href="#home">HOME.exe</NavLink>
              <NavLink href="#about">ABOUT.sys</NavLink>
              <NavLink href="#skills">SKILLS.dll</NavLink>
              <NavLink href="#experience">EXP.log</NavLink>
              <NavLink href="#projects">PROJECTS.zip</NavLink>
              <NavLink href="#contact">CONTACT.init</NavLink>
            </div>
          </div>
          
          {/* Column 3: Social Links */}
          <div className="font-mono">
            <div className="text-xl mb-4 text-cyberpunk-green font-bold">
              <span>CONNECT_</span><span className="animate-pulse">|</span>
            </div>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyberpunk-yellow transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-2 border border-gray-700 rounded group-hover:border-cyberpunk-yellow group-hover:bg-cyberpunk-yellow/10 transition-all duration-300">
                    {link.icon}
                  </div>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <div className="relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyberpunk-pink to-transparent top-0"></div>
            <p className="font-mono text-xs">
              <span className="text-cyberpunk-blue">© {currentTime.getFullYear()}</span> • 
              <span className="ml-1">ACCESS_KEY:</span>
              <span className="text-cyberpunk-green ml-1">xxxx-xxxx-xxxx-xxxx</span> • 
              <span className="ml-1">Built with</span>
              <span className="text-cyberpunk-pink ml-1">❮/❯</span> & 
              <span className="text-cyberpunk-yellow ml-1">cybernetic enhancements</span>
            </p>
          </div>
        </div>
        
        {/* Random data packets animation */}
        <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-1 bg-cyberpunk-green rounded-full opacity-70"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: '100%',
                opacity: 0.7
              }}
              animate={{ 
                y: '-100%',
                opacity: [0.7, 0.9, 0.7, 0, 0.7],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

// Simple styled navigation link component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="inline-flex items-center text-sm text-gray-400 hover:text-cyberpunk-blue transition-colors duration-300"
    whileHover={{ x: 3 }}
  >
    <span className="text-cyberpunk-blue mr-1">&gt;</span>
    {children}
  </motion.a>
);

export default CyberFooter;
