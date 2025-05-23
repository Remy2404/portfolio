import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CyberCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer'>('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const cursorXSpring = useSpring(cursorX, { damping: 35, stiffness: 450, mass: 0.4 });
  const cursorYSpring = useSpring(cursorY, { damping: 35, stiffness: 450, mass: 0.4 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Show cursor after first movement
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], [tabindex]');
      setCursorType(isInteractive ? 'pointer' : 'default');
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        {/* Outer ring */}
        <motion.div 
          className="absolute w-6 h-6 border-2 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            borderColor: cursorType === 'pointer' ? '#FF2A6D' : '#05D9E8',
            boxShadow: `0 0 10px ${cursorType === 'pointer' ? '#FF2A6D' : '#05D9E8'}`,
          }}
          animate={{
            scale: cursorType === 'pointer' ? 1.2 : 1,
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 2, repeat: Infinity },
          }}
        />
        
        {/* Inner dot */}
        <motion.div 
          className="absolute w-1 h-1 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundColor: cursorType === 'pointer' ? '#FF2A6D' : '#05D9E8',
            boxShadow: `0 0 5px ${cursorType === 'pointer' ? '#FF2A6D' : '#05D9E8'}`,
          }}
          animate={{
            scale: isClicking ? 1.5 : 1,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Simple trailing dots */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 z-40 pointer-events-none"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          transition={{
            type: "spring",
            damping: 20 + (i * 10),
            stiffness: 300 - (i * 50),
            mass: 0.5 + (i * 0.2),
          }}
        >
          <motion.div 
            className="absolute w-1 h-1 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundColor: cursorType === 'pointer' ? '#FF2A6D' : '#05D9E8',
              opacity: 0.5 - (i * 0.15),
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CyberCursor;
