import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Cpu, 
  Layers, 
  GitBranch,
  Terminal,
  Package,
  Server,
  Zap,
  Brain,
  Workflow
} from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiMysql,
  SiNextdotjs, 
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiAmazonwebservices,
  SiFirebase,
  SiGraphql,
  SiPrisma
} from 'react-icons/si';

interface TechStack {
  id: number;
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: Technology[];
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
  stats: {
    projects: number;
    experience: string;
  };
}

interface Technology {
  name: string;
  icon: React.ReactNode;
  level: number;
  description: string;
  projects: string[];
}

const techStacks: TechStack[] = [
  {
    id: 1,
    category: "Frontend",
    title: "Frontend Development",
    description: "Creating beautiful, responsive, and interactive user interfaces with modern frameworks and libraries.",
    icon: <Globe className="w-8 h-8" />,    color: {
      primary: "from-cyberpunk-blue to-cyberpunk-green",
      secondary: "from-cyberpunk-blue/20 to-cyberpunk-green/20",
      accent: "#05D9E8"
    },
    stats: {
      projects: 25,
      experience: "3+ years"
    },
    technologies: [
      {
        name: "React",
        icon: <FaReact className="w-6 h-6" />,
        level: 90,
        description: "Modern React with hooks, context, and state management",
        projects: ["Portfolio", "E-commerce", "Dashboard"]
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-6 h-6" />,
        level: 85,
        description: "Type-safe JavaScript for scalable applications",
        projects: ["Enterprise Apps", "Component Libraries"]
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-6 h-6" />,
        level: 80,
        description: "Full-stack React framework with SSR/SSG",
        projects: ["Blog Platform", "SaaS Dashboard"]
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-6 h-6" />,
        level: 95,
        description: "Utility-first CSS framework for rapid UI development",
        projects: ["All Recent Projects", "Component System"]
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="w-6 h-6" />,
        level: 85,
        description: "Production-ready motion library for React",
        projects: ["Portfolio", "Interactive Websites"]
      }
    ]
  },
  {
    id: 2,
    category: "Backend",
    title: "Backend Development",
    description: "Building robust, scalable server-side applications with modern technologies and best practices.",
    icon: <Server className="w-8 h-8" />,    color: {
      primary: "from-cyberpunk-green to-emerald-500",
      secondary: "from-cyberpunk-green/20 to-emerald-500/20",
      accent: "#00FF41"
    },
    stats: {
      projects: 20,
      experience: "3+ years"
    },
    technologies: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-6 h-6" />,
        level: 85,
        description: "JavaScript runtime for server-side development",
        projects: ["REST APIs", "Real-time Apps", "Microservices"]
      },
      {
        name: "Express",
        icon: <SiExpress className="w-6 h-6" />,
        level: 90,
        description: "Fast, unopinionated web framework for Node.js",
        projects: ["API Gateway", "Web Services"]
      },
      {
        name: "Python",
        icon: <FaPython className="w-6 h-6" />,
        level: 75,
        description: "Versatile language for web development and AI",
        projects: ["AI Chatbots", "Data Processing", "APIs"]
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="w-6 h-6" />,
        level: 70,
        description: "Query language for APIs with strong type system",
        projects: ["Data Fetching", "API Gateway"]
      }
    ]
  },
  {
    id: 3,
    category: "Database",
    title: "Database Management",
    description: "Designing and managing databases for optimal performance and data integrity.",
    icon: <Database className="w-8 h-8" />,    color: {
      primary: "from-cyberpunk-pink to-violet-500",
      secondary: "from-cyberpunk-pink/20 to-violet-500/20",
      accent: "#FF2A6D"
    },
    stats: {
      projects: 18,
      experience: "2+ years"
    },
    technologies: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-6 h-6" />,
        level: 80,
        description: "NoSQL database for flexible, scalable applications",
        projects: ["E-commerce", "Content Management", "Analytics"]
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6" />,
        level: 75,
        description: "Advanced relational database with rich features",
        projects: ["Enterprise Apps", "Data Analytics"]
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-6 h-6" />,
        level: 75,
        description: "Popular relational database management system",
        projects: ["Web Applications", "Legacy Systems"]
      },
      {
        name: "Redis",
        icon: <SiRedis className="w-6 h-6" />,
        level: 65,
        description: "In-memory data structure store for caching",
        projects: ["Session Management", "Caching Layer"]
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="w-6 h-6" />,
        level: 70,
        description: "Next-generation ORM for Node.js and TypeScript",
        projects: ["Type-safe Database Access", "Schema Management"]
      }
    ]
  },
  {
    id: 4,
    category: "DevOps",
    title: "DevOps & Cloud",
    description: "Implementing CI/CD pipelines, containerization, and cloud deployment strategies.",
    icon: <Cloud className="w-8 h-8" />,    color: {
      primary: "from-orange-500 to-cyberpunk-pink",
      secondary: "from-orange-500/20 to-cyberpunk-pink/20",
      accent: "#FF2A6D"
    },
    stats: {
      projects: 15,
      experience: "2+ years"
    },
    technologies: [
      {
        name: "Docker",
        icon: <FaDocker className="w-6 h-6" />,
        level: 70,
        description: "Containerization for consistent deployments",
        projects: ["Microservices", "Development Environment"]
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className="w-6 h-6" />,
        level: 60,
        description: "Container orchestration at scale",
        projects: ["Production Deployments", "Auto-scaling"]
      },
      {
        name: "AWS",
        icon: <SiAmazonwebservices className="w-6 h-6" />,
        level: 65,
        description: "Amazon Web Services for cloud infrastructure",
        projects: ["Web Hosting", "Serverless Functions"]
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="w-6 h-6" />,
        level: 75,
        description: "Google's app development platform",
        projects: ["Real-time Apps", "Authentication", "Hosting"]
      },
      {
        name: "Git",
        icon: <FaGitAlt className="w-6 h-6" />,
        level: 90,
        description: "Version control and collaboration",
        projects: ["All Projects", "Team Collaboration"]
      }
    ]
  },
  {
    id: 5,
    category: "AI/ML",
    title: "AI & Machine Learning",
    description: "Integrating artificial intelligence and machine learning capabilities into applications.",
    icon: <Brain className="w-8 h-8" />,    color: {
      primary: "from-cyberpunk-pink to-rose-500",
      secondary: "from-cyberpunk-pink/20 to-rose-500/20",
      accent: "#FF2A6D"
    },
    stats: {
      projects: 8,
      experience: "1+ years"
    },
    technologies: [
      {
        name: "Gemini AI",
        icon: <Zap className="w-6 h-6" />,
        level: 85,
        description: "Google's advanced AI model for various tasks",
        projects: ["Chatbots", "Image Analysis", "Text Generation"]
      },
      {
        name: "TensorFlow",
        icon: <Cpu className="w-6 h-6" />,
        level: 60,
        description: "Open-source machine learning framework",
        projects: ["Model Training", "Prediction Systems"]
      },
      {
        name: "OpenAI API",
        icon: <Brain className="w-6 h-6" />,
        level: 75,
        description: "GPT models and AI-powered applications",
        projects: ["AI Assistants", "Content Generation"]
      },
      {
        name: "LangChain",
        icon: <Workflow className="w-6 h-6" />,
        level: 65,
        description: "Framework for developing AI applications",
        projects: ["AI Workflows", "Document Processing"]
      }
    ]
  },
  {
    id: 6,
    category: "Mobile",
    title: "Mobile Development",
    description: "Building cross-platform mobile applications with modern frameworks and native performance.",
    icon: <Smartphone className="w-8 h-8" />,    color: {
      primary: "from-indigo-500 to-cyberpunk-blue",
      secondary: "from-indigo-500/20 to-cyberpunk-blue/20",
      accent: "#05D9E8"
    },
    stats: {
      projects: 5,
      experience: "1+ years"
    },
    technologies: [
      {
        name: "React Native",
        icon: <FaReact className="w-6 h-6" />,
        level: 70,
        description: "Cross-platform mobile development with React",
        projects: ["iOS Apps", "Android Apps", "Cross-platform"]
      },
      {
        name: "Flutter",
        icon: <Smartphone className="w-6 h-6" />,
        level: 60,
        description: "Google's UI toolkit for mobile development",
        projects: ["Cross-platform Apps", "UI/UX Design"]
      },
      {
        name: "Expo",
        icon: <Package className="w-6 h-6" />,
        level: 75,
        description: "Platform for making universal React apps",
        projects: ["Rapid Prototyping", "Development Workflow"]
      }
    ]
  }
];

