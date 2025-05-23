import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Code, 
  GraduationCap, 
  Briefcase,
  Rocket,
  Award,
  Target,
  Zap
} from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  location?: string;
  type: 'education' | 'work' | 'project' | 'achievement';
  icon: React.ReactNode;
  technologies?: string[];
  highlights?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2021",
    title: "Started IT Engineering Journey",
    subtitle: "Royal University of Phnom Penh",
    description: "Began my Bachelor's degree in IT Engineering, diving deep into programming fundamentals, algorithms, and software development principles.",
    location: "Phnom Penh, Cambodia",
    type: "education",
    icon: <GraduationCap className="w-6 h-6" />,
    technologies: ["C/C++", "Java", "Python", "Data Structures"],
    highlights: ["Dean's List", "Programming Competition Winner"]
  },
  {
    id: 2,
    year: "2022",
    title: "First Full-Stack Project",
    subtitle: "E-Commerce Platform Development",
    description: "Built my first major full-stack application using the MERN stack, implementing user authentication, payment processing, and inventory management.",
    type: "project",
    icon: <Code className="w-6 h-6" />,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    highlights: ["500+ Transactions Processed", "60% Performance Improvement"]
  },
  {
    id: 3,
    year: "2023",
    title: "AI Integration Specialist",
    subtitle: "Gemini AI Projects",
    description: "Specialized in AI integration, developing multiple chatbot solutions using Google's Gemini AI, including Telegram bots and web-based assistants.",
    type: "work",
    icon: <Rocket className="w-6 h-6" />,
    technologies: ["Python", "Gemini AI", "Telegram API", "JavaScript"],
    highlights: ["1000+ Active Users", "95% User Satisfaction", "Multi-language Support"]
  },
  {
    id: 4,
    year: "2023",
    title: "Open Source Contributions",
    subtitle: "GitHub Projects & Community",
    description: "Started contributing to open-source projects and building tools for the developer community, focusing on AI-powered solutions and web development.",
    type: "achievement",
    icon: <Trophy className="w-6 h-6" />,
    technologies: ["TypeScript", "React", "Node.js", "Docker"],
    highlights: ["50+ GitHub Stars", "Multiple Open Source Contributions"]
  },
  {
    id: 5,
    year: "2024",
    title: "Full-Stack Developer",
    subtitle: "Freelance & Contract Work",
    description: "Established myself as a full-stack developer, working with clients globally on various projects ranging from web applications to AI-powered solutions.",
    type: "work",
    icon: <Briefcase className="w-6 h-6" />,
    technologies: ["React", "Next.js", "TypeScript", "MongoDB", "Docker"],
    highlights: ["30+ Happy Clients", "50+ Projects Completed", "International Clients"]
  },
  {
    id: 6,
    year: "2024",
    title: "Advanced AI Development",
    subtitle: "Specialized AI Solutions",
    description: "Advanced into sophisticated AI development, creating multi-modal applications with real-time processing capabilities and complex integrations.",
    type: "project",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["Gemini AI", "Python", "FastAPI", "WebSockets"],
    highlights: ["Real-time Processing", "Image Analysis", "Context-aware Responses"]
  },
  {
    id: 7,
    year: "2025",
    title: "Portfolio & Expansion",
    subtitle: "Modern Web Development",
    description: "Expanding into modern web technologies and building a comprehensive portfolio showcasing advanced animations, 3D graphics, and interactive experiences.",
    type: "achievement",
    icon: <Target className="w-6 h-6" />,
    technologies: ["React", "TypeScript", "Framer Motion", "Three.js", "Tailwind CSS"],
    highlights: ["Modern UI/UX", "Advanced Animations", "Responsive Design"]
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'education':
      return 'from-blue-500 to-indigo-600';
    case 'work':
      return 'from-green-500 to-emerald-600';
    case 'project':
      return 'from-purple-500 to-violet-600';
    case 'achievement':
      return 'from-yellow-500 to-orange-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'education':
      return <GraduationCap className="w-4 h-4" />;
    case 'work':
      return <Briefcase className="w-4 h-4" />;
    case 'project':
      return <Code className="w-4 h-4" />;
    case 'achievement':
      return <Award className="w-4 h-4" />;
    default:
      return <Calendar className="w-4 h-4" />;
  }
};

