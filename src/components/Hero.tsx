import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Terminal, Code2 } from 'lucide-react';
import Ramy from '../../Img/Ramy.png';


const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const terminalText = '> Initializing Neural Interface...';
  
  // Typewriter effect for terminal
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < terminalText.length) {
        setDisplayedText(terminalText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Enhanced matrix-like particle effect
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
      color: string;
    }> = [];

    const colors = ['#FF2A6D', '#05D9E8', '#00FF41', '#F9F002'];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 2 + 1,
        life: Math.random() * 0.8 + 0.4,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(26, 0, 51, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new particles
      if (particles.length < 50) {
        particles.push(createParticle());
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.005;

        if (p.life <= 0 || p.y > canvas.height) {
          particles.splice(i, 1);
          continue;
        }

        // Draw glowing particle
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyberpunk-purple">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />
      
      {/* Grid Background with CRT effect */}
      <div className="absolute inset-0 overflow-hidden animate-crt-flicker">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 42, 109, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(5, 217, 232, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="h-full w-full" style={{
            background: 'linear-gradient(transparent 50%, rgba(0, 255, 65, 0.03) 50%)',
            backgroundSize: '100% 4px',
            animation: 'scanline 2s linear infinite'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-4 bg-black/80 rounded-lg border-2 border-cyberpunk-green font-mono text-cyberpunk-green shadow-lg"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)'
          }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <Terminal className="w-4 h-4" />
            <span className="text-xs">neural_interface.exe</span>
            <div className="flex space-x-1 ml-auto">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="text-sm">
            {displayedText}
            <span className="animate-pulse">|</span>
          </div>
        </motion.div>

        {/* Profile Image with Cyberpunk Border */}
        <motion.div
          className="w-[280px] mb-8 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="relative group">
            {/* Animated RGB Border */}
            <div className="absolute -inset-[4px] bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green rounded-xl opacity-75 group-hover:opacity-100 blur-sm animate-glow-pulse transition-all duration-300" />
            
            {/* Corner Brackets */}
            <div className="absolute -inset-2 pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyberpunk-yellow"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyberpunk-yellow"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyberpunk-yellow"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyberpunk-yellow"></div>
            </div>
            
            <div className="relative bg-cyberpunk-purple p-3 rounded-lg overflow-hidden">
              <motion.img
                src={Ramy}
                alt="Phon Ramy"
                className="w-full aspect-square object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-pink/20 via-transparent to-cyberpunk-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </motion.div>

        {/* Name with Glitch Effect */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="relative mb-6"
        >
          <TypeAnimation
            sequence={[
              'PHON_RAMY.exe', 
              1000,
              'DEVELOPER.init()', 
              1000,
              'PHON RAMY', 
              2000
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-6xl md:text-7xl font-bold font-mono neon-text-pink"
            style={{
              textShadow: '0 0 10px #FF2A6D, 0 0 20px #FF2A6D, 0 0 30px #FF2A6D'
            }}
          />
        </motion.div>

        {/* Subtitle with Matrix Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <TypeAnimation
            sequence={[
              1000,
              'FULL-STACK DEVELOPER',
              2000,
              'NEURAL NETWORK ARCHITECT', 
              2000,
              'DIGITAL CONSCIOUSNESS ENGINEER',
              2000,
              'CYBERNETIC CODE SPECIALIST',
              2000
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-mono neon-text-blue tracking-wider"
          />
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-8 font-mono text-sm"
        >
          <div className="flex items-center space-x-2 px-3 py-2 bg-black/60 rounded border border-cyberpunk-green">
            <div className="w-2 h-2 bg-cyberpunk-green rounded-full animate-pulse"></div>
            <span className="text-cyberpunk-green">ONLINE</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-2 bg-black/60 rounded border border-cyberpunk-blue">
            <Code2 className="w-4 h-4 text-cyberpunk-blue" />
            <span className="text-cyberpunk-blue">4+ YEARS EXP</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-2 bg-black/60 rounded border border-cyberpunk-yellow">
            <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-pulse"></div>
            <span className="text-cyberpunk-yellow">AVAILABLE</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#contact"
            className="cyberpunk-button group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>INITIATE_CONTACT()</span>
            </span>
          </motion.a>
          
          <motion.a
            href="#projects"
            className="px-8 py-3 border-2 border-cyberpunk-blue text-cyberpunk-blue rounded font-mono font-semibold relative overflow-hidden group hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: '0 0 15px rgba(5, 217, 232, 0.3)'
            }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Code2 className="w-4 h-4" />
              <span>VIEW_PROJECTS()</span>
            </span>
            <div className="absolute inset-0 bg-cyberpunk-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ChevronDown className="neon-text-green w-8 h-8" />
        </motion.div>
      </div>

      {/* Additional Matrix Rain Effect (Optional) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyberpunk-green font-mono text-xs"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0.8,
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          >
            {Math.random().toString(36).substr(2, 1)}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;