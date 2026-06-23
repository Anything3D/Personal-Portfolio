import { GitBranch, Briefcase, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-black py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="font-mono text-2xl font-bold tracking-tighter text-white">
              OverEngineered
            </span>
            <p className="text-gray-500 font-mono text-sm mt-2">
              Building hardware & software.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-cyan transition-colors">
              <GitBranch size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-cyan transition-colors">
              <Briefcase size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-cyan transition-colors">
              <MessageCircle size={24} />
            </a>
            <a href="mailto:contact@overengineered.dev" className="text-gray-400 hover:text-electric-cyan transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-gray-600 font-sans text-sm">
          &copy; {new Date().getFullYear()} OverEngineered. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