const TimelineCard = ({ event, index, isLeft }: { event: TimelineEvent; index: number; isLeft: boolean }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: isLeft ? -100 : 100,
        y: 50
      }}
      animate={inView ? { 
        opacity: 1, 
        x: 0,
        y: 0
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className={`relative flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} items-center w-full mb-16 group`}
    >
      {/* Timeline Line Connection */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF0066] via-[#00FF8C] to-[#00FFFF] opacity-30 -z-10" />

      {/* Content Card */}
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <motion.div
          whileHover={{ 
            scale: 1.02,
            y: -5
          }}
          className="relative"
        >
          {/* Animated Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-xl opacity-30 group-hover:opacity-60 blur-sm transition-all duration-500" />
          
          {/* Card Content */}
          <div className="relative bg-[#0A0A0A]/90 backdrop-blur-xl p-6 rounded-xl border border-white/10">
            {/* Header */}
            <div className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'} mb-4`}>
              <div className={`flex items-center space-x-3 ${isLeft ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(event.type)} text-white`}>
                  {event.icon}
                </div>
                <div className={`flex items-center space-x-2 ${isLeft ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {getTypeIcon(event.type)}
                  <span className="text-[#00FFFF] text-sm capitalize">{event.type}</span>
                </div>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className={`mb-4 ${isLeft ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
              <p className="text-[#00FF8C] font-medium">{event.subtitle}</p>
              {event.location && (
                <div className={`flex items-center mt-2 text-gray-400 text-sm ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>

            {/* Technologies */}
            {event.technologies && (
              <div className="mb-4">
                <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  {event.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="px-2 py-1 bg-gradient-to-r from-[#FF0066]/20 to-[#00FF8C]/20 rounded-md text-[#00FFFF] text-xs border border-[#00FFFF]/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {event.highlights && (
              <div className="space-y-2">
                {event.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`flex items-center text-sm text-gray-300 ${isLeft ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`w-2 h-2 bg-[#00FF8C] rounded-full ${isLeft ? 'ml-2' : 'mr-2'} animate-pulse`} />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Central Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={inView ? { scale: 1, rotate: 360 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.2 + 0.3,
            type: "spring",
            stiffness: 200
          }}
          className="relative"
        >
          {/* Outer Ring */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] p-1 animate-pulse">
            {/* Inner Node */}
            <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center border-2 border-white/20">
              <div className="text-[#00FFFF] font-bold text-sm">{event.year}</div>
            </div>
          </div>
          
          {/* Pulsing Effect */}
          <div className="absolute inset-0 rounded-full bg-[#00FFFF] opacity-20 animate-ping" />
        </motion.div>
      </div>

      {/* Year Label for Mobile */}
      <div className={`md:hidden absolute top-0 ${isLeft ? 'right-0' : 'left-0'} transform ${isLeft ? 'translate-x-full' : '-translate-x-full'} px-4`}>
        <div className="bg-gradient-to-r from-[#FF0066] to-[#00FF8C] text-white px-3 py-1 rounded-full text-sm font-bold">
          {event.year}
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="timeline" className="relative py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-75 blur-sm animate-pulse" />
            <h2 className="relative text-4xl font-bold text-white bg-[#0A0A0A] px-6 py-3 rounded-lg">
              My Journey
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto"
          >
            Key milestones and achievements in my development career
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF0066] via-[#00FF8C] to-[#00FFFF] opacity-50" />

          {/* Timeline Events */}
          <div className="space-y-0">
            {timelineEvents.map((event, index) => (
              <TimelineCard
                key={event.id}
                event={event}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Timeline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "50+", label: "Projects Built" },
              { number: "20+", label: "Technologies Mastered" },
              { number: "30+", label: "Satisfied Clients" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                <div className="relative bg-[#0A0A0A]/80 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  <div className="text-3xl font-bold text-[#00FFFF] mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
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
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 140, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 140, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FFFF]"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.4,
            }}
            animate={{
              y: ['-30px', '30px'],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
