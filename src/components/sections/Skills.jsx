import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { skillCategories, highlightSkills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Technical Skills"
          title="My Tech Stack"
          description="Technologies and tools I use to deliver quality automation solutions."
        />

        {/* Stats Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {highlightSkills.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-slate-900/50 border border-slate-800 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.label}
              </div>
              <div className="text-slate-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-cyan-500 mr-3" />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="group p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${skill.color}15` }}
                        >
                          <Icon 
                            size={28} 
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="text-slate-300 text-sm font-medium group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
