import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { useRef } from 'react';
import SectionTitle from '../common/SectionTitle';
import TiltCard from '../common/TiltCard';
import { experiences, education } from '../../data/experience';

const TimelineCard = ({ exp, index, isLeft }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'center center'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [isLeft ? -50 : 50, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ x, opacity }}
      className={`relative flex items-center mb-12 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Dot with pulse */}
      <motion.div 
        className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 }}
      >
        <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 relative">
          <motion.div
            className="absolute inset-0 bg-cyan-500 rounded-full"
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Content Card */}
      <div className={`ml-8 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <TiltCard 
          className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl"
          tiltStrength={5}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-cyan-400 font-medium">{exp.company}</p>
            </div>
            <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full">
              {exp.period}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {exp.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={14} />
              Full-time
            </span>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {exp.description.map((item, i) => (
              <motion.li 
                key={i} 
                className="text-slate-400 text-sm flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </TiltCard>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Career Path"
          title="Work Experience"
          description="My professional journey in software quality assurance and automation testing."
        />

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line Background */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-slate-700" />
          
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 transform md:-translate-x-px w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-400 origin-top"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, index) => (
            <TimelineCard 
              key={exp.id} 
              exp={exp} 
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <motion.span 
              className="w-8 h-[2px] bg-cyan-500 mr-3"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            Education
          </h3>
          
          {education.map((edu) => (
            <TiltCard
              key={edu.degree}
              className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl max-w-2xl"
              tiltStrength={3}
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-cyan-400" size={20} />
                <span className="text-slate-400">{edu.period}</span>
              </div>
              <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
              <p className="text-cyan-400">{edu.school}</p>
              <p className="text-slate-400 text-sm mt-2">{edu.description}</p>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
