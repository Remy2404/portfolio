import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  variant?: 'light' | 'heavy' | 'subtle';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  color?: 'pink' | 'blue' | 'green' | 'yellow' | 'white';
  onHover?: boolean;
  glitchInterval?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  variant = 'light',
  tag: Tag = 'div',
  color = 'white',
  onHover = false,
  glitchInterval = 3000
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [hoverState, setHoverState] = useState(false);
  
  // Generate glitch characters
  const getRandomChar = () => {
    const chars = '!<>-_\\/[]{}—=+*^?#@И%';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };
  
  // Create a glitched version of the text
  const createGlitchText = (text: string) => {
    const glitchFactor = variant === 'heavy' ? 0.3 : variant === 'light' ? 0.1 : 0.05;
    return text.split('').map(char => {
      return Math.random() < glitchFactor ? getRandomChar() : char;
    }).join('');
  };
  
  // Random glitch effect based on interval
  useEffect(() => {
    if (onHover && !hoverState) return;
    
    let glitchTimer: NodeJS.Timeout;
    let duration: NodeJS.Timeout;
    
    const triggerGlitch = () => {
      setIsGlitching(true);
      
      // Determine how long the glitch will last
      const glitchDuration = variant === 'heavy' ? 500 : variant === 'light' ? 200 : 100;
      
      duration = setTimeout(() => {
        setIsGlitching(false);
      }, glitchDuration);
    };
    
    // Set up recurring glitches at random intervals
    const setupNextGlitch = () => {
      const nextInterval = glitchInterval + (Math.random() * 2000 - 1000); // Add randomness
      glitchTimer = setTimeout(() => {
        triggerGlitch();
        setupNextGlitch();
      }, nextInterval);
    };
    
    // Initial glitch
    if (variant !== 'subtle') {
      triggerGlitch();
    }
    
    // Set up recurring glitches
    setupNextGlitch();
    
    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(duration);
    };
  }, [variant, glitchInterval, onHover, hoverState]);
  
  // Get color class
  const getColorClass = () => {
    switch (color) {
      case 'pink': return 'text-cyberpunk-pink';
      case 'blue': return 'text-cyberpunk-blue';
      case 'green': return 'text-cyberpunk-green';
      case 'yellow': return 'text-cyberpunk-yellow';
      default: return 'text-white';
    }
  };
  
  // Create pseudo-element styles for glitch effect
  const beforeStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: isGlitching ? 0.8 : 0,
    transform: isGlitching ? 'translate(-5px, 0)' : 'translate(0)',
    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
    background: `rgba(255, 42, 109, ${isGlitching ? 0.3 : 0})`,
    textShadow: isGlitching ? '2px 0 #00ffea' : 'none',
  } as React.CSSProperties;
  
  const afterStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: isGlitching ? 0.8 : 0,
    transform: isGlitching ? 'translate(5px, 0)' : 'translate(0)',
    clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)',
    background: `rgba(5, 217, 232, ${isGlitching ? 0.3 : 0})`,
    textShadow: isGlitching ? '-2px 0 #ff004d' : 'none',
  } as React.CSSProperties;
  
  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={onHover ? () => setHoverState(true) : undefined}
      onHoverEnd={onHover ? () => setHoverState(false) : undefined}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        transition: { duration: 0.2 }
      } : {}}
    >
      {/* Original text */}
      <Tag className={`relative z-10 ${getColorClass()} ${className}`}>
        {isGlitching ? createGlitchText(text) : text}
      </Tag>
      
      {/* Glitch effects (only shown when glitching) */}
      {(isGlitching || variant === 'heavy') && (
        <>
          <span 
            className="absolute left-0 top-0 z-0 pointer-events-none"
            style={beforeStyle}
            aria-hidden="true"
          >
            {text}
          </span>
          
          <span 
            className="absolute left-0 top-0 z-0 pointer-events-none"
            style={afterStyle}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
    </motion.div>
  );
};

export default GlitchText;
