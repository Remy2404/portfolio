import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

const LoadingScreen = ({ isLoading, onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  
  const bootMessages = [
    'Initializing system components...',
    'Establishing neural link...',
    'Loading cybernetic enhancements...',
    'Bypassing security protocols...',
    'Optimizing visual interface...',
    'Calibrating neuralink connection...',
    'Rendering digital environment...'
  ];
  
  // Handle loading progress
  useEffect(() => {
    if (!isLoading) return;
    
    let timer: NodeJS.Timeout;
    
    if (progress < 100) {
      timer = setTimeout(() => {
        // Random increment between 5 and 15
        const increment = Math.floor(Math.random() * 10) + 5;
        
        // Don't exceed 100%
        setProgress(prev => Math.min(prev + increment, 100));
      }, Math.random() * 300 + 300); // Random delay
    } else if (onLoadingComplete) {
      // When progress reaches 100%, complete after a delay
      timer = setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }
    
    return () => clearTimeout(timer);
  }, [progress, isLoading, onLoadingComplete]);
  
  // Display boot messages
  useEffect(() => {
    if (!isLoading) return;
    
    let messageIndex = 0;
    let charIndex = 0;
    
    const typeMessage = () => {
      if (messageIndex >= bootMessages.length) return;
      
      const message = bootMessages[messageIndex];
      
      if (charIndex < message.length) {
        // Type one character at a time
        setCurrentMessage(message.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeMessage, 30);
      } else {
        // Message complete, add to message list and start new message
        setMessages(prev => [...prev, message]);
        setCurrentMessage('');
        messageIndex++;
        charIndex = 0;
        
        if (messageIndex < bootMessages.length) {
          setTimeout(typeMessage, 300);
        }
      }
    };
    
    typeMessage();
  }, [isLoading]);
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
        >
          {/* Scanlines effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
          
          {/* CRT flicker effect */}
          <div className="absolute inset-0 bg-cyberpunk-purple/5 opacity-30 animate-crt-flicker pointer-events-none" />
          
          {/* Radial glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyberpunk-purple/20 to-transparent pointer-events-none" />
          
          <div className="w-full max-w-md px-4">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative border-2 border-cyberpunk-pink rounded-full p-6 bg-black/50"
                animate={{ 
                  boxShadow: ['0 0 10px rgba(255, 42, 109, 0.5)', '0 0 30px rgba(255, 42, 109, 0.7)', '0 0 10px rgba(255, 42, 109, 0.5)'] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Terminal className="w-12 h-12 text-cyberpunk-pink" />
              </motion.div>
            </div>
            
            <div className="font-mono text-center mb-2">
              <h1 className="text-cyberpunk-blue text-xl mb-2">SYSTEM BOOT SEQUENCE</h1>
              <div className="text-cyberpunk-green text-sm">
                INITIALIZING PORTFOLIO v4.2.0
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-black/80 rounded-full h-3 mb-6 border border-cyberpunk-blue/30 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green"
                style={{ width: `${progress}%` }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Scanning effect */}
              <motion.div 
                className="absolute top-0 left-0 h-full w-8 bg-white/20 blur-sm"
                animate={{ 
                  left: ['0%', '100%'],
                  opacity: [0, 1, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Progress text */}
            <div className="flex justify-between text-xs text-cyberpunk-green font-mono mb-6">
              <span>SYS.BOOT.SEQ</span>
              <span>{progress}%</span>
            </div>
            
            {/* Terminal output */}
            <div className="bg-black/80 border border-cyberpunk-blue/30 rounded p-3 h-40 overflow-hidden relative">
              <div className="font-mono text-xs text-cyberpunk-green h-full overflow-hidden">
                <div className="space-y-1">
                  <div>{'> '} Starting system boot sequence...</div>
                  {messages.map((msg, index) => (
                    <div key={index}>{'> '} {msg}</div>
                  ))}
                  {currentMessage && (
                    <div>{'> '} {currentMessage}<span className="animate-pulse">_</span></div>
                  )}
                </div>
              </div>
              
              {/* Overlay gradient to fade bottom text */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
