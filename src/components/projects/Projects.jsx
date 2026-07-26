import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiCheck } from 'react-icons/fi';
import { projects } from '../../data/projects';
import { useCardTilt } from '../../hooks/useCardTilt';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function ProjectCard({ project, index }) {
  const cardRef = useCardTilt();

  return (
    <motion.article
      key={index}
      variants={cardVariants}
      ref={cardRef}
      className="bg-white border-2 border-[#FFD54F]/20 premium-shadow rounded-[2rem] overflow-hidden group h-full flex flex-col relative"
    >
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2rem]" />
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#FFD54F]/10 to-[#FFC107]/10 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-[#FFC107] rounded-full text-xs font-bold text-[#1E293B] shadow-md">
            {project.category}
          </span>
        </div>

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#FFD54F]/30 flex items-center justify-center text-[#1E293B] hover:bg-[#FFC107] transition-all"
              aria-label="View on GitHub"
            >
              <FiGithub className="text-sm font-bold" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#FFD54F]/30 flex items-center justify-center text-[#1E293B] hover:bg-[#FFC107] transition-all"
              aria-label="View Demo"
            >
              <FiExternalLink className="text-sm font-bold" />
            </a>
          )}
        </div>
      </div>

      <div className="p-8 sm:p-10 md:p-12 space-y-8 flex-1 flex flex-col justify-between items-center text-center">
        <div className="space-y-6 w-full flex flex-col items-center">
          <div className="space-y-3 w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-2 mb-3 text-center w-full">
              <span className="outline-text-dark text-4xl font-black select-none tracking-tight opacity-40 leading-none">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-[#FFB300] transition-colors duration-200 uppercase tracking-tight text-center">
                {project.title}
              </h3>
            </div>
            <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed text-center">
              {project.description}
            </p>
          </div>

          {project.features && (
            <div className="space-y-3 w-full flex flex-col items-center">
              <div className="flex items-center gap-2 justify-center">
                <FiCode className="text-[#FFB300] text-lg" />
                <span className="text-sm font-bold text-slate-700">Key Features:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center w-full">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-500 font-semibold flex items-center justify-center gap-2 text-center">
                    <FiCheck className="text-[#FFB300] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-3 w-full flex flex-col items-center">
            <div className="text-sm font-bold text-slate-700">Tech Stack:</div>
            <div className="flex flex-wrap justify-center gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#FFD54F]/15 border border-[#FFD54F]/30 rounded-full text-xs text-[#FFB300] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-50 justify-center w-full">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-3.5 text-sm flex-1 text-center font-bold"
            >
              <span className="flex items-center justify-center gap-2">
                <FiGithub />
                View Code
              </span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 text-sm flex-1 text-center font-bold"
            >
              <span className="flex items-center justify-center gap-2">
                <FiExternalLink />
                Live Demo
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-[120px] relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
        <span className="outline-text text-[15rem] sm:text-[22rem] lg:text-[30rem] font-black opacity-10 leading-none select-none tracking-tighter rotate-[8deg] translate-y-[-10%]">
          WORK
        </span>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[50px]"
        >
          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-[#FFD54F]/20 border border-[#FFC107]/30 rounded-full text-xs font-bold text-[#FFB300] uppercase tracking-wider mb-4">
              My Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-[#1E293B]">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FFB300] to-[#FFC107] mx-auto rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Showcasing AI-powered applications and innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-[1200px] mx-auto items-stretch"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 font-semibold mb-6">
            Want to see more of my work?
          </p>
          <a
            href={projects[0]?.github || 'https://github.com/nish-ML'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 text-base"
          >
            <FiGithub className="text-xl" />
            <span>Visit My GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
