import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { experience } from '../../data/portfolio';
import { useCardTilt } from '../../hooks/useCardTilt';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function ExperienceCard({ exp, index }) {
  const cardRef = useCardTilt();
  const year = exp.period.match(/\d{4}/)?.[0] || '2024';

  return (
    <motion.div
      variants={itemVariants}
      ref={cardRef}
      className="w-full md:w-[calc(50%-3.5rem)] bg-white border-2 border-[#FFD54F]/25 premium-shadow rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 lg:p-12 group relative z-20 overflow-hidden"
    >
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2rem]" />
      <div className="flex flex-col items-center gap-4 mb-6 text-center w-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-2 mb-2 w-full">
            <span className="outline-text-dark text-4xl font-black select-none tracking-tight opacity-40 leading-none">
              {year}
            </span>
            <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-[#FFB300] transition-colors duration-200 uppercase tracking-tight text-center">
              {exp.title}
            </h3>
          </div>
          <p className="text-lg text-[#FFB300] font-black mb-2 uppercase tracking-wide">
            {exp.company}
          </p>
          <div className="flex items-center gap-2 text-slate-400 justify-center">
            <FiCalendar className="text-sm" />
            <span className="text-sm font-semibold">{exp.period}</span>
          </div>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFC107] to-[#FFD54F] flex items-center justify-center md:hidden shadow-md shadow-amber-500/20 text-[#1E293B]">
          <FiBriefcase className="text-2xl" />
        </div>
      </div>

      <div className="space-y-3 w-full flex flex-col items-center">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
          Key Responsibilities:
        </h4>
        <ul className="space-y-3 w-full">
          {exp.responsibilities.map((responsibility, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start justify-center gap-3 text-slate-500 font-semibold text-center w-full"
            >
              <FiCheckCircle className="text-[#FFC107] mt-1 flex-shrink-0" />
              <span>{responsibility}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-6 h-1 w-full bg-gradient-to-r from-[#FFC107]/40 via-[#FFD54F]/20 to-transparent rounded-full" />
    </motion.div>
  );
}

function ExperienceStatCard({ value, label, className = '' }) {
  const cardRef = useCardTilt({ scale: 1.04, lift: 6 });

  return (
    <div ref={cardRef} className={`text-center p-6 bg-white border border-[#FFD54F]/20 premium-shadow rounded-2xl relative overflow-hidden ${className}`}>
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-2xl" />
      <div className="text-3xl font-black gradient-text mb-2">{value}</div>
      <div className="text-sm font-semibold text-slate-500">{label}</div>
    </div>
  );
}

function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-[120px] relative overflow-hidden bg-[#FFD54F]/5">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
        <span className="outline-text text-[10rem] sm:text-[22rem] lg:text-[30rem] font-black opacity-10 leading-none select-none tracking-tighter rotate-[-6deg] translate-y-[-10%]">
          JOURNEY
        </span>
      </div>

      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-[90px]"
        >
          <span className="inline-block px-4 py-2 bg-[#FFD54F]/20 border border-[#FFC107]/30 rounded-full text-xs font-bold text-[#FFB300] uppercase tracking-wider mb-4">
            Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-[#1E293B]">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB300] to-[#FFC107] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFB300] via-[#FFD54F] to-[#FFB300] md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12 sm:space-y-16 md:space-y-24 relative">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''} relative gap-8 md:gap-0`}
                >
                  <div className="absolute left-8 md:left-1/2 top-8 w-14 h-14 rounded-full bg-gradient-to-br from-[#FFC107] to-[#FFD54F] hidden md:flex items-center justify-center md:-translate-x-1/2 z-10 shadow-md text-[#1E293B] border border-[#FFC107]/20">
                    <FiBriefcase className="text-xl" />
                  </div>

                  <ExperienceCard exp={exp} index={index} />

                  <div className="hidden md:block md:w-[calc(50%-3.5rem)]" />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-20 md:mt-40 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto pb-10"
        >
          <ExperienceStatCard value={experience.length} label="Internships" />
          <ExperienceStatCard value="4+" label="Months Experience" />
          <ExperienceStatCard value="100%" label="Learning & Growth" className="col-span-2 md:col-span-1" />
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
