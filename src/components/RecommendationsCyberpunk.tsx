import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Terminal, MessageSquare, Users, ThumbsUp } from 'lucide-react';
import { CyberCard, CyberBadge, CyberTerminal } from './CyberpunkElements';

interface Recommendation {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  project: string;
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Senior Software Engineer",
    company: "Google",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Ramy delivered exceptional work on our AI chatbot project. His technical expertise in Python and Gemini AI integration was outstanding. The bot achieved 95% user satisfaction and handled complex queries effortlessly.",
    project: "Gemini AI Chatbot"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CTO",
    company: "TechVenture Inc",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Working with Ramy on our e-commerce platform was a game-changer. He optimized our page load times by 60% and implemented a robust payment system that processed over 500 transactions seamlessly.",
    project: "E-Commerce Platform"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager",
    company: "Digital Solutions",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Ramy's Telegram bot integration exceeded our expectations. The real-time image analysis feature and multi-language support made it incredibly versatile. Over 1000+ users are actively engaged daily.",
    project: "Telegram-Gemini Bot"
  },
  {
    id: 4,
    name: "James Park",
    role: "Lead Developer",
    company: "StartupLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Exceptional full-stack development skills! Ramy's code quality is top-notch, and his ability to work with modern technologies like React, Node.js, and TypeScript is impressive. Highly recommended!",
    project: "Full-Stack Development"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Tech Lead",
    company: "Innovation Hub",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Ramy's expertise in AI integration and modern web technologies is remarkable. He consistently delivers high-quality solutions and maintains excellent communication throughout the project lifecycle.",
    project: "AI Integration Solutions"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Software Architect",
    company: "CloudTech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding work on multiple projects. Ramy's ability to learn new technologies quickly and implement scalable solutions is impressive. His Docker and cloud deployment skills are particularly noteworthy.",
    project: "Cloud Architecture"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 * i }}
      >
        <Star
          className={`w-4 h-4 ${
            i < rating ? 'text-cyberpunk-yellow fill-current animate-pulse-soft' : 'text-gray-400'
          }`}
        />
      </motion.div>
    ))}
  </div>
);

const RecommendationCard = ({ recommendation, index }: { recommendation: Recommendation; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
      className="h-full"
    >
      <CyberCard 
        glowColor={index % 3 === 0 ? 'pink' : index % 3 === 1 ? 'blue' : 'green'}
        hoverEffect={true}
        className="h-full"
      >
        <div className="p-5 relative">
          {/* Corner Quote Icon */}
          <div className="absolute top-4 right-4 text-cyberpunk-blue/30 group-hover:text-cyberpunk-blue/60 transition-colors duration-300">
            <Quote className="w-6 h-6" />
          </div>

          {/* Header with Avatar */}
          <div className="flex items-center space-x-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-yellow to-cyberpunk-blue rounded-full opacity-60 blur-sm" />
              <img
                src={recommendation.avatar}
                alt={recommendation.name}
                className="relative w-16 h-16 rounded-full object-cover border-2 border-cyberpunk-blue/30"
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-white font-mono font-semibold text-lg">{recommendation.name}</h3>
              <p className="text-cyberpunk-blue text-sm">{recommendation.role}</p>
              <p className="text-gray-400 text-sm">{recommendation.company}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <StarRating rating={recommendation.rating} />
          </div>

          {/* Testimonial Text */}
          <div className="mb-4 bg-black/30 border border-cyberpunk-green/20 rounded p-3 min-h-[120px]">
            <div className="text-xs text-cyberpunk-green mb-1 flex items-center">
              <Terminal className="w-3 h-3 mr-1" />
              <span>client_feedback.txt</span>
            </div>
            <blockquote className="text-gray-300 leading-relaxed italic">
              "{recommendation.text}"
            </blockquote>
          </div>

          {/* Project Badge */}
          <CyberBadge 
            label={recommendation.project}
            color={index % 3 === 0 ? 'pink' : index % 3 === 1 ? 'blue' : 'green'}
            icon={<MessageSquare className="w-3 h-3" />}
          />
        </div>
      </CyberCard>
    </motion.div>
  );
};

