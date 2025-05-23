import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const CyberButton = ({
  children,
  onClick,
  className = '',
  href,
  variant = 'primary'
}: CyberButtonProps) => {
  const baseStyles = "relative font-mono font-semibold tracking-wider py-3 px-6 overflow-hidden";
  let variantStyles = "";
  let glowColor = "";
  
  switch (variant) {
    case 'primary':
      variantStyles = "bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-blue border-2 border-cyberpunk-pink text-white";
      glowColor = "rgba(255, 42, 109, 0.6)";
      break;
    case 'secondary':
      variantStyles = "bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-green border-2 border-cyberpunk-blue text-white";
      glowColor = "rgba(5, 217, 232, 0.6)";
      break;
    case 'outline':
      variantStyles = "bg-transparent border-2 border-cyberpunk-green text-cyberpunk-green hover:bg-cyberpunk-green/10";
      glowColor = "rgba(0, 255, 65, 0.6)";
      break;
  }
  
  const ButtonComponent = (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
        boxShadow: `0 0 15px ${glowColor}`,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 20px ${glowColor}`,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyberpunk-yellow opacity-80"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyberpunk-yellow opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyberpunk-yellow opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyberpunk-yellow opacity-80"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 w-full transform -translate-x-full transition-transform duration-300 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></div>
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
  
  if (href) {
    return (
      <a href={href} className="inline-block">
        {ButtonComponent}
      </a>
    );
  }
  
  return ButtonComponent;
};

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'pink' | 'blue' | 'green' | 'yellow';
  hoverEffect?: boolean;
}

export const CyberCard = ({
  children,
  className = '',
  glowColor = 'blue',
  hoverEffect = true
}: CyberCardProps) => {
  // Map color names to actual color values
  const colorMap = {
    pink: {
      border: 'border-cyberpunk-pink',
      shadow: '0 0 20px rgba(255, 42, 109, 0.3)',
      gradient: 'from-cyberpunk-pink to-cyberpunk-purple',
    },
    blue: {
      border: 'border-cyberpunk-blue',
      shadow: '0 0 20px rgba(5, 217, 232, 0.3)',
      gradient: 'from-cyberpunk-blue to-cyberpunk-green',
    },
    green: {
      border: 'border-cyberpunk-green',
      shadow: '0 0 20px rgba(0, 255, 65, 0.3)',
      gradient: 'from-cyberpunk-green to-cyberpunk-blue',
    },
    yellow: {
      border: 'border-cyberpunk-yellow',
      shadow: '0 0 20px rgba(249, 240, 2, 0.3)',
      gradient: 'from-cyberpunk-yellow to-cyberpunk-pink',
    },
  };
  
  const { border, shadow } = colorMap[glowColor];
  
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r opacity-50 blur-sm rounded-lg"
        style={{
          boxShadow: shadow,
          background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
        }}
      ></div>
      
      {/* Card Content */}
      <div className={`relative bg-cyberpunk-purple/90 backdrop-blur-lg border ${border} rounded-lg overflow-hidden`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
        }}
      >
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyberpunk-yellow opacity-60"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyberpunk-yellow opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyberpunk-yellow opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyberpunk-yellow opacity-60"></div>
        
        {children}
      </div>
    </motion.div>
  );
};

interface CyberTerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const CyberTerminal = ({
  children,
  className = '',
  title = 'Terminal.exe'
}: CyberTerminalProps) => {
  return (
    <div className={`font-mono rounded-lg overflow-hidden ${className}`}>
      {/* Terminal Header */}
      <div className="bg-black/80 px-4 py-2 flex items-center border-b border-cyberpunk-green/50">
        <div className="text-cyberpunk-green text-xs">{title}</div>
        <div className="ml-auto flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="bg-black/80 text-cyberpunk-green p-4 border border-cyberpunk-green/50">
        {children}
      </div>
    </div>
  );
};

interface CyberBadgeProps {
  label: string;
  color?: 'pink' | 'blue' | 'green' | 'yellow';
  icon?: React.ReactNode;
  className?: string;
}

export const CyberBadge = ({
  label,
  color = 'green',
  icon,
  className = ''
}: CyberBadgeProps) => {
  const colorClasses = {
    pink: 'bg-cyberpunk-pink/20 text-cyberpunk-pink border-cyberpunk-pink',
    blue: 'bg-cyberpunk-blue/20 text-cyberpunk-blue border-cyberpunk-blue',
    green: 'bg-cyberpunk-green/20 text-cyberpunk-green border-cyberpunk-green',
    yellow: 'bg-cyberpunk-yellow/20 text-cyberpunk-yellow border-cyberpunk-yellow',
  };
  
  return (
    <div 
      className={`inline-flex items-center px-3 py-1 font-mono text-xs border rounded ${colorClasses[color]} ${className}`}
      style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </div>
  );
};

export default {
  CyberButton,
  CyberCard,
  CyberTerminal,
  CyberBadge
};
