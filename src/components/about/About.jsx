import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { aboutContent, education } from '../../data/portfolio';
import { useCardTilt } from '../../hooks/useCardTilt';

function About() {
  const leftCardRef = useCardTilt();
  const rightCardRef = useCardTilt();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    { icon: '🤖', label: 'AI & Machine Learning' },
    { icon: '💻', label: 'Web Development' },
    { icon: '🚀', label: 'Problem Solver' },
    { icon: '🧠', label: 'Quick Learner' },
    { icon: '🌐', label: 'REST APIs' },
    { icon: '⚡', label: 'Team Player' },
  ];

  const coreFocus = [
    'Python',
    'Java',
    'React',
    'Django',
    'Machine Learning',
    'Artificial Intelligence',
    'Git',
    'PostgreSQL',
  ];

  const currentFocus = [
    'AI & Machine Learning',
    'Full Stack Development',
    'Building Real-World Projects',
  ];

  return (
    <section id="about" className="py-[120px] relative overflow-hidden bg-white">
      {/* Spotify Wrapped style decorative text watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
        <span className="outline-text text-[15rem] sm:text-[22rem] lg:text-[30rem] font-black opacity-10 leading-none select-none tracking-tighter rotate-[6deg] translate-y-[-10%]">
          ABOUT
        </span>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[90px]"
        >
          <span className="inline-block px-4 py-2 bg-[#FFD54F]/20 border border-[#FFC107]/30 rounded-full text-xs font-bold text-[#FFB300] uppercase tracking-wider mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-[#1E293B]">
            {aboutContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB300] to-[#FFC107] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[1140px] mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left - About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div ref={leftCardRef} className="bg-white border-2 border-[#FFD54F]/30 premium-shadow rounded-[2rem] p-8 sm:p-10 md:p-12 h-full flex flex-col items-center text-left relative overflow-hidden">
                <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2rem]" />

                {/* Intro heading */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">👋</span>
                  <h3 className="text-2xl font-black text-[#1E293B] tracking-tight">About Me</h3>
                </div>

                {/* Short introduction paragraph */}
                <p className="text-lg sm:text-xl font-bold text-slate-800 leading-relaxed text-center mb-8">
                  {aboutContent.paragraphs[0]}
                </p>

                {/* Quick Highlights */}
                <div className="w-full mb-8">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
                    Quick Highlights
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {highlights.map((item, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#FFD54F]/15 to-[#FFC107]/10 border border-[#FFD54F]/30 rounded-full text-sm font-semibold text-[#1E293B] cursor-default select-none transition-shadow hover:shadow-md hover:shadow-amber-500/10"
                      >
                        <span className="text-base">{item.icon}</span>
                        {item.label}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Remaining paragraphs */}
                <div className="w-full space-y-4">
                  {aboutContent.paragraphs.slice(1).map((paragraph, index) => (
                    <motion.p
                      key={index}
                      variants={itemVariants}
                      className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium text-center"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Core Focus */}
                <div className="w-full mt-8">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
                    Core Focus
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {coreFocus.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.06 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="inline-flex items-center px-4 py-2 bg-[#1E293B] rounded-xl text-sm font-bold text-white cursor-default select-none transition-all hover:bg-[#FFB300] hover:text-[#1E293B] hover:shadow-md hover:shadow-amber-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Education Card */}
            <motion.div variants={itemVariants}>
              <div ref={rightCardRef} className="bg-white border-2 border-[#FFD54F]/30 premium-shadow rounded-[2rem] p-8 sm:p-10 md:p-12 h-full flex flex-col items-center text-center relative overflow-hidden">
                <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2rem]" />
                <div className="w-full flex flex-col items-center">
                  <div className="flex flex-col items-center gap-3 mb-6 text-center w-full">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFC107] to-[#FFD54F] flex items-center justify-center shadow-md shadow-amber-500/10 text-[#1E293B]">
                      <FiAward className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-black text-[#1E293B] uppercase tracking-tight">Education</h3>
                  </div>

                  <div className="space-y-6 w-full flex flex-col items-center">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#1E293B] mb-2 uppercase tracking-tight">
                        {education.degree}
                      </h4>
                      <p className="text-base font-bold text-[#FFB300] uppercase tracking-wide">
                        {education.college}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                      <div className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 border border-[#FFD54F]/20 rounded-2xl text-center">
                        <FiCalendar className="text-2xl text-[#FFB300]" />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Duration</p>
                          <p className="font-bold text-[#1E293B]">{education.duration}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 border border-[#FFD54F]/20 rounded-2xl text-center">
                        <FiAward className="text-2xl text-[#FFB300]" />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">CGPA</p>
                          <p className="font-bold text-[#FFB300]">{education.cgpa}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-r from-[#FFD54F]/12 to-[#FFC107]/5 rounded-2xl border border-[#FFD54F]/30 text-center w-full">
                      <FiMapPin className="text-xl text-[#FFB300] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Location</p>
                        <p className="text-sm font-semibold text-slate-700">Coimbatore, Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Focus - replaces Academic Progress */}
                <div className="mt-8 w-full">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                    🎯 Current Focus
                  </h4>
                  <div className="flex flex-col gap-3">
                    {currentFocus.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03, x: 4 }}
                        className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-[#FFD54F]/12 to-[#FFC107]/5 border border-[#FFD54F]/25 rounded-2xl text-left cursor-default transition-shadow hover:shadow-md hover:shadow-amber-500/10"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#FFD54F] flex items-center justify-center flex-shrink-0 text-sm">
                          {index === 0 ? '🤖' : index === 1 ? '💻' : '🔨'}
                        </div>
                        <span className="text-sm font-bold text-[#1E293B]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
