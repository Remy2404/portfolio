import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, ShoppingCart, MessageSquare, Code, GitBranch, Zap } from 'lucide-react';

const experiences = [
  {
    title: 'Telegram-Gemini-Bot Developer',
    period: '2023 - Present',
    description: 'Developed a sophisticated Telegram bot integrated with Google\'s Gemini AI, featuring real-time image analysis and natural language processing capabilities.',
    technologies: ['Python', 'Gemini AI API', 'Telegram Bot API'],
    icon: <Bot className="w-8 h-8" />,
    achievements: [
      'Implemented advanced image recognition features',
      'Optimized response time by 40%',
      'Served 1000+ active users'
    ]
  },
  {
    title: 'Gemini AI Chatbot Project',
    period: '2023',
    description: 'Created an advanced AI chatbot utilizing Google\'s Gemini technology, implementing features for context-aware conversations and multi-modal interactions.',
    technologies: ['JavaScript', 'Node.js', 'Gemini AI'],
    icon: <MessageSquare className="w-8 h-8" />,
    achievements: [
      'Developed context-aware conversation system',
      'Integrated multi-modal processing capabilities',
      'Achieved 95% user satisfaction rate'
    ]
  },
  {
    title: 'E-Commerce Platform',
    period: '2023',
    description: 'Built a full-stack e-commerce platform with features including user authentication, product management, and secure payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: <ShoppingCart className="w-8 h-8" />,
    achievements: [
      'Implemented secure payment gateway',
      'Reduced page load time by 60%',
      'Processed 500+ transactions'
    ]
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="relative py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-75 blur-sm animate-pulse" />
          <h2 className="relative text-3xl font-bold text-white text-center bg-[#0A0A0A] px-4 py-2 rounded-lg">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line with animated gradient */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1">
            <div className="h-full w-full bg-gradient-to-b from-[#FF0066] via-[#00FF8C] to-[#00FFFF] animate-pulse" />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 md:flex ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 relative">
                <div
                  className={`relative group ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  }`}
                >
                  {/* Card Background with RGB Gradient */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                  
                  {/* Card Content */}
                  <div className="relative bg-[#0A0A0A]/80 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 group-hover:scale-[1.02]">
                    {/* Header with Icon */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-[#00FFFF] transform group-hover:scale-110 transition-transform duration-300">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-[#00FFFF]">{exp.period}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center space-x-2 text-gray-300"
                          >
                            <Zap className="w-4 h-4 text-[#00FF8C]" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-[#FF0066]/20 to-[#00FF8C]/20 rounded-full text-[#00FFFF] text-sm flex items-center space-x-1"
                        >
                          <Code className="w-3 h-3" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    {/* Interactive Elements */}
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#00FFFF] cursor-pointer"
                      >
                        <GitBranch className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Animated Timeline Dot */}
                <div
                  className={`absolute top-6 md:top-1/2 md:transform md:-translate-y-1/2
                    w-4 h-4 rounded-full bg-[#00FFFF] border-4 border-[#0A0A0A]
                    left-[-8px] md:left-auto
                    ${index % 2 === 0 ? 'md:left-[-8px]' : 'md:right-[-8px]'}
                    animate-pulse
                  `}
                >
                  <div className="absolute inset-0 rounded-full bg-[#00FFFF] animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
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
      </div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00FFFF]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.4,
          }}
          animate={{
            y: ['-20px', '20px'],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
};

export default Experience;