import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '0962064081'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'meemii191@gmail.com'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Location',
    value: 'Stung Meanchey, Phnom Penh'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-75 blur-sm animate-pulse" />
          <h2 className="relative text-3xl font-bold text-white text-center bg-[#0A0A0A] px-4 py-2 rounded-lg">
            Get in Touch
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
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                <div className="relative bg-[#0A0A0A]/80 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center space-x-4">
                    <div className="text-[#00FFFF] transform group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] via-[#00FF8C] to-[#00FFFF] rounded-lg opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
            <div className="relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 rounded-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#00FF8C] rounded-lg text-white focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#00FF8C] rounded-lg text-white focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#00FF8C] rounded-lg text-white focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF] transition-colors"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#FF0066] to-[#00FF8C] text-white rounded-lg font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FF8C] to-[#FF0066] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.form>
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

export default Contact;