const Recommendations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="recommendations" className="relative py-20 bg-cyberpunk-purple overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green rounded-lg opacity-75 blur-sm animate-pulse" />
            <h2 className="relative text-3xl font-bold text-white bg-cyberpunk-purple px-6 py-3 rounded-lg font-mono">
              <span className="text-cyberpunk-pink">CLIENT</span>.<span className="text-cyberpunk-green">loadFeedback</span>(<span className="text-cyberpunk-blue">"all"</span>)
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto"
          >
            Feedback from clients and collaborators on project delivery and impact
          </motion.p>
        </motion.div>

        {/* Terminal-like status banner */}
        <CyberTerminal title="client_feedback.sys" className="mb-8">
          <div className="text-sm space-y-2">
            <div className="flex items-start space-x-2">
              <span className="text-cyberpunk-green">$</span>
              <div>
                <span className="animate-pulse mr-1">_</span>
                <span className="text-cyberpunk-blue">system</span>.<span className="text-cyberpunk-pink">analyzeClientData</span>()<span className="animate-pulse">;</span>
              </div>
            </div>
            <p className="text-gray-400">Scanning project history and client satisfaction metrics...</p>
            <div className="flex justify-between items-center mt-2 text-sm">
              <div className="flex items-center">
                <span className="text-cyberpunk-green mr-2">Projects Completed:</span> 
                <span className="text-cyberpunk-blue">50+</span>
              </div>
              <div className="flex items-center">
                <span className="text-cyberpunk-green mr-2">Client Satisfaction:</span> 
                <span className="text-cyberpunk-pink">95%</span>
              </div>
              <div className="flex items-center">
                <span className="text-cyberpunk-green mr-2">Returning Clients:</span> 
                <span className="text-cyberpunk-yellow">87%</span>
              </div>
            </div>
          </div>
        </CyberTerminal>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CyberCard
              glowColor="pink"
              className="py-8 px-4 text-center"
            >
              <div className="text-cyberpunk-pink mb-2 flex justify-center">
                <Users size={20} />
              </div>
              <div className="text-3xl font-bold text-cyberpunk-pink mb-2 font-mono animate-neon">
                30+
              </div>
              <div className="text-gray-300 font-mono">Happy Clients</div>
            </CyberCard>
            
            <CyberCard
              glowColor="blue"
              className="py-8 px-4 text-center"
            >
              <div className="text-cyberpunk-blue mb-2 flex justify-center">
                <Terminal size={20} />
              </div>
              <div className="text-3xl font-bold text-cyberpunk-blue mb-2 font-mono animate-neon">
                50+
              </div>
              <div className="text-gray-300 font-mono">Projects Completed</div>
            </CyberCard>
            
            <CyberCard
              glowColor="green"
              className="py-8 px-4 text-center"
            >
              <div className="text-cyberpunk-green mb-2 flex justify-center">
                <ThumbsUp size={20} />
              </div>
              <div className="text-3xl font-bold text-cyberpunk-green mb-2 font-mono animate-neon">
                95%
              </div>
              <div className="text-gray-300 font-mono">Client Satisfaction</div>
            </CyberCard>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 42, 109, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 42, 109, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${i % 2 === 0 ? 'bg-cyberpunk-blue' : 'bg-cyberpunk-pink'}`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.4,
            }}
            animate={{
              y: ['-20px', '20px'],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Digital circuit decorations */}
      <div className="absolute bottom-10 right-5 w-40 h-40 opacity-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path 
            d="M10,10 L90,10 L90,90 L10,90 Z M30,10 L30,90 M50,10 L50,90 M70,10 L70,90 M10,30 L90,30 M10,50 L90,50 M10,70 L90,70" 
            stroke="#FF2A6D" 
            strokeWidth="1"
            fill="none"
          />
          <circle cx="30" cy="30" r="3" fill="#FF2A6D" />
          <circle cx="50" cy="50" r="3" fill="#FF2A6D" />
          <circle cx="70" cy="70" r="3" fill="#FF2A6D" />
        </svg>
      </div>
    </section>
  );
};

export default Recommendations;
