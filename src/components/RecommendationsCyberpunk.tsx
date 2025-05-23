import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

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
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="relative group h-full"
    >
      {/* Animated Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-yellow via-cyberpunk-cyan to-cyberpunk-yellow rounded-xl opacity-30 group-hover:opacity-70 blur-sm transition-all duration-500 animate-neonPulse" />
      
      {/* Card Content */}
      <div className="relative bg-cyberpunk-darker/90 backdrop-blur-xl p-6 rounded-xl h-full border border-cyberpunk-cyan/20 transition-all duration-300 cyberpunk-scanline">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 text-cyberpunk-cyan/30 group-hover:text-cyberpunk-cyan/60 transition-colors duration-300">
          <Quote className="w-6 h-6" />
        </div>

        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-yellow to-cyberpunk-cyan rounded-full opacity-60 blur-sm" />
            <img
              src={recommendation.avatar}
              alt={recommendation.name}
              className="relative w-16 h-16 rounded-full object-cover border-2 border-cyberpunk-cyan/20"
            />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-cyberpunk-heading font-semibold text-lg cyberpunk-text-glow">{recommendation.name}</h3>
            <p className="text-cyberpunk-cyan text-sm">{recommendation.role}</p>
            <p className="text-cyberpunk-text text-sm">{recommendation.company}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={recommendation.rating} />
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-cyberpunk-text mb-4 italic leading-relaxed">
          "{recommendation.text}"
        </blockquote>

        {/* Project Tag */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyberpunk-yellow/20 to-cyberpunk-cyan/20 rounded-full text-cyberpunk-yellow text-sm border border-cyberpunk-yellow/30"
        >
          <span className="w-2 h-2 bg-cyberpunk-cyan rounded-full mr-2 animate-pulse" />
          {recommendation.project}
        </motion.div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-cyan/5 to-cyberpunk-yellow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const Recommendations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="recommendations" className="relative py-20 bg-cyberpunk-background overflow-hidden">
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
            <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-yellow via-cyberpunk-cyan to-cyberpunk-yellow rounded-lg opacity-75 blur-sm animate-neonPulse" />
            <h2 className="relative text-4xl font-bold text-cyberpunk-heading cyberpunk-text-glow bg-cyberpunk-darker px-6 py-3 rounded-lg">
              Client Recommendations
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-cyberpunk-text mt-4 text-lg max-w-2xl mx-auto"
          >
            What clients and collaborators say about working with me
          </motion.p>
        </motion.div>

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
            {[
              { number: "30+", label: "Happy Clients" },
              { number: "50+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-yellow via-cyberpunk-cyan to-cyberpunk-yellow rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                <div className="relative bg-cyberpunk-darker/80 backdrop-blur-sm p-6 rounded-lg border border-cyberpunk-cyan/10 cyberpunk-box-glow">
                  <div className="text-3xl font-bold text-cyberpunk-cyan mb-2 cyberpunk-cyan-glow">{stat.number}</div>
                  <div className="text-cyberpunk-text">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-10 cyberpunk-grid-bg" 
        />
        
        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${i % 2 === 0 ? 'bg-cyberpunk-cyan' : 'bg-cyberpunk-yellow'}`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
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
    </section>
  );
};

export default Recommendations;
