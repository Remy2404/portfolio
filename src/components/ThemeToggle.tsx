import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-cyberpunk-darker/80 backdrop-blur-lg border border-cyberpunk-cyan 
                shadow-[0_0_15px_rgba(0,247,255,0.7)] hover:shadow-[0_0_20px_rgba(0,247,255,0.9)] 
                transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-cyberpunk-yellow animate-pulse-soft" />
      ) : (
        <Moon className="w-5 h-5 text-cyberpunk-cyan animate-pulse-soft" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
