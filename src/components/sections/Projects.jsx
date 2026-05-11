import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { projects, projectCategories } from '../../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

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
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden card-hover"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🧪</div>
                </div>

                {/* Overlay on hover */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-0 left-0 right-0 h-48 bg-cyan-500/20 flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.github}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors"
                      >
                        <GitBranch size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>

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
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

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
                        className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
