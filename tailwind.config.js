/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          background: '#1a1a2e',
          yellow: '#feda00',
          cyan: '#00f7ff',
          text: '#d1d5db',
          heading: '#ffffff',
          darker: '#131325',
          accent: '#ff124f',
        }
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'neonPulse': 'neonPulse 2s infinite alternate',
        'neonFlicker': 'neonFlicker 2.5s infinite alternate',
        'scanline': 'scanline 2s linear infinite',
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
          '0%': { boxShadow: '0 0 5px #feda00, 0 0 10px #feda00, 0 0 20px #feda00' },
          '100%': { boxShadow: '0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 30px #00f7ff' },
        },
        neonFlicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #feda00, 0 0 82px #feda00' 
          },
          '20%, 24%, 55%': { 
            textShadow: 'none' 
          }
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