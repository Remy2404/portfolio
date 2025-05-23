import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Terminal, Send, Code } from 'lucide-react';
import { CyberCard, CyberButton, CyberTerminal } from './CyberpunkElements';

const contactInfo = [
	{
		icon: <Phone className="w-6 h-6" />,
		label: 'Phone',
		value: '0962064081',
	},
	{
		icon: <Mail className="w-6 h-6" />,
		label: 'Email',
		value: 'meemii191@gmail.com',
	},
	{
		icon: <MapPin className="w-6 h-6" />,
		label: 'Location',
		value: 'Stung Meanchey, Phnom Penh',
	},
];

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
	};

	return (
		<section id="contact" className="relative py-20 bg-cyberpunk-purple">
			{/* Matrix-like background element */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="matrix-code absolute inset-0 opacity-5">
					{Array(100)
						.fill(0)
						.map((_, i) => (
							<div
								key={i}
								className="matrix-line text-cyberpunk-green opacity-70"
								style={{
									position: 'absolute',
									top: `${Math.random() * 100}%`,
									left: `${Math.random() * 100}%`,
									fontSize: `${Math.random() * 16 + 8}px`,
									animation: `matrix-rain ${Math.random() * 5 + 10}s linear infinite`,
									animationDelay: `${Math.random() * 5}s`,
								}}
							>
								{Array(Math.floor(Math.random() * 20) + 10)
									.fill(0)
									.map(() => String.fromCharCode(Math.floor(Math.random() * 94) + 33))
									.join('')}
							</div>
						))}
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-4">
				<div className="relative inline-block mb-12">
					<div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-green rounded-lg opacity-75 blur-sm animate-pulse" />
					<h2 className="relative text-3xl font-bold text-white bg-cyberpunk-purple px-6 py-3 rounded-lg font-mono">
						<span className="text-cyberpunk-blue">CONTACT</span>.
						<span className="text-cyberpunk-green">connect</span>(
						<span className="text-cyberpunk-pink">"system"</span>)
					</h2>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.5 }}
						className="space-y-8"
					>
						<CyberTerminal title="contact_channels.sys" className="mb-8">
							<div className="text-sm space-y-6">
								<div className="flex items-start space-x-2 mb-2">
									<span className="text-cyberpunk-green">$</span>
									<div>
										<span className="animate-pulse mr-1">_</span>
										<span className="text-cyberpunk-yellow">contact</span>.
										<span className="text-cyberpunk-pink">listChannels</span>()<span className="animate-pulse">;</span>
									</div>
								</div>

								{contactInfo.map((info, index) => (
									<motion.div
										key={info.label}
										initial={{ opacity: 0, y: 20 }}
										animate={inView ? { opacity: 1, y: 0 } : {}}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="border border-cyberpunk-green/30 rounded p-3 bg-black/30 hover:border-cyberpunk-pink transition-colors"
									>
										<div className="flex items-center space-x-4">
											<div className="text-cyberpunk-blue transform group-hover:scale-110 transition-transform duration-300">
												{info.icon}
											</div>
											<div>
												<p className="text-gray-400 text-sm">{info.label}</p>
												<p className="text-cyberpunk-green font-mono">{info.value}</p>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</CyberTerminal>

						<div className="relative mt-8">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-blue rounded-lg opacity-75 blur-sm animate-glow-pulse" />
							<div className="relative bg-cyberpunk-purple/90 p-6 rounded-lg border border-cyberpunk-blue">
								<h3 className="font-mono text-xl text-cyberpunk-green mb-4 flex items-center">
									<Code className="w-5 h-5 mr-2" />
									<span>Response Time</span>
								</h3>
								<div className="space-y-2">
									<div className="flex justify-between text-sm text-gray-300">
										<span>Email</span>
										<span className="text-cyberpunk-green">{"< 24 Hours"}</span>
									</div>
									<div className="flex justify-between text-sm text-gray-300">
										<span>Phone</span>
										<span className="text-cyberpunk-yellow">{"< 3 Hours"}</span>
									</div>
									<div className="flex justify-between text-sm text-gray-300">
										<span>Priority</span>
										<span className="text-cyberpunk-pink">{"< 1 Hour"}</span>
									</div>
								</div>
								<div className="mt-4 pt-4 border-t border-cyberpunk-green/30">
									<div className="flex items-center">
										<div className="w-2 h-2 rounded-full bg-cyberpunk-green animate-pulse mr-2"></div>
										<span className="text-cyberpunk-blue text-sm">CURRENTLY ONLINE</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						ref={ref}
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.5 }}
						className="relative"
					>
						<CyberCard glowColor="blue" className="p-0">
							<div className="p-6">
								<div className="flex items-center space-x-2 mb-6">
									<Terminal className="w-4 h-4 text-cyberpunk-blue" />
									<span className="text-cyberpunk-blue text-xs font-mono">message_transmission.exe</span>
								</div>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="form-group">
										<label
											htmlFor="name"
											className="block text-cyberpunk-blue mb-2 text-sm font-mono"
										>
											USER.name
										</label>
										<div className="relative">
											<input
												type="text"
												id="name"
												value={formData.name}
												onChange={(e) => setFormData({ ...formData, name: e.target.value })}
												className="w-full px-4 py-2 bg-cyberpunk-purple/30 border-2 border-cyberpunk-blue rounded text-white focus:border-cyberpunk-pink focus:ring-1 focus:ring-cyberpunk-pink transition-colors font-mono"
												placeholder="Enter your name"
												required
												style={{ boxShadow: '0 0 10px rgba(5, 217, 232, 0.3)' }}
											/>
											<div className="absolute -top-[1px] -bottom-[1px] left-0 bg-gradient-to-r from-cyberpunk-blue to-transparent w-1 rounded-l transform transition-transform duration-300"></div>
										</div>
									</div>

									<div className="form-group">
										<label
											htmlFor="email"
											className="block text-cyberpunk-green mb-2 text-sm font-mono"
										>
											USER.email
										</label>
										<div className="relative">
											<input
												type="email"
												id="email"
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
												className="w-full px-4 py-2 bg-cyberpunk-purple/30 border-2 border-cyberpunk-green rounded text-white focus:border-cyberpunk-pink focus:ring-1 focus:ring-cyberpunk-pink transition-colors font-mono"
												placeholder="Enter your email"
												required
												style={{ boxShadow: '0 0 10px rgba(0, 255, 65, 0.3)' }}
											/>
											<div className="absolute -top-[1px] -bottom-[1px] left-0 bg-gradient-to-r from-cyberpunk-green to-transparent w-1 rounded-l transform transition-transform duration-300"></div>
										</div>
									</div>

									<div className="form-group">
										<label
											htmlFor="message"
											className="block text-cyberpunk-pink mb-2 text-sm font-mono"
										>
											USER.message
										</label>
										<div className="relative">
											<textarea
												id="message"
												value={formData.message}
												onChange={(e) => setFormData({ ...formData, message: e.target.value })}
												rows={4}
												className="w-full px-4 py-2 bg-cyberpunk-purple/30 border-2 border-cyberpunk-pink rounded text-white focus:border-cyberpunk-blue focus:ring-1 focus:ring-cyberpunk-blue transition-colors font-mono"
												placeholder="Enter your message"
												required
												style={{ boxShadow: '0 0 10px rgba(255, 42, 109, 0.3)' }}
											/>
											<div className="absolute -top-[1px] -bottom-[1px] left-0 bg-gradient-to-r from-cyberpunk-pink to-transparent w-1 rounded-l transform transition-transform duration-300"></div>
										</div>
									</div>

									<motion.div className="form-group">
										<CyberButton
											variant="primary"
											className="w-full"
											onClick={() => handleSubmit}
										>
											<div className="flex items-center justify-center">
												<Send className="w-4 h-4 mr-2" />
												TRANSMIT MESSAGE
											</div>
										</CyberButton>
									</motion.div>

									<div className="flex justify-between items-center mt-4 pt-2 border-t border-cyberpunk-blue/30 text-xs text-gray-400 font-mono">
										<div className="flex items-center">
											<div className="w-2 h-2 rounded-full bg-cyberpunk-green animate-ping mr-1"></div>
											<span>SECURE TRANSMISSION</span>
										</div>
										<span>v1.0.2</span>
									</div>
								</form>
							</div>
						</CyberCard>
					</motion.div>
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
		</section>
	);
};

export default Contact;