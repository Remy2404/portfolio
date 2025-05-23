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
  Zap,
  Terminal
} from 'lucide-react';
import { CyberBadge } from './CyberpunkElements';

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
      return 'cyberpunk-blue';
    case 'work':
      return 'cyberpunk-green';
    case 'project':
      return 'cyberpunk-pink';
    case 'achievement':
      return 'cyberpunk-yellow';
    default:
      return 'cyberpunk-blue';
  }
};

const getTypeGlowColor = (type: string) => {
  switch (type) {
    case 'education':
      return 'from-cyberpunk-blue to-cyberpunk-purple';
    case 'work':
      return 'from-cyberpunk-green to-cyberpunk-blue';
    case 'project':
      return 'from-cyberpunk-pink to-cyberpunk-purple';
    case 'achievement':
      return 'from-cyberpunk-yellow to-cyberpunk-pink';
    default:
      return 'from-cyberpunk-blue to-cyberpunk-purple';
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

  const eventColor = getTypeColor(event.type);
  const eventGlow = getTypeGlowColor(event.type);

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        x: isLeft ? -50 : 50,
        y: 20
      }}
      animate={inView ? { 
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative mb-8 ${isLeft ? 'md:text-right' : ''}`}
    >
      {/* Timeline Card */}
      <div className="relative">
        {/* Glow Effect */}
        <div 
          className={`absolute -inset-1 bg-gradient-to-r ${eventGlow} rounded-xl opacity-60 blur-sm`}
          style={{
            animation: 'glow-pulse 2s ease-in-out infinite alternate'
          }}
        ></div>
        
        <div className={`relative p-5 border-2 border-${eventColor} bg-cyberpunk-purple/90 backdrop-blur-md rounded-xl`}>
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyberpunk-yellow opacity-70"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyberpunk-yellow opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyberpunk-yellow opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyberpunk-yellow opacity-70"></div>
          
          {/* Card content */}
          <div className={`flex flex-col ${isLeft ? 'md:items-end' : ''}`}>
            <div className="flex items-center mb-2 space-x-2">
              <div className={`text-${eventColor} font-mono text-xl`}>{event.year}</div>
            </div>
            
            <h3 className={`text-white font-bold text-lg mb-1 font-mono`}>{event.title}</h3>
            <p className={`text-${eventColor} mb-3`}>{event.subtitle}</p>
            
            {/* Event type badge */}
            <div className={`mb-3 ${isLeft ? 'md:self-end' : 'self-start'}`}>
              <CyberBadge
                label={event.type.toUpperCase()}
                color={
                  event.type === 'education' ? 'blue' : 
                  event.type === 'work' ? 'green' :
                  event.type === 'project' ? 'pink' : 'yellow'
                }
                icon={getTypeIcon(event.type)}
              />
            </div>
            
            {/* Terminal-like description */}
            <div className="bg-black/50 border border-gray-700 rounded p-3 font-mono text-sm mb-3">
              <div className="flex items-center space-x-2 mb-2 text-xs opacity-70">
                <Terminal size={10} className={`text-${eventColor}`} />
                <span className={`text-${eventColor}`}>{event.type}_log.txt</span>
              </div>
              <p className="text-gray-300">
                {event.description}
              </p>
              {event.location && (
                <div className="flex items-center mt-2 text-xs text-gray-400">
                  <MapPin size={10} className="mr-1" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
            
            {/* Technologies */}
            {event.technologies && (
              <div className="mb-3">
                <div className="text-xs text-gray-400 mb-1 font-mono"># TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {event.technologies.map(tech => (
                    <span 
                      key={tech}
                      className={`px-2 py-1 text-xs border border-${eventColor}/30 rounded bg-${eventColor}/10 text-${eventColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Highlights */}
            {event.highlights && (
              <div>
                <div className="text-xs text-gray-400 mb-1 font-mono"># HIGHLIGHTS</div>
                <div className="space-y-1">
                  {event.highlights.map(highlight => (
                    <div 
                      key={highlight} 
                      className="flex items-start"
                    >
                      <span className={`text-${eventColor} mr-2`}>›</span>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="relative py-20 bg-cyberpunk-purple">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative inline-block mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-green to-cyberpunk-blue rounded-lg opacity-75 blur-sm animate-pulse" />
          <h2 className="relative text-3xl font-bold text-white bg-cyberpunk-purple px-6 py-3 rounded-lg font-mono">
            <span className="text-cyberpunk-yellow">CHRONO</span>.<span className="text-cyberpunk-green">view</span>(<span className="text-cyberpunk-pink">"memory_fragments"</span>)
          </h2>
        </div>

        {/* Intro Text */}
        <div className="mx-auto max-w-3xl mb-16 bg-black/30 border border-cyberpunk-blue/30 p-6 rounded-lg font-mono">
          <p className="text-cyberpunk-green mb-2">$ ./execute timeline_render.sh</p>
          <p className="text-gray-300 mb-2">Accessing neural memory database...</p>
          <div className="flex items-center space-x-2">
            <span className="text-cyberpunk-blue">STATUS:</span>
            <span className="bg-cyberpunk-blue/20 text-cyberpunk-blue font-mono px-2 py-0.5 text-xs rounded">
              RENDERING TIMELINE DATA
            </span>
            <div className="w-2 h-2 rounded-full bg-cyberpunk-blue animate-ping"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <div className="h-full bg-gradient-to-b from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green relative">
              {/* Digital pulse effect on the timeline */}
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyberpunk-pink to-transparent opacity-70"
                style={{
                  animation: 'pulse-soft 3s infinite',
                  transform: 'translateY(0)',
                }}
              ></div>
              
              {/* Background grid on the center line */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(0deg, transparent 98%, rgba(0, 255, 65, 0.5) 100%)`,
                  backgroundSize: '100% 10px',
                }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timelineEvents.map((event, index) => {
              // Determine if event should be on left or right side of timeline
              const isLeft = index % 2 === 0;
              
              return (
                <React.Fragment key={event.id}>
                  {/* Add empty divs for proper alignment in the grid */}
                  {isLeft ? (
                    <>
                      <TimelineCard event={event} index={index} isLeft={true} />
                      <div className="hidden md:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block"></div>
                      <TimelineCard event={event} index={index} isLeft={false} />
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Timeline end marker */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 bg-cyberpunk-pink border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
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
      </div>

      {/* Digital circuit decorations */}
      <div className="absolute bottom-10 left-5 w-40 h-40 opacity-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path 
            d="M0,40 L30,40 L30,10 L60,10 L60,40 L100,40 M60,40 L60,100" 
            stroke="#FF2A6D" 
            strokeWidth="1"
            fill="none"
          />
          <circle cx="30" cy="40" r="3" fill="#FF2A6D" />
          <circle cx="60" cy="10" r="3" fill="#FF2A6D" />
          <circle cx="60" cy="40" r="3" fill="#FF2A6D" />
          <circle cx="60" cy="70" r="3" fill="#FF2A6D" />
        </svg>
      </div>
    </section>
  );
};

export default Timeline;
