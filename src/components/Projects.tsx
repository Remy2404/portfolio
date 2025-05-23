import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Terminal, Code2 } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import GitHubCalendar from 'react-github-calendar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CyberButton, CyberBadge } from './CyberpunkElements';

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  live: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'Gemini AI Chatbot',
    description: 'An advanced chatbot powered by Google\'s Gemini AI, featuring natural language processing and context-aware responses.',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      'https://images.unsplash.com/photo-1677442136019-21780ecad996',
      'https://images.unsplash.com/photo-1677442136019-21780ecad997'
    ],
    technologies: ['React', 'TypeScript', 'Gemini AI', 'Node.js'],
    github: '#',
    live: '#',
    features: [
      'Natural Language Processing',
      'Context-aware responses',
      'Multi-modal interactions',
      'Real-time processing'
    ]
  },
  {
    title: 'Telegram-Gemini-Bot',
    description: 'A Telegram bot integrated with Gemini AI for real-time image analysis and intelligent conversations.',
    images: [
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da',
      'https://images.unsplash.com/photo-1611746872915-64382b5c76db',
      'https://images.unsplash.com/photo-1611746872915-64382b5c76dc'
    ],
    technologies: ['Python', 'Telegram API', 'Gemini AI', 'Docker'],
    github: 'https://github.com/Remy2404/Telegram-Gemini-Bot',
    live: 'https://t.me/Gemini_AIAssistBot',
    features: [
      'Image Analysis',
      'Real-time Processing',
      'Multi-language Support',
      'Automated Responses'
    ]
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, product management, and payment integration.',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c',
      'https://images.unsplash.com/photo-1557821552-17105176677d',
      'https://images.unsplash.com/photo-1557821552-17105176677e'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Remy2404/Gemini-ai-completed-pp',
    live: 'gemini-ai-completed-pp.vercel.app',
    features: [
      'User Authentication',
      'Payment Integration',
      'Product Management',
      'Order Tracking'
    ]
  }
];;

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const springProps = useSpring({
    transform: isHovered
      ? 'scale(1.03) translateY(-10px)'
      : 'scale(1) translateY(0px)',
    boxShadow: isHovered
      ? '0 0 25px rgba(255, 42, 109, 0.5), 0 0 15px rgba(5, 217, 232, 0.3)'
      : '0 0 10px rgba(255, 42, 109, 0.3), 0 0 5px rgba(5, 217, 232, 0.2)',
    config: {
      tension: 300,
      friction: 20
    }
  });

  const imageSpringProps = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    config: {
      tension: 300,
      friction: 20
    }
  });

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <animated.div
        style={springProps}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group backdrop-blur-lg rounded-xl overflow-hidden border-2 border-cyberpunk-blue"
      >
        {/* Glowing border effect */}
        <div 
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(45deg, 
              rgba(255, 42, 109, 0.4) 0%, 
              rgba(5, 217, 232, 0.4) 50%,
              rgba(0, 255, 65, 0.4) 100%)`,
            filter: 'blur(4px)',
            zIndex: -1
          }}
        />
        
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyberpunk-yellow opacity-70"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyberpunk-yellow opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyberpunk-yellow opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyberpunk-yellow opacity-70"></div>

        <div className="relative h-48 overflow-hidden">
          <animated.div style={imageSpringProps}>
            <LazyLoadImage
              src={project.images[currentImage]}
              alt={project.title}
              effect="blur"
              className="w-full h-48 object-cover"
            />
            
            {/* Scanline effect */}
            <div className="absolute inset-0 scanlines" 
                style={{
                  background: 'linear-gradient(transparent 50%, rgba(0, 255, 65, 0.05) 50%)',
                  backgroundSize: '100% 4px',
                  pointerEvents: 'none',
                }}
            />
          </animated.div>
          
          {/* Image navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="w-8 h-8 bg-cyberpunk-purple/60 backdrop-blur-sm border border-cyberpunk-blue rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: '0 0 10px rgba(5, 217, 232, 0.5)' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="w-8 h-8 bg-cyberpunk-purple/60 backdrop-blur-sm border border-cyberpunk-blue rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: '0 0 10px rgba(5, 217, 232, 0.5)' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Image counter */}
          <div className="absolute bottom-2 right-2 bg-cyberpunk-purple/80 backdrop-blur-sm rounded px-2 py-1 text-xs font-mono text-cyberpunk-blue border border-cyberpunk-blue/50">
            {currentImage + 1}/{project.images.length}
          </div>
        </div>

        <div className="p-6 bg-cyberpunk-purple/90 backdrop-blur-lg">
          {/* Project header section */}
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1 text-cyberpunk-blue font-mono">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </div>
          
          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technologies.map((tech) => (
                <CyberBadge
                  key={tech}
                  label={tech}
                  color={
                    tech.includes('React') ? 'blue' : 
                    tech.includes('Node') ? 'green' : 
                    tech.includes('Python') ? 'yellow' : 
                    'pink'
                  }
                />
              ))}
            </div>
          </div>
          
          {/* Features as terminal-like list */}
          <div className="mt-4 bg-black/30 border border-cyberpunk-green/30 rounded p-3 font-mono text-sm mb-4">
            <div className="flex items-center space-x-2 mb-2 text-xs text-cyberpunk-green opacity-70">
              <Terminal size={12} />
              <span>features.json</span>
            </div>
            <div className="text-cyberpunk-green">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start">
                  <span className="mr-2 text-cyberpunk-pink">{">"}</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Project links */}
          <div className="flex gap-3 mt-4">
            <CyberButton
              href={project.github}
              variant="outline"
              className="flex-1 py-2"
            >
              <div className="flex items-center justify-center">
                <Github className="w-4 h-4 mr-2" />
                <span>Code</span>
              </div>
            </CyberButton>
            
            <CyberButton
              href={project.live}
              variant="primary"
              className="flex-1 py-2"
            >
              <div className="flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Live Demo</span>
              </div>
            </CyberButton>
          </div>
        </div>
      </animated.div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="relative py-20 bg-cyberpunk-purple">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green rounded-lg opacity-75 blur-sm animate-pulse" />
          <h2 className="relative text-3xl font-bold text-white bg-cyberpunk-purple px-6 py-3 rounded-lg font-mono">
            <span className="text-cyberpunk-blue">PROJECT</span>.<span className="text-cyberpunk-green">load</span>(<span className="text-cyberpunk-pink">"portfolio.exe"</span>)
          </h2>
        </div>

        {/* Terminal-like info bar */}
        <div className="mb-10 p-4 bg-black/50 border border-cyberpunk-blue/50 rounded-lg font-mono text-sm text-cyberpunk-green">
          <div className="flex items-center space-x-3">
            <Code2 size={16} className="text-cyberpunk-blue" />
            <span className="text-cyberpunk-blue">projects/</span>
            <span className="text-white">$</span>
            <span className="animate-pulse">_</span>
          </div>
          <p className="mt-2 text-gray-300">Displaying <span className="text-cyberpunk-yellow">{projects.length}</span> cybernetic projects with full neural interface compatibility.</p>
        </div>

        {/* Projects grid */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* GitHub contribution section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-blue opacity-50 blur-md rounded-xl"></div>
            <div className="relative p-6 bg-cyberpunk-purple/90 backdrop-blur-lg border border-cyberpunk-blue rounded-xl">
              <h3 className="text-xl font-mono mb-4 text-white flex items-center">
                <Github className="mr-2 text-cyberpunk-green" />
                <span>GitHub </span>
                <span className="text-cyberpunk-green ml-1">Matrix</span>
              </h3>
              <div className="p-4 bg-black/50 rounded-lg overflow-hidden">
                <div className="cyberpunk-scanline">
                  <GitHubCalendar 
                    username="Remy2404" 
                    colorScheme="dark" 
                    blockSize={12}
                    blockRadius={2}
                    fontSize={12}
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <CyberButton
                  href="https://github.com/Remy2404"
                  variant="outline"
                  className="inline-block px-8"
                >
                  <div className="flex items-center">
                    <span>View GitHub Profile</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </CyberButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(5, 217, 232, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(5, 217, 232, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </section>
  );
};

export default Projects;