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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
      <div className="relative bg-[#0A0A0A]/80 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-[#00FFFF] transform group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <h3 className="text-white font-semibold">{skill.name}</h3>
        </div>
        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF0066] to-[#00FF8C] rounded-full"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-400">Proficiency</span>
          <span className="text-[#00FFFF] font-medium">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-75 blur-sm animate-pulse" />
          <h2 className="relative text-3xl font-bold text-white text-center bg-[#0A0A0A] px-4 py-2 rounded-lg">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
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

export default Skills;