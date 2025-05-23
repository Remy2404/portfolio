import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';

interface CommandResponse {
  text: string;
  isError?: boolean;
  isHTML?: boolean;
}

const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [responses, setResponses] = useState<CommandResponse[]>([
    { text: 'Welcome to Cyberpunk Portfolio Terminal v1.0.0' },
    { text: 'Type "help" to see available commands.' },
  ]);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);
  
  // Scroll to bottom when new responses are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [responses]);
  
  // Terminal command processor
  const processCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim();
    
    // Help command
    if (lowerCmd === 'help') {
      return [
        { text: 'Available commands:' },
        { text: 'help - Show this help message' },
        { text: 'about - Show information about me' },
        { text: 'skills - List my technical skills' },
        { text: 'projects - Show my recent projects' },
        { text: 'contact - Show contact information' },
        { text: 'clear - Clear terminal' },
        { text: 'navigate [section] - Navigate to a section (e.g. navigate projects)' },
        { text: 'theme [color] - Change terminal color (blue/green/pink/yellow)' },
        { text: 'echo [text] - Print text to terminal' },
        { text: 'date - Show current date' },
        { text: 'exit - Close terminal' },
      ];
    }
    
    // About command
    else if (lowerCmd === 'about') {
      return [
        { text: '=== ABOUT ME ===' },
        { text: 'Full-Stack Developer based in Phnom Penh, Cambodia.' },
        { text: 'Currently pursuing Bachelor\'s in IT Engineering at Royal University of Phnom Penh.' },
        { text: 'Passionate about creating innovative digital solutions with cutting-edge technologies.' },
      ];
    }
    
    // Skills command
    else if (lowerCmd === 'skills') {
      return [
        { text: '=== TECHNICAL SKILLS ===' },
        { text: '- Frontend: React, TypeScript, Next.js' },
        { text: '- Backend: Node.js, Python, Java' },
        { text: '- Database: MongoDB, MySQL' },
        { text: '- DevOps: Docker, CI/CD' },
        { text: '- Other: Cyberpunk UI Design, Animation' },
      ];
    }
    
    // Projects command
    else if (lowerCmd === 'projects') {
      return [
        { text: '=== RECENT PROJECTS ===' },
        { text: '1. Cyberpunk Portfolio - A stylish cyberpunk-themed developer portfolio' },
        { text: '2. Project Matrix - Fullstack application with real-time data visualization' },
        { text: '3. Neural Network - AI-powered image recognition system' },
        { text: 'Type "navigate projects" to see more details.' },
      ];
    }
    
    // Contact command
    else if (lowerCmd === 'contact') {
      return [
        { text: '=== CONTACT INFORMATION ===' },
        { text: 'Email: your@email.com' },
        { text: 'GitHub: github.com/yourusername' },
        { text: 'LinkedIn: linkedin.com/in/yourusername' },
        { text: 'Type "navigate contact" to open contact form.' },
      ];
    }
    
    // Clear command
    else if (lowerCmd === 'clear') {
      setResponses([]);
      return [];
    }
    
    // Navigate command
    else if (lowerCmd.startsWith('navigate ')) {
      const section = lowerCmd.split(' ')[1];
      let targetSection = '';
      
      switch (section) {
        case 'home':
          targetSection = '#home';
          break;
        case 'about':
          targetSection = '#about';
          break;
        case 'skills':
          targetSection = '#skills';
          break;
        case 'projects':
          targetSection = '#projects';
          break;
        case 'experience':
          targetSection = '#experience';
          break;
        case 'contact':
          targetSection = '#contact';
          break;
        default:
          return [{ text: `Unknown section: ${section}`, isError: true }];
      }
      
      // Scroll to section
      document.querySelector(targetSection)?.scrollIntoView({ behavior: 'smooth' });
      return [{ text: `Navigating to ${section} section...` }];
    }
    
    // Theme command
    else if (lowerCmd.startsWith('theme ')) {
      const color = lowerCmd.split(' ')[1];
      if (['blue', 'green', 'pink', 'yellow'].includes(color)) {
        return [{ text: `Terminal theme changed to ${color}.`, isHTML: true }];
      } else {
        return [{ text: 'Available themes: blue, green, pink, yellow', isError: true }];
      }
    }
    
    // Echo command
    else if (lowerCmd.startsWith('echo ')) {
      const text = cmd.substring(5);
      return [{ text }];
    }
    
    // Date command
    else if (lowerCmd === 'date') {
      return [{ text: new Date().toLocaleString() }];
    }
    
    // Exit command
    else if (lowerCmd === 'exit') {
      setIsOpen(false);
      return [{ text: 'Closing terminal...' }];
    }
    
    // Unknown command
    else {
      return [{ 
        text: `Command not recognized: ${cmd}. Type "help" for available commands.`,
        isError: true 
      }];
    }
  };
  
  // Handle command submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    
    // Add command to history
    setResponses(prev => [...prev, { text: `> ${command}` }]);
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
    
    // Process command
    const newResponses = processCommand(command);
    if (newResponses.length > 0) {
      setResponses(prev => [...prev, ...newResponses]);
    }
    
    // Clear input
    setCommand('');
  };
  
  // Handle key navigation through command history
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand('');
      }
    }
  };
  
  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-black/80 border border-cyberpunk-green p-3 rounded-full shadow-lg hover:shadow-cyberpunk-green/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TerminalIcon className="w-6 h-6 text-cyberpunk-green" />
      </motion.button>
    );
  }
  
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        {/* Terminal window */}
        <motion.div 
          className={`bg-black/90 backdrop-blur-lg border border-cyberpunk-blue/50 rounded-lg overflow-hidden shadow-lg ${
            isMinimized ? 'h-12' : 'w-[90vw] max-w-lg h-[60vh]'
          }`}
          animate={{ height: isMinimized ? 48 : 'auto' }}
          transition={{ duration: 0.2 }}
        >
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center border-b border-cyberpunk-blue/30">
            <div className="flex items-center space-x-1">
              <TerminalIcon className="w-4 h-4 text-cyberpunk-green mr-2" />
              <div className="text-cyberpunk-green text-xs font-mono">TERMINAL.exe</div>
            </div>
            
            <div className="ml-auto flex space-x-2">
              <button 
                onClick={() => setIsMinimized(!isMinimized)} 
                className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-400 transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-2 h-2 text-black" /> : <Minimize2 className="w-2 h-2 text-black" />}
              </button>
              
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-400 transition-colors"
              >
                <X className="w-2 h-2 text-black" />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Terminal Output */}
              <div 
                ref={terminalRef}
                className="p-4 font-mono text-sm text-cyberpunk-green h-[calc(60vh-6rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-cyberpunk-blue/20 scrollbar-track-transparent"
              >
                {responses.map((response, i) => (
                  <div 
                    key={i} 
                    className={`mb-1 ${response.isError ? 'text-cyberpunk-pink' : ''}`}
                  >
                    {response.text}
                  </div>
                ))}
              </div>
            
              {/* Terminal Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-cyberpunk-blue/30">
                <div className="flex items-center">
                  <span className="text-cyberpunk-green font-mono mr-2">{'>'}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-grow bg-transparent border-none outline-none text-cyberpunk-green font-mono text-sm"
                    autoFocus
                    aria-label="Terminal input"
                  />
                </div>
              </form>
            </>
          )}
        </motion.div>
        
        {/* Decorative glow effect */}
        <div 
          className="absolute inset-0 -z-10 bg-cyberpunk-blue/30 blur-xl opacity-30 rounded-full transform scale-75 animate-pulse"
        />
      </div>
    </motion.div>
  );
};

export default InteractiveTerminal;
