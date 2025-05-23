import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, ShoppingCart, MessageSquare, Code, GitBranch, Terminal } from 'lucide-react';
import { CyberBadge, CyberCard, CyberTerminal } from './CyberpunkElements';

const experiences = [
	{
		title: 'Telegram-Gemini-Bot Developer',
		period: '2023 - Present',
		description:
			'Developed a sophisticated Telegram bot integrated with Google\'s Gemini AI, featuring real-time image analysis and natural language processing capabilities.',
		technologies: ['Python', 'Gemini AI API', 'Telegram Bot API'],
		icon: <Bot className="w-8 h-8" />,
		achievements: [
			'Implemented advanced image recognition features',
			'Optimized response time by 40%',
			'Served 1000+ active users',
		],
		color: 'blue',
	},
	{
		title: 'Gemini AI Chatbot Project',
		period: '2023',
		description:
			'Created an advanced AI chatbot utilizing Google\'s Gemini technology, implementing features for context-aware conversations and multi-modal interactions.',
		technologies: ['JavaScript', 'Node.js', 'Gemini AI'],
		icon: <MessageSquare className="w-8 h-8" />,
		achievements: [
			'Developed context-aware conversation system',
			'Integrated multi-modal processing capabilities',
			'Achieved 95% user satisfaction rate',
		],
		color: 'green',
	},
	{
		title: 'E-Commerce Platform',
		period: '2023',
		description:
			'Built a full-stack e-commerce platform with features including user authentication, product management, and secure payment integration.',
		technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
		icon: <ShoppingCart className="w-8 h-8" />,
		achievements: [
			'Implemented secure payment gateway',
			'Reduced page load time by 60%',
			'Processed 500+ transactions',
		],
		color: 'pink',
	},
];

