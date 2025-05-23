
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Brain, Coffee } from 'lucide-react';
import { CyberTerminal } from './CyberpunkElements';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const stats = [
    { icon: <Code2 className="w-6 h-6" />, label: 'Projects Completed', value: '50+' },
    { icon: <Coffee className="w-6 h-6" />, label: 'Cups of Coffee', value: '1000+' },
    { icon: <Brain className="w-6 h-6" />, label: 'Technologies Learned', value: '20+' },
    { icon: <Rocket className="w-6 h-6" />, label: 'Happy Clients', value: '30+' }
  ];

  return (
    <section id="about" className="py-20 bg-cyberpunk-purple relative overflow-hidden cyberpunk-crt">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Title */}
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-green to-cyberpunk-blue rounded-lg opacity-75 blur-sm animate-pulse" />
            <h2 className="relative text-3xl font-bold text-white bg-cyberpunk-purple px-6 py-3 rounded-lg font-mono">
              <span className="text-cyberpunk-blue">SYSTEM</span>.<span className="text-cyberpunk-green">get</span>(<span className="text-cyberpunk-pink">"about.exe"</span>)
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <CyberTerminal title="bio_data.log" className="h-full">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-cyberpunk-green">$</span>
                    <div>
                      <span className="animate-pulse mr-1">_</span>
                      <span className="text-cyberpunk-yellow">identity</span>.<span className="text-cyberpunk-pink">print</span>()<span className="animate-pulse">;</span>
                    </div>
                  </div>
                  
                  <div className="border border-cyberpunk-green/30 rounded p-3 bg-black/30">
                    <p className="text-gray-300 leading-relaxed mb-3">
                      I'm a passionate <span className="text-cyberpunk-pink font-bold">Full-Stack Developer</span> based in Phnom Penh, Cambodia, with a burning desire to create innovative digital solutions. My journey in tech is driven by curiosity and a commitment to excellence.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Currently pursuing my <span className="text-cyberpunk-blue font-bold">Bachelor's in IT Engineering</span> at Royal University of Phnom Penh, I blend academic insights with hands-on experience in cutting-edge technologies.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      My approach combines <span className="text-cyberpunk-green font-bold">creative problem-solving</span> with <span className="text-cyberpunk-yellow font-bold">technical expertise</span>, allowing me to build scalable, user-centric applications that make a real impact.
                    </p>
                  </div>
                  
                  <div className="flex space-x-2 text-sm">
                    <div>
                      <span className="text-cyberpunk-green">$</span>
                      <span className="text-cyberpunk-blue ml-1">status: </span>
                      <span className="bg-cyberpunk-green/20 text-cyberpunk-green px-1 rounded">ONLINE</span>
                    </div>
                    
                    <div className="ml-6">
                      <span className="text-cyberpunk-blue">version: </span>
                      <span className="bg-cyberpunk-pink/20 text-cyberpunk-pink px-1 rounded">v4.2.0</span>
                    </div>
                  </div>
                </div>
              </CyberTerminal>
            </motion.div>

            {/* Right Column - Stats & Quick Facts */}
            <div className="space-y-6">
              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                    <div className="relative bg-[#0A0A0A]/80 backdrop-blur-sm p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-[1.02]">
                      <div className="text-[#00FFFF] mb-2 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                <div className="relative bg-[#0A0A0A]/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
                  <ul className="space-y-4">
                    {[
                      { label: 'Location', value: 'Stung Meanchey, Phnom Penh' },
                      { label: 'Education', value: 'IT Engineering' },
                      { label: 'University', value: 'RUPP' },
                      { label: 'Focus', value: 'Full-Stack Development' }
                    ].map((fact, index) => (
                      <motion.li
                        key={fact.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="relative group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                          <span className="w-24 text-[#00FF8C]">{fact.label}:</span>
                          <span className="text-white group-hover:text-[#00FFFF] transition-colors">
                            {fact.value}
                          </span>
                        </div>
                        <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
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

export default About;