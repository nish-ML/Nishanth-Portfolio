import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiZap } from 'react-icons/fi';
import { achievements } from '../../data/portfolio';
import { useCardTilt } from '../../hooks/useCardTilt';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: 'spring',
    },
  },
};

const icons = [FiAward, FiUsers];

function AchievementCard({ achievement, index }) {
  const cardRef = useCardTilt();
  const Icon = icons[index] || FiZap;

  return (
    <motion.div
      key={index}
      variants={cardVariants}
      ref={cardRef}
      className="bg-white border-2 border-[#FFD54F]/25 premium-shadow rounded-[2rem] p-8 sm:p-10 md:p-12 group flex flex-col items-center justify-between h-full text-center relative overflow-hidden"
    >
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2rem]" />
      <div className="flex flex-col items-center gap-3 mb-6 text-center w-full">
        <div className="w-16 h-16 rounded-2xl bg-[#FFD54F]/20 flex items-center justify-center group-hover:scale-110 transition-transform text-[#FFB300] mx-auto">
          <Icon className="text-3xl" />
        </div>
        <span className="px-4 py-2 bg-[#FFD54F]/20 border border-[#FFD54F]/40 rounded-full text-xs font-bold text-[#FFB300] inline-block">
          {achievement.year}
        </span>
      </div>

      <div className="space-y-3 w-full flex flex-col items-center text-center">
        <h3 className="text-2xl font-black leading-tight text-[#1E293B] group-hover:text-[#FFB300] transition-colors duration-200 uppercase tracking-tight text-center">
          {achievement.title}
        </h3>
        <p className="text-slate-500 font-semibold leading-relaxed text-center">
          {achievement.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 w-full">
        <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-[#FFC107]/40 to-transparent rounded-full" />
        <FiZap className="text-[#FFB300]" />
      </div>
    </motion.div>
  );
}

function Achievements() {
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
    <section id="achievements" className="py-[120px] relative overflow-hidden bg-[#FFD54F]/5">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
        <span className="outline-text text-[15rem] sm:text-[22rem] lg:text-[30rem] font-black opacity-10 leading-none select-none tracking-tighter rotate-[8deg] translate-y-[-10%]">
          MILESTONES
        </span>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[90px]"
        >
          <span className="inline-block px-4 py-2 bg-[#FFD54F]/20 border border-[#FFC107]/30 rounded-full text-xs font-bold text-[#FFB300] uppercase tracking-wider mb-4">
            Milestones
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-[#1E293B]">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB300] to-[#FFC107] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-[1000px] mx-auto items-stretch"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-white border border-[#FFD54F]/25 premium-shadow rounded-3xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[#FFD54F]/20 flex items-center justify-center flex-shrink-0 text-[#FFB300] border border-[#FFC107]/10">
              <FiAward className="text-4xl" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-[#1E293B] mb-2">Passionate About Innovation</h3>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
                Actively participating in hackathons, workshops, and community events to stay at the forefront of AI and web development technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
