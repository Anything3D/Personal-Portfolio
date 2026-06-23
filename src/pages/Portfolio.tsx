import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function Portfolio() {
  const [filter, setFilter] = useState('All');

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filters = ['All', ...allTags];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient"
          >
            Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
          >
            An archive of mechanical design, hardware engineering, and software interfaces.
          </motion.p>
        </div>

        {/* Pill-style Filter Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                filter === f 
                  ? 'bg-white text-black font-medium shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className={index % 4 === 0 || index % 4 === 3 ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}
              >
                <ProjectCard project={project} isLarge={index % 4 === 0 || index % 4 === 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32 text-gray-500 font-mono">
            No projects found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
