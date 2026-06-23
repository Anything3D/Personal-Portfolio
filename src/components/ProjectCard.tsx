import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  isLarge?: boolean;
}

export function ProjectCard({ project, isLarge = false }: ProjectCardProps) {
  return (
    <Link to={`/project/${project.id}`} className="group block h-full outline-none">
      <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col relative group-focus-visible:ring-2 group-focus-visible:ring-white/50">
        
        {/* Glow effect that follows top border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/0 group-hover:via-white/30 to-transparent transition-all duration-700" />
        
        <div className={`w-full overflow-hidden relative ${isLarge ? 'aspect-[16/7]' : 'aspect-video'}`}>
          <div className="absolute inset-0 bg-primary-black/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
          <img 
            src={project.thumbnail_image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
            loading="lazy"
          />
        </div>
        
        <div className="p-8 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" size={20} />
          </div>
          
          <p className="text-gray-400 text-sm mb-8 flex-grow line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-2.5 py-1 text-[11px] font-mono tracking-wider text-gray-300 bg-white/5 border border-white/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
