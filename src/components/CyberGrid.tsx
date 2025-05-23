import { useEffect, useRef } from 'react';

interface CyberGridProps {
  color?: 'blue' | 'pink' | 'green' | 'yellow';
  density?: 'low' | 'medium' | 'high';
  animate?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const CyberGrid: React.FC<CyberGridProps> = ({
  color = 'blue',
  density = 'medium',
  animate = true,
  children,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Map color prop to actual color values
  const colorMap = {
    blue: '#05D9E8',
    pink: '#FF2A6D',
    green: '#00FF41',
    yellow: '#F9F002'
  };
  
  // Map density prop to grid size
  const densityMap = {
    low: 50,
    medium: 30,
    high: 20
  };
  
  // Draw the grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      drawGrid();
    };
    
    const drawGrid = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = densityMap[density];
      const width = canvas.width;
      const height = canvas.height;
      
      // Background color with gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(26, 0, 51, 0.95)');
      gradient.addColorStop(1, 'rgba(13, 0, 26, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Draw grid lines
      ctx.beginPath();
      ctx.strokeStyle = `${colorMap[color]}33`; // 20% opacity
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      
      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      
      ctx.stroke();
      
      // Add some highlighted grid points
      const highlightPoints = Math.floor((width * height) / (gridSize * gridSize * 10)); // 10% of grid intersections
      
      for (let i = 0; i < highlightPoints; i++) {
        const x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
        const y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
        
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = colorMap[color];
        ctx.fill();
        
        // Add occasional glow
        if (Math.random() > 0.7) {
          ctx.beginPath();
          ctx.arc(x, y, 3 + Math.random() * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${colorMap[color]}33`;
          ctx.fill();
        }
      }
    };
    
    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation loop
    let animationFrame: number;
    let lastTime = 0;
    let particleTimer = 0;
    
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      life: number;
    }> = [];
    
    const animate = (time: number) => {
      if (!animate) return;
      
      const deltaTime = time - lastTime;
      lastTime = time;
      
      // Add new particle occasionally
      particleTimer += deltaTime;
      if (particleTimer > 300) { // Every 300ms
        particleTimer = 0;
        
        if (particles.length < 50) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height, 
            size: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.2,
            life: 1.0
          });
        }
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      
      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.speed;
        p.life -= 0.005;
        
        if (p.life <= 0 || p.y > canvas.height) {
          particles.splice(i, 1);
          continue;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `${colorMap[color]}${Math.floor(p.life * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    if (animate) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      drawGrid();
    }
    
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, density, animate]);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CyberGrid;
