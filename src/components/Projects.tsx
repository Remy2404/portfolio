import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import GitHubCalendar from 'react-github-calendar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
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
        className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden transition-colors duration-300"
      >
        <div className="relative h-48 overflow-hidden">
          <animated.div style={imageSpringProps}>
            <LazyLoadImage
              src={project.images[currentImage]}
              alt={project.title}
              effect="blur"
              className="w-full h-full object-cover"
            />
          </animated.div>
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-between px-4 bg-black/20">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          )}
        </div>
        <div className="p-6">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold text-gray-900 dark:text-white mb-3"
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          <div className="space-y-4 mb-4">
            <h4 className="font-medium text-gray-900 dark:text-white">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="px-3 py-1 bg-blue-500/20 dark:bg-blue-400/20 rounded-full text-blue-600 dark:text-blue-300 text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.github}
              className="text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.live}
              className="text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </animated.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#1E293B]/30 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 p-6 bg-white/5 dark:bg-gray-800/50 backdrop-blur-lg rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            GitHub Contributions
          </h3>
          <GitHubCalendar
            username="Remy2404"
            colorScheme="dark"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;