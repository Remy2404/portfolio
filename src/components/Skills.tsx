import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiMongodb, 
  SiMysql,
  SiNextdotjs, 
  SiCplusplus 
} from 'react-icons/si';
import { Terminal, Code, Cpu } from 'lucide-react';
import { CyberCard, CyberBadge, CyberTerminal } from './CyberpunkElements';

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, icon: <SiJavascript className="w-8 h-8" /> },
  { name: 'TypeScript', level: 85, icon: <SiTypescript className="w-8 h-8" /> },
  { name: 'React.js', level: 90, icon: <FaReact className="w-8 h-8" /> },
  { name: 'Node.js', level: 85, icon: <FaNodeJs className="w-8 h-8" /> },
  { name: 'Next.js', level: 80, icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: 'Python', level: 75, icon: <FaPython className="w-8 h-8" /> },
  { name: 'Java', level: 70, icon: <FaJava className="w-8 h-8" /> },
  { name: 'C/C++', level: 65, icon: <SiCplusplus className="w-8 h-8" /> },
  { name: 'MongoDB', level: 80, icon: <SiMongodb className="w-8 h-8" /> },
  { name: 'MySQL', level: 75, icon: <SiMysql className="w-8 h-8" /> },
  { name: 'Docker', level: 70, icon: <FaDocker className="w-8 h-8" /> }
];

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Random glitch effect
  const shouldGlitch = index % 3 === 0;
  
  // Calculate skill level color based on proficiency
  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-pink';
    if (level >= 80) return 'from-cyberpunk-blue via-cyberpunk-green to-cyberpunk-blue';
    if (level >= 70) return 'from-cyberpunk-yellow via-cyberpunk-green to-cyberpunk-yellow';
    return 'from-cyberpunk-green via-cyberpunk-blue to-cyberpunk-green';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CyberCard 
        glowColor={index % 4 === 0 ? 'pink' : 
                 index % 4 === 1 ? 'blue' : 
                 index % 4 === 2 ? 'green' : 'yellow'}
        className="h-full"
      >
        <div className="p-5">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`text-cyberpunk-${index % 4 === 0 ? 'pink' : 
                          index % 4 === 1 ? 'blue' : 
                          index % 4 === 2 ? 'green' : 'yellow'} transform group-hover:scale-110 transition-transform duration-300`}>
              {skill.icon}
            </div>
            <div>
              <h3 className={`text-white font-semibold font-mono ${shouldGlitch ? 'animate-neon' : ''}`}>
                {skill.name}
              </h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-400 mr-2 font-mono">proficiency:</span>
                <CyberBadge 
                  label={`${skill.level}%`} 
                  color={index % 4 === 0 ? 'pink' : 
                        index % 4 === 1 ? 'blue' : 
                        index % 4 === 2 ? 'green' : 'yellow'} 
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="relative h-2 bg-black/50 rounded-full overflow-hidden border border-cyberpunk-blue/30">
              {/* Background noise effect */}
              <div className="absolute inset-0 opacity-20" 
                  style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                  }}
              />
              
              {/* Animated skill bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)}`}
              >
                {/* Animated shine effect */}
                <div 
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                    animation: 'shimmer 2s infinite linear'
                  }}
                />
              </motion.div>
              
              {/* Pixel grid overlay */}
              <div className="absolute inset-0 opacity-10" 
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 255, 140, 0.2) 1px, transparent 1px), 
                                    linear-gradient(to bottom, rgba(0, 255, 140, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '4px 4px',
                  }}
              />
            </div>
            
            {/* Skill level indicators */}
            <div className="flex justify-between items-center mt-1">
              <div className="w-1 h-3 border-r border-cyberpunk-green/30"></div>
              <div className="w-1 h-2 border-r border-cyberpunk-green/30"></div>
              <div className="w-1 h-2 border-r border-cyberpunk-green/30"></div>
              <div className="w-1 h-2 border-r border-cyberpunk-green/30"></div>
              <div className="w-1 h-3 border-r border-cyberpunk-green/30"></div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-cyberpunk-green/70">0%</span>
              <span className="text-xs text-cyberpunk-green/70">100%</span>
            </div>
          </div>
        </div>
      </CyberCard>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Group skills by category
  const frontendSkills = skills.filter(s => ['JavaScript', 'TypeScript', 'React.js', 'Next.js'].includes(s.name));
  const backendSkills = skills.filter(s => ['Node.js', 'Python', 'MongoDB', 'MySQL'].includes(s.name));
  const otherSkills = skills.filter(s => ['Java', 'C/C++', 'Docker'].includes(s.name));

  return (
    <section id="skills" className="relative py-20 bg-cyberpunk-purple" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-green to-cyberpunk-blue rounded-lg opacity-75 blur-sm animate-pulse" />
          <h2 className="relative text-3xl font-bold text-white bg-cyberpunk-purple px-6 py-3 rounded-lg font-mono">
            <span className="text-cyberpunk-blue">NEURAL</span>.<span className="text-cyberpunk-green">loadCapabilities</span>(<span className="text-cyberpunk-pink">"*"</span>)
          </h2>
        </div>

        {/* Terminal header */}
        <CyberTerminal title="skill_matrix.sys" className="mb-8">
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <span className="text-cyberpunk-green">$</span>
              <div>
                <span className="animate-pulse mr-1">_</span>
                <span className="text-cyberpunk-blue">system</span>.<span className="text-cyberpunk-pink">analyze</span>()<span className="animate-pulse">;</span>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p>Analysis complete. Subject demonstrates proficiency in {skills.length} distinct technologies.</p>
              <p>Neural interface compatibility: <span className="text-cyberpunk-green">OPTIMAL</span></p>
            </div>
            <div className="text-xs text-cyberpunk-blue mt-2">
              <p>// Displaying skill categories: Frontend | Backend | Infrastructure</p>
            </div>
          </div>
        </CyberTerminal>
      
        <div className="space-y-12">
          {/* Frontend Skills */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-4"
            >
              <h3 className="text-xl font-mono text-cyberpunk-blue flex items-center">
                <Code className="w-5 h-5 mr-2" />
                FRONTEND
              </h3>
              <div className="ml-4 h-px bg-gradient-to-r from-cyberpunk-blue to-transparent flex-grow"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center mb-4"
            >
              <h3 className="text-xl font-mono text-cyberpunk-green flex items-center">
                <Terminal className="w-5 h-5 mr-2" />
                BACKEND
              </h3>
              <div className="ml-4 h-px bg-gradient-to-r from-cyberpunk-green to-transparent flex-grow"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + frontendSkills.length} />
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center mb-4"
            >
              <h3 className="text-xl font-mono text-cyberpunk-yellow flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                INFRASTRUCTURE
              </h3>
              <div className="ml-4 h-px bg-gradient-to-r from-cyberpunk-yellow to-transparent flex-grow"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {otherSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + frontendSkills.length + backendSkills.length} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Circuit-like decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 opacity-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path 
            d="M10,30 L40,30 L40,10 L60,10 L60,30 L90,30 L90,50 L60,50 L60,90 L40,90 L40,50 L10,50 Z" 
            stroke="#00FF41" 
            strokeWidth="1"
            fill="none"
          />
          <circle cx="10" cy="30" r="3" fill="#00FF41" />
          <circle cx="40" cy="10" r="3" fill="#00FF41" />
          <circle cx="90" cy="50" r="3" fill="#00FF41" />
          <circle cx="40" cy="90" r="3" fill="#00FF41" />
        </svg>
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyberpunk-blue"
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

export default Skills;