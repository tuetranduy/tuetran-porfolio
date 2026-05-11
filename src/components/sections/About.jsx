import { motion } from 'framer-motion';
import { Code, Shield, Zap, Target } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Automation Expert',
      description: 'Building scalable test frameworks using Selenium, Playwright, Cypress, and more.',
    },
    {
      icon: Zap,
      title: 'Performance Testing',
      description: 'Expertise in load testing, stress testing using JMeter and similar tools.',
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Identifying vulnerabilities and ensuring application security compliance.',
    },
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'Committed to delivering high-quality software through rigorous testing.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Me"
          title="Get to Know Me"
          description="Passionate about ensuring software quality and building robust automation solutions."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              My name is <span className="text-cyan-400 font-semibold">Tue Tran</span>, 
              and I am an Automation QA Engineer with over{' '}
              <span className="text-cyan-400 font-semibold">eight years</span> of 
              hands-on experience in the software development industry.
            </p>
            <p className="text-slate-400 leading-relaxed">
              In my role as an Automation QA, I have gained extensive experience in 
              designing and executing automation scripts, as well as developing automation 
              frameworks. I have successfully worked on full life-cycle projects in 
              fast-paced and high-pressure environments.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Additionally, I am knowledgeable in{' '}
              <span className="text-cyan-400">performance testing</span> and{' '}
              <span className="text-cyan-400">security testing</span>, ensuring that 
              applications not only work correctly but also perform efficiently and securely.
            </p>

            {/* Experience Badge */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg">
                <span className="text-cyan-400 font-bold">8+</span>
                <span className="text-slate-400 ml-2">Years Experience</span>
              </div>
              <div className="px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg">
                <span className="text-cyan-400 font-bold">Full-Stack</span>
                <span className="text-slate-400 ml-2">QA Expertise</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl card-hover"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
