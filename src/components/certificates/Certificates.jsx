import { motion } from 'framer-motion';
import { FiAward, FiCheck } from 'react-icons/fi';
import { certifications } from '../../data/portfolio';
import { useCardTilt } from '../../hooks/useCardTilt';

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

function CertCard({ cert }) {
  const cardRef = useCardTilt();

  return (
    <motion.div
      variants={cardVariants}
      ref={cardRef}
      className="bg-white border-2 border-[#FFD54F]/25 premium-shadow rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 group flex flex-col items-center justify-between h-full text-center relative overflow-hidden"
    >
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2rem]" />
      <div className="w-14 h-14 rounded-2xl bg-[#FFD54F]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-[#FFB300] mx-auto">
        <FiAward className="text-2xl" />
      </div>

      <div className="space-y-3 w-full flex flex-col items-center text-center">
        <h3 className="text-xl font-bold leading-tight text-[#1E293B] group-hover:text-[#FFB300] transition-colors duration-200 uppercase tracking-tight text-center">
          {cert.title}
        </h3>

        <p className="text-sm font-black text-[#FFB300] uppercase tracking-wider text-center">
          {cert.issuer}
        </p>

        <div className="flex items-center justify-center gap-4 pt-1 w-full">
          <span className="text-sm font-bold text-slate-400">{cert.year}</span>
          {cert.score && (
            <div className="flex items-center gap-1 px-3 py-1 bg-[#FFD54F]/15 border border-[#FFD54F]/30 rounded-full">
              <FiCheck className="text-[#FFB300] text-sm flex-shrink-0" />
              <span className="text-xs font-bold text-[#FFB300]">
                Score: {cert.score}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Certificates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-[120px] relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
        <span className="outline-text text-[10rem] sm:text-[22rem] lg:text-[30rem] font-black opacity-10 leading-none select-none tracking-tighter rotate-[6deg] translate-y-[-10%]">
          CREDENTIALS
        </span>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-[50px]"
        >
          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-[#FFD54F]/20 border border-[#FFC107]/30 rounded-full text-xs font-bold text-[#FFB300] uppercase tracking-wider mb-4">
              Credentials
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-[#1E293B]">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FFB300] to-[#FFC107] mx-auto rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Professional certifications and learning achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 max-w-[1140px] mx-auto items-stretch"
        >
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-20 text-center bg-slate-50 border border-[#FFD54F]/20 premium-shadow rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiAward className="text-3xl text-[#FFB300]" />
            <h3 className="text-2xl font-black text-[#1E293B]">Continuous Learning</h3>
          </div>
          <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
            Committed to staying updated with the latest technologies and best practices through continuous education and certification programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;
