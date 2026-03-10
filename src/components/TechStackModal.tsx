'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Atom, Wind, Box, Move, Database, CheckCircle2, Code, Github } from 'lucide-react';
import pkg from '../../package.json';

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const allDependencies = { ...pkg.dependencies, ...pkg.devDependencies };

  const techStackInfo = [
    {
      id: 'next',
      name: 'Next.js',
      icon: <Box className="w-6 h-6 text-dark dark:text-light" />,
      description: 'Used as the core framework providing the App Router, Server Components, and optimized image rendering for the portfolio.',
      version: allDependencies['next'],
    },
    {
      id: 'react',
      name: 'React',
      icon: <Atom className="w-6 h-6 text-dark dark:text-light" />,
      description: 'Powers the interactive UI components like the navigation menu, modals, and experience timeline.',
      version: allDependencies['react'],
    },
    {
      id: 'tailwindcss',
      name: 'Tailwind CSS',
      icon: <Wind className="w-6 h-6 text-dark dark:text-light" />,
      description: 'Provides utility classes for styling the entire application, including typography, spacing, and the responsive flex/grid layouts.',
      version: allDependencies['tailwindcss'],
    },
    {
      id: 'framer-motion',
      name: 'Framer Motion',
      icon: <Move className="w-6 h-6 text-dark dark:text-light" />,
      description: 'Handles the smooth entrance/exit animations of this modal and the interactive hover effects on the navigation icons.',
      version: allDependencies['framer-motion'],
    },
    {
      id: 'zustand',
      name: 'Zustand',
      icon: <Database className="w-6 h-6 text-dark dark:text-light" />,
      description: 'Manages the global Light/Dark mode state and seamlessly persists the user theme preference across browser sessions.',
      version: allDependencies['zustand'],
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: <Code className="w-6 h-6 text-dark dark:text-light" />,
      description: 'Ensures type safety across all React components, hooks, and configuration files to prevent runtime errors.',
      version: allDependencies['typescript'],
    },
    {
      id: 'github-pages',
      name: 'GitHub Pages',
      icon: <Github className="w-6 h-6 text-dark dark:text-light" />,
      description: 'Hosts the static export of this portfolio, deployed automatically via GitHub Actions CI/CD workflows.',
      version: undefined,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-dark/40 dark:bg-light/10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-light dark:bg-dark shadow-2xl border border-dark/10 dark:border-light/10 text-dark dark:text-light max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-dark/10 dark:border-light/10">
              <h2 className="text-2xl font-bold">Project Tech Stack</h2>
              <button
                onClick={onClose}
                className="p-1 transition-colors rounded-full hover:bg-dark/10 dark:hover:bg-light/10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <p className="mb-6 text-sm opacity-80">
                This app is built using the following technologies:
              </p>
              
              <div className="space-y-4">
                {techStackInfo.map((tech) => (
                  <div 
                    key={tech.id} 
                    className="flex items-start p-3 transition-colors rounded-lg hover:bg-dark/5 dark:hover:bg-light/5 border border-transparent hover:border-dark/5 dark:hover:border-light/5"
                  >
                    <div className="flex-shrink-0 p-3 mr-4 rounded-lg bg-dark/5 dark:bg-light/5">
                      {tech.icon}
                    </div>
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <h3 className="text-lg font-bold">{tech.name}</h3>
                        {tech.version && (
                          <span className="text-xs font-mono opacity-60">
                            {tech.version.replace(/[\^~]/g, '')}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm opacity-80 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t border-dark/10 dark:border-light/10 bg-dark/5 dark:bg-light/5 text-center shrink-0">
              <p className="text-xs opacity-70 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Dynamically generated from package.json
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TechStackModal;
