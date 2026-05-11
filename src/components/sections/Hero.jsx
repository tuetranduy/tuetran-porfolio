import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl" />
              {/* Avatar container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-cyan-400 to-cyan-600">
                <img
                  src="/assets/images/avatar.jpg"
                  alt="Tue Tran"
                  className="w-full h-full rounded-full object-cover bg-slate-800"
                  onError={(e) => {
                    // Fallback to initials if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback initials */}
                <div 
                  className="absolute inset-1 rounded-full bg-slate-800 items-center justify-center text-4xl md:text-5xl font-bold text-cyan-400 hidden"
                >
                  TT
                </div>
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-cyan-400 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Tue Tran</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-6"
          >
            <span className="text-cyan-400">Senior</span> Automation QA Engineer
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-8"
          >
            8+ years of experience in building robust automation frameworks, 
            ensuring software quality, and delivering excellence in testing.
            <span className="block mt-2 text-cyan-400/80">
              Focused on Quality Services | Performance Testing | Security Testing
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            {[
              { value: '8+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '15+', label: 'Frameworks Built' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button href="#contact" icon={<Mail size={20} />}>
              Get In Touch
            </Button>
            <Button href="/resume.pdf" variant="outline" icon={<Download size={20} />}>
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - positioned outside the content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-slate-500 hover:text-cyan-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
