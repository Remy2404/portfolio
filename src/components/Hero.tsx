import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import Ramy from '../../Img/Ramy.png';


const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fire effect animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 100;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 1,
        life: Math.random() * 0.5 + 0.5,
      };
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new particles
      if (particles.length < 100) {
        particles.push(createParticle());
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.01;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 5);
        gradient.addColorStop(0, `rgba(255, 215, 0, ${p.life})`);
        gradient.addColorStop(1, `rgba(255, 77, 0, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 140, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 140, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Floating Particles */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FFFF]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.4,
            }}
            animate={{
              y: ['-20px', '20px'],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Card */}
        <motion.div
          className="w-[300px] mb-8 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative group">
            {/* RGB Border Animation */}
            <div className="absolute -inset-[3px] bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-xl opacity-75 group-hover:opacity-100 blur-[2px] animate-pulse transition-all duration-300" />
            <div className="relative bg-[#0A0A0A] p-4 rounded-lg">
              <motion.img
                src={Ramy}                alt="Phon Ramy"
                className="w-full aspect-square object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Name with Fire Effect */}
        <div className="relative mb-6">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none"
          />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="relative"
          >
            <TypeAnimation
              sequence={['Phon Ramy', 1000]}
              wrapper="h1"
              speed={50}
              repeat={0}
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FFD700]"
            />
          </motion.div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <TypeAnimation
            sequence={[500, 'Full-Stack Developer', 1000]}
            wrapper="div"
            speed={50}
            repeat={0}
            className="text-2xl text-[#FFFFFF]"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-[#FF0066] text-white rounded-full font-medium relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF0066] to-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-3 border-2 border-[#00FF8C] text-[#00FF8C] rounded-full font-medium relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-[#00FF8C] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ChevronDown className="text-[#00FFFF] w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;