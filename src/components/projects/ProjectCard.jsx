import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { useCardTilt } from '../../hooks/useCardTilt';

function ProjectCard({ project, index }) {
  const cardRef = useCardTilt();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      ref={cardRef}
      className="group bg-white border border-[#FFD54F]/20 premium-shadow rounded-3xl p-3"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-[#FFC107] px-3 py-1 text-xs font-bold text-[#1E293B] shadow-md">
          {project.category}
        </span>
      </div>

      <div className="px-2 pb-2 pt-5">
        <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-[#FFB300] transition-colors duration-200">{project.title}</h3>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-500">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 px-3 py-1 text-xs font-bold text-[#FFB300]">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs">
              <FiGithub /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 text-xs">
              <FiArrowUpRight /> Live Demo
            </a>
          )}
          <a href="#contact" className="btn-secondary px-4 py-2 text-xs bg-slate-50 border-slate-200">
            View Details
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
