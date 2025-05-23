/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          // Updated Cyberpunk 2077 color scheme
          pink: '#FF2A6D',      // Neon Pink
          blue: '#05D9E8',      // Electric Blue
          purple: '#1A0033',    // Dark Purple
          yellow: '#F9F002',    // Cyber Yellow
          green: '#00FF41',     // Matrix Green
          
          // Legacy colors for backward compatibility
          background: '#1A0033',
          cyan: '#05D9E8',
          text: '#d1d5db',
          heading: '#ffffff',
          darker: '#0D001A',
          accent: '#FF2A6D',
        }
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'neonPulse': 'neonPulse 2s infinite alternate',
        'neonFlicker': 'neonFlicker 2.5s infinite alternate',
        'scanline': 'scanline 2s linear infinite',
        'typewriter': 'typewriter 3s steps(40) 1s infinite',
        'crt-flicker': 'crt-flicker 0.15s infinite linear alternate',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        neonPulse: {
          '0%': { boxShadow: '0 0 5px #FF2A6D, 0 0 10px #FF2A6D, 0 0 20px #FF2A6D' },
          '100%': { boxShadow: '0 0 10px #05D9E8, 0 0 20px #05D9E8, 0 0 30px #05D9E8' },
        },
        neonFlicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FF2A6D, 0 0 82px #FF2A6D' 
          },
          '20%, 24%, 55%': { 
            textShadow: 'none' 
          }
        },
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' }
        },
        'crt-flicker': {
          '0%': { opacity: '1' },
          '98%': { opacity: '1' },
          '99%': { opacity: '0.98' },
          '100%': { opacity: '1' }
        },
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 5px #FF2A6D, 0 0 10px #FF2A6D, 0 0 15px #FF2A6D',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 10px #05D9E8, 0 0 20px #05D9E8, 0 0 30px #05D9E8',
            transform: 'scale(1.02)'
          }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' }
        },
      },
      backgroundImage: {
        'cyberpunk-grid': 'linear-gradient(to right, rgba(0, 247, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(254, 218, 0, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};