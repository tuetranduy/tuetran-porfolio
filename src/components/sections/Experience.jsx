import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { experiences, education } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Career Path"
          title="Work Experience"
          description="My professional journey in software quality assurance and automation testing."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-slate-700" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 z-10" />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl card-hover">
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
                      <li key={i} className="text-slate-400 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-cyan-500 mr-3" />
            Education
          </h3>
          
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-cyan-400" size={20} />
                <span className="text-slate-400">{edu.period}</span>
              </div>
              <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
              <p className="text-cyan-400">{edu.school}</p>
              <p className="text-slate-400 text-sm mt-2">{edu.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
