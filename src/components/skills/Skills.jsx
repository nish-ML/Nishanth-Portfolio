import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTool, FiLayers } from 'react-icons/fi';
import { SiPython, SiC, SiCplusplus, SiHtml5, SiJavascript, SiDjango, SiPostgresql, SiSqlite, SiGit, SiGithub } from 'react-icons/si';
import { skills } from '../../data/portfolio';
import { useCardTilt } from '../../hooks/useCardTilt';

const iconMap = {
  Python: SiPython,
  C: SiC,
  'C++': SiCplusplus,
  Java: FiCode,
  HTML: SiHtml5,
  CSS: FiLayers,
  JavaScript: SiJavascript,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': FiTool,
};

const categoryIcons = {
  code: FiCode,
  web: FiLayers,
  database: FiDatabase,
  tools: FiTool,
  tech: FiLayers,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function SkillCard({ category }) {
  const cardRef = useCardTilt();
  const CategoryIcon = categoryIcons[category.icon] || FiCode;

  return (
    <motion.div
      variants={cardVariants}
      ref={cardRef}
      className="bg-white border-2 border-[#FFD54F]/20 premium-shadow rounded-[2.25rem] p-8 sm:p-10 md:p-12 skill-card group h-full flex flex-col items-center justify-between relative overflow-hidden"
    >
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2.25rem]" />
      <div className="flex flex-col items-center gap-3 mb-6 text-center w-full">
        <div className="w-14 h-14 rounded-2xl bg-[#FFD54F]/20 flex items-center justify-center text-[#FFB300] group-hover:scale-110 transition-transform">
          <CategoryIcon className="text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-tight">{category.category}</h3>
      </div>

      <div className="space-y-3 w-full">
        {category.items.map((skill, skillIndex) => {
          const SkillIcon = iconMap[skill];

          return (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: skillIndex * 0.05 }}
              className="flex items-center justify-center gap-3 p-3 bg-slate-50 border border-[#FFD54F]/10 rounded-xl hover:border-[#FFC107]/50 hover:bg-white transition-all duration-200 group/item w-full"
            >
              {SkillIcon ? (
                <SkillIcon className="text-xl text-[#FFB300] group-hover/item:scale-110 transition-transform" />
              ) : (
                <div className="w-5 h-5 rounded bg-gradient-to-br from-[#FFC107] to-[#FFD54F]" />
              )}
              <span className="text-slate-600 font-semibold text-sm sm:text-base">{skill}</span>
              <div className="ml-auto h-1 w-0 bg-[#FFC107] rounded-full group-hover/item:w-8 transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 h-1 w-full bg-gradient-to-r from-[#FFD54F]/30 via-[#FFC107]/20 to-transparent rounded-full" />
    </motion.div>
  );
}

function StatCard({ stat }) {
  const cardRef = useCardTilt({ scale: 1.04, lift: 6 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 }}
      className="text-center p-6 bg-white border-2 border-[#FFD54F]/25 premium-shadow rounded-2xl relative overflow-hidden"
    >
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-2xl" />
      <div className="text-3xl font-black gradient-text mb-2">{stat.value}</div>
      <div className="text-sm font-semibold text-slate-500">{stat.label}</div>
    </motion.div>
  );
}

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const stats = [
    { label: 'Programming Languages', value: '4+' },
    { label: 'Web Technologies', value: '4+' },
    { label: 'Databases', value: '2' },
    { label: 'Tools & Technologies', value: '8+' },
  ];

  return (
    <section id="skills" className="py-[120px] relative overflow-hidden bg-[#FFD54F]/5">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
        <span className="outline-text text-[15rem] sm:text-[22rem] lg:text-[30rem] font-black opacity-10 leading-none select-none tracking-tighter rotate-[-6deg] translate-y-[-10%]">
          SKILLS
        </span>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[90px]"
        >
          <span className="inline-block px-4 py-2 bg-[#FFD54F]/20 border border-[#FFC107]/30 rounded-full text-xs font-bold text-[#FFB300] uppercase tracking-wider mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-[#1E293B]">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB300] to-[#FFC107] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-[1240px] mx-auto"
        >
          {skills.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
