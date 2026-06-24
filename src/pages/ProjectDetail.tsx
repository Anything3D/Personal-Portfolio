import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Project Not Found</h1>
        <Link to="/portfolio" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors font-mono uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-mono tracking-wider text-gray-300 bg-white/5 border border-white/10 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-gradient leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
            {project.description}
          </p>
          
          {project.github_link && (
            <div className="mt-10">
              <a 
                href={project.github_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:scale-105 transition-transform duration-300 ease-out font-medium text-sm rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <Code2 size={18} /> View Source / Files <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          )}
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-video w-full rounded-2xl overflow-hidden mb-20 border border-white/5 shadow-2xl"
        >
          <img 
            src={project.thumbnail_image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Build Log / Details */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="prose prose-invert max-w-none mb-24 font-sans text-lg text-gray-400 leading-relaxed"
        >
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Build Log & Engineering Process</h2>
          <div className="bg-white/5 border border-white/5 rounded-2xl p-8 md:p-12 prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-electric-cyan prose-strong:text-white prose-ul:text-gray-300">
            <ReactMarkdown>{project.details_text}</ReactMarkdown>
          </div>
        </motion.div>

        {/* Gallery */}
        {project.gallery_images && project.gallery_images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery_images.map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 group">
                  <img src={img} alt={`${project.title} gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
