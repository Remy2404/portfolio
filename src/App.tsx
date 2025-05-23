import { ThemeProvider } from './ThemeProvider';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStackHighlights from './components/TechStackHighlights';
import Experience from './components/Experience';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import RecommendationsCyberpunk from './components/RecommendationsCyberpunk';
import Contact from './components/Contact';
import CyberFooter from './components/CyberFooter';
import CyberCursor from './components/CyberCursor';
import InteractiveTerminal from './components/InteractiveTerminal';
import LoadingScreen from './components/LoadingScreen';
import SystemStats from './components/SystemStats';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <ThemeProvider>
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <div className="bg-cyberpunk-background min-h-screen transition-colors duration-300 relative">
          <CyberCursor />
          <InteractiveTerminal />
          <SystemStats />
          
          <div className="absolute inset-0 bg-cyberpunk-grid pointer-events-none"></div>
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <TechStackHighlights />
            <Experience />
            <Timeline />
            <Projects />
            <RecommendationsCyberpunk />
            <Contact />
            <CyberFooter />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;