const Experience = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section
			id="experience"
			className="relative py-20 bg-cyberpunk-purple overflow-hidden"
		>
			<div className="max-w-6xl mx-auto px-4">
				<div className="relative inline-block mb-12">
					<div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green rounded-lg opacity-75 blur-sm animate-pulse" />
					<h2 className="relative text-3xl font-bold text-white bg-cyberpunk-purple px-6 py-3 rounded-lg font-mono">
						<span className="text-cyberpunk-blue">EXP</span>.<span className="text-cyberpunk-green">load</span>(
						<span className="text-cyberpunk-pink">"career_data"</span>)
					</h2>
				</div>

				{/* Terminal info section */}
				<CyberTerminal title="career_scan.exe" className="mb-8">
					<div className="text-sm space-y-2">
						<div className="flex items-start space-x-2 mb-2">
							<span className="text-cyberpunk-green">$</span>
							<div>
								<span className="animate-pulse mr-1">_</span>
								<span className="text-cyberpunk-yellow">system</span>.
								<span className="text-cyberpunk-pink">scanExperience</span>()
								<span className="animate-pulse">;</span>
							</div>
						</div>
						<p className="text-gray-400">
							Analyzing professional trajectory and project history...
						</p>
						<p className="text-cyberpunk-green">
							SCAN COMPLETE:{' '}
							<span className="text-cyberpunk-blue">
								{experiences.length}
							</span>{' '}
							significant entries found.
						</p>
					</div>
				</CyberTerminal>

				<div className="relative">
					{/* Timeline line with animated gradient */}
					<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1">
						<div className="h-full w-full bg-gradient-to-b from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green animate-glow-pulse relative overflow-hidden">
							{/* Animated digital pulse effect */}
							<div
								className="absolute top-0 left-0 w-full h-20 bg-white/30"
								style={{
									animation: 'scanline 3s linear infinite',
								}}
							></div>

							{/* Background grid on the center line */}
							<div
								className="absolute inset-0 opacity-50"
								style={{
									backgroundImage: `linear-gradient(0deg, transparent 98%, rgba(0, 255, 65, 0.7) 100%)`,
									backgroundSize: '100% 10px',
								}}
							></div>
						</div>
					</div>

					{experiences.map((exp, index) => (
						<motion.div
							key={exp.title}
							ref={ref}
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className={`mb-16 md:flex ${
								index % 2 === 0 ? 'md:flex-row-reverse' : ''
							}`}
						>
							<div className="md:w-1/2 relative">
								<CyberCard
									glowColor={
										exp.color === 'pink'
											? 'pink'
											: exp.color === 'blue'
											? 'blue'
											: 'green'
									}
									className={`${
										index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
									}`}
								>
									<div className="p-6">
										{/* Header with Icon */}
										<div className="flex items-center space-x-4 mb-4">
											<div
												className={`text-cyberpunk-${exp.color} transform group-hover:scale-110 transition-transform duration-300 border-2 border-cyberpunk-${exp.color}/30 rounded-lg p-2 bg-black/30`}
											>
												{exp.icon}
											</div>
											<div>
												<h3 className="text-xl font-semibold text-white font-mono">
													{exp.title}
												</h3>
												<p
													className={`text-cyberpunk-${exp.color}`}
												>
													{exp.period}
												</p>
											</div>
										</div>

										{/* Description in terminal-like container */}
										<div className="bg-black/50 border border-cyberpunk-green/30 rounded p-3 font-mono text-sm mb-4">
											<div className="flex items-center space-x-2 mb-2 text-xs text-cyberpunk-green opacity-70">
												<Terminal size={12} />
												<span>project_data.txt</span>
											</div>
											<p className="text-gray-300">
												{exp.description}
											</p>
										</div>

										{/* Achievements with cyberpunk styling */}
										<div className="mb-4">
											<h4 className="text-white font-mono mb-2 flex items-center">
												<span
													className={`text-cyberpunk-${exp.color} mr-2`}
												>
													_
												</span>
												<span>KEY ACHIEVEMENTS</span>
											</h4>
											<ul className="space-y-3">
												{exp.achievements.map((achievement, i) => (
													<motion.li
														key={i}
														initial={{ opacity: 0, x: -20 }}
														animate={
															inView
																? { opacity: 1, x: 0 }
																: {}
														}
														transition={{ delay: 0.5 + i * 0.1 }}
														className={`flex items-center space-x-2 text-gray-300 border-l-2 border-cyberpunk-${exp.color}/50 pl-3`}
													>
														<div
															className={`w-2 h-2 rounded-full bg-cyberpunk-${exp.color} animate-pulse`}
														></div>
														<span>{achievement}</span>
													</motion.li>
												))}
											</ul>
										</div>

										{/* Technologies as badges */}
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<CyberBadge
													key={tech}
													label={tech}
													color={
														exp.color === 'pink'
															? 'pink'
															: exp.color === 'blue'
															? 'blue'
															: 'green'
													}
													icon={<Code className="w-3 h-3" />}
												/>
											))}
										</div>

										{/* Interactive glitch corner */}
										<motion.div
											whileHover={{ scale: 1.2, rotate: 180 }}
											className="absolute top-2 right-2 text-cyberpunk-yellow opacity-70 cursor-pointer"
										>
											<GitBranch className="w-4 h-4" />
										</motion.div>
									</div>
								</CyberCard>

								{/* Animated Timeline Dot */}
								<div
									className={`absolute top-6 md:top-1/2 md:transform md:-translate-y-1/2
                    w-6 h-6 rounded-full bg-cyberpunk-${exp.color} border-4 border-cyberpunk-purple
                    left-[-12px] md:left-auto z-10
                    ${index % 2 === 0 ? 'md:left-[-12px]' : 'md:right-[-12px]'}
                  `}
									style={{
										boxShadow: `0 0 10px var(--tw-gradient-from)`,
									}}
								>
									<div className="absolute inset-0 rounded-full bg-cyberpunk-blue/50 animate-ping opacity-50" />
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
              linear-gradient(to right, rgba(5, 217, 232, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(5, 217, 232, 0.1) 1px, transparent 1px)
            `,
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			{/* Circuit board decoration */}
			<div className="absolute top-20 left-5 w-40 h-40 opacity-20 pointer-events-none">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<path
						d="M10,30 L90,30 M50,10 L50,90 M70,50 L90,50 M10,50 L30,50 M10,70 L90,70"
						stroke="#05D9E8"
						strokeWidth="1"
						fill="none"
					/>
					<circle cx="50" cy="30" r="3" fill="#05D9E8" />
					<circle cx="50" cy="50" r="3" fill="#05D9E8" />
					<circle cx="50" cy="70" r="3" fill="#05D9E8" />
					<circle cx="30" cy="50" r="3" fill="#05D9E8" />
					<circle cx="70" cy="50" r="3" fill="#05D9E8" />
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

export default Experience;