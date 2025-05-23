import { ThemeProvider } from './ThemeProvider';
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

function App() {
  return (
    <ThemeProvider>
      <div className="bg-cyberpunk-background min-h-screen transition-colors duration-300 relative">
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
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;