const TechCard = ({ tech, index }: { tech: Technology; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >      <div className={`absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-green to-cyberpunk-blue rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-all duration-300`} />
      <div className="relative bg-cyberpunk-purple/90 backdrop-blur-sm p-4 rounded-lg border border-white/10 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyberpunk-blue"
          >
            {tech.icon}
          </motion.div>
          <div className="flex-1">
            <h4 className="text-white font-semibold">{tech.name}</h4>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-2 rounded-full bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-green`}
                />
              </div>
              <span className="text-cyberpunk-blue text-sm font-medium">{tech.level}%</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-3">{tech.description}</p>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-1"
            >
              <p className="text-xs text-gray-400 font-medium">Recent Projects:</p>
              {tech.projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-1 h-1 bg-cyberpunk-green rounded-full" />
                  <span className="text-xs text-gray-300">{project}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const StackCard = ({ stack, index }: { stack: TechStack; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="relative group"
    >      {/* Animated Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-green to-cyberpunk-blue rounded-xl opacity-30 group-hover:opacity-60 blur-sm transition-all duration-500" />
      
      {/* Card Content */}
      <div className="relative bg-cyberpunk-purple/90 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`p-3 rounded-lg bg-gradient-to-r ${stack.color.primary} text-white`}
            >
              {stack.icon}
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">{stack.title}</h3>
              <p className="text-cyberpunk-blue text-sm">{stack.category}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{stack.stats.projects}</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4">{stack.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                Experience: <span className="text-cyberpunk-green">{stack.stats.experience}</span>
              </div>
            </div>
            
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-green text-white rounded-lg text-sm font-medium"
            >
              {isExpanded ? 'Show Less' : 'View Technologies'}
            </motion.button>
          </div>
        </div>

        {/* Expandable Technologies Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <h4 className="text-white font-semibold mb-4">Technologies & Tools</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stack.technologies.map((tech, i) => (
                    <TechCard 
                      key={tech.name} 
                      tech={tech} 
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const TechStackHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', 'Frontend', 'Backend', 'Database', 'DevOps', 'AI/ML', 'Mobile'];
  
  const filteredStacks = selectedCategory === 'all' 
    ? techStacks 
    : techStacks.filter(stack => stack.category === selectedCategory);

  return (
    <section id="tech-stack" className="relative py-20 bg-cyberpunk-purple overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-green to-cyberpunk-blue rounded-lg opacity-75 blur-sm animate-pulse" />
            <h2 className="relative text-4xl font-bold text-white bg-cyberpunk-purple px-6 py-3 rounded-lg font-mono">
              TECH_STACK.dll
            </h2>
          </div>          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto font-mono"
          >
            <span className="text-cyberpunk-green opacity-80">{">"}</span> Explore<span className="text-cyberpunk-pink">.</span>technical_expertise<span className="text-cyberpunk-blue">()</span> <span className="animate-pulse">|</span>
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-mono font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-green text-white border border-cyberpunk-blue shadow-lg'
                  : 'bg-black/30 text-gray-300 hover:bg-black/50 border border-cyberpunk-blue/30'
              }`}
              style={{
                boxShadow: selectedCategory === category ? '0 0 15px rgba(5, 217, 232, 0.4)' : 'none',
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
              }}
            >
              <span className="tracking-wider">{category === 'all' ? 'ALL' : category.toUpperCase()}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Stacks Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredStacks.map((stack, index) => (
              <StackCard key={stack.id} stack={stack} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "20+", label: "Technologies", icon: <Code2 className="w-6 h-6" /> },
              { number: "6", label: "Specializations", icon: <Layers className="w-6 h-6" /> },
              { number: "90+", label: "Total Projects", icon: <GitBranch className="w-6 h-6" /> },
              { number: "4+", label: "Years Experience", icon: <Terminal className="w-6 h-6" /> }
            ].map((stat, index) => (              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-green to-cyberpunk-blue rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                <div 
                  className="relative bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-cyberpunk-blue/30"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                  }}
                >
                  {/* Corner brackets for cyberpunk effect */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyberpunk-yellow opacity-70"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyberpunk-yellow opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyberpunk-yellow opacity-70"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyberpunk-yellow opacity-70"></div>
                  
                  <div className="text-cyberpunk-blue mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-mono font-bold text-white mb-2 neon-text-pink">{stat.number}</div>
                  <div className="text-gray-400 font-mono tracking-wider">{stat.label.toUpperCase()}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Cyberpunk Grid Background */}
        <div 
          className="absolute inset-0 opacity-10 animate-crt-flicker" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 42, 109, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(5, 217, 232, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Scanlines Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-full w-full" style={{
            background: 'linear-gradient(transparent 50%, rgba(0, 255, 65, 0.05) 50%)',
            backgroundSize: '100% 4px',
            animation: 'scanline 4s linear infinite'
          }} />
        </div>
        
        {/* Digital Noise */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <div className="h-full w-full bg-noise" />
        </div>
        
        {/* Floating Particles */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${i % 3 === 0 ? '1' : '0.5'} h-${i % 3 === 0 ? '1' : '0.5'} ${
              i % 3 === 0 ? 'bg-cyberpunk-pink' : i % 3 === 1 ? 'bg-cyberpunk-blue' : 'bg-cyberpunk-green'
            }`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.4,
            }}
            animate={{
              y: ['-30px', '30px'],
              x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Matrix-style random characters (minimal amount) */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute font-mono text-xs text-cyberpunk-green opacity-40"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: -20,
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 800,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            {Math.random().toString(36).substr(2, 1)}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackHighlights;
