import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import TiltCard from '../common/TiltCard';
import MagneticButton from '../common/MagneticButton';
import { projects, projectCategories } from '../../data/projects';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard 
        className="h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
        tiltStrength={8}
      >
        {/* Project Image Placeholder */}
        <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative group">
          <div className="text-6xl opacity-20 transition-transform duration-300 group-hover:scale-110">🧪</div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
            <MagneticButton strength={0.4}>
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors"
              >
                <GitBranch size={20} />
              </motion.a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors"
              >
                <ExternalLink size={20} />
              </motion.a>
            </MagneticButton>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          {/* Expandable Description */}
          <div className="mb-4">
            <p className={`text-slate-400 text-sm ${!expanded ? 'line-clamp-2' : ''}`}>
              {project.description}
            </p>
            {project.description.length > 100 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-cyan-400 text-xs mt-1 flex items-center hover:text-cyan-300 transition-colors"
              >
                {expanded ? (
                  <>Show less <ChevronUp size={14} className="ml-1" /></>
                ) : (
                  <>Read more <ChevronDown size={14} className="ml-1" /></>
                )}
              </button>
            )}
          </div>

          {/* Highlights */}
          <ul className="space-y-1 mb-4">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="text-slate-500 text-xs flex items-center">
                <ChevronRight size={12} className="text-cyan-500 mr-1" />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded hover:bg-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
          description="A showcase of automation frameworks and testing solutions I've built."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <MagneticButton key={category} strength={0.2}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ripple-button ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
