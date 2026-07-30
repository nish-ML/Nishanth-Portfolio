import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowRight, FiFileText, FiDownload } from 'react-icons/fi';
import { SiCodechef } from 'react-icons/si';
import { personalInfo } from '../../data/portfolio';
import profileImage from '../../assets/images/profile.jpeg.jpeg';
import { useCardTilt } from '../../hooks/useCardTilt';

function Hero() {
  const profileCardRef = useCardTilt({ scale: 1.03, lift: 8 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#FFFDF7] py-28 sm:py-[120px]"
    >
      {/* Spotify Wrapped style decorative text watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
        <span className="outline-text text-[10rem] sm:text-[22rem] lg:text-[30rem] font-black opacity-10 leading-none select-none tracking-tighter rotate-[-8deg] translate-y-[-10%]">
          HELLO
        </span>
      </div>

      {/* Ambient background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-72 sm:h-72 bg-[#FFD54F]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-56 h-56 sm:w-96 sm:h-96 bg-[#FFC107]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-8 md:gap-14 items-center max-w-[1140px] mx-auto"
        >
          {/* Left Content (7 columns on large screen) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-10 text-center flex flex-col items-center justify-center w-full">
            <motion.div variants={itemVariants} className="space-y-4 w-full flex flex-col items-center">
              <h1 className="text-3xl sm:text-6xl lg:text-8xl xl:text-[5.5rem] font-black text-[#1E293B] leading-[0.9] uppercase tracking-tighter text-center">
                Hi, I'm <br className="sm:hidden" />
                <span className="block text-[#FFC107] outline-text-dark font-black tracking-tighter select-all break-all sm:whitespace-nowrap">{personalInfo.name}</span>
              </h1>

              <p className="text-sm sm:text-2xl font-black text-[#FFB300] uppercase tracking-widest pt-2 text-center w-full">
                // {personalInfo.title}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl font-medium text-center"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA & Resume Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full"
            >
              <a
                href="#projects"
                className="btn-primary group magnetic-hover rounded-full py-3.5 px-8 sm:py-4 sm:px-10 text-sm sm:text-base"
              >
                <span>View Projects</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary magnetic-hover rounded-full py-3.5 px-8 sm:py-4 sm:px-10 text-sm sm:text-base"
              >
                <FiFileText className="text-[#FFB300] text-lg" />
                <span>Preview Resume</span>
              </a>

              <a
                href="/resume/resume.pdf"
                download="Nishanth_Resume.pdf"
                className="btn-secondary magnetic-hover rounded-full py-3.5 px-8 sm:py-4 sm:px-10 text-sm sm:text-base"
              >
                <FiDownload className="text-[#FFB300] text-lg" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2 w-full"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#FFD54F]/30 hover:border-[#FFC107] hover:bg-[#FFFDF7] shadow-sm flex items-center justify-center text-[#64748B] hover:text-[#1E293B] transition-all hover:-translate-y-1 duration-200 group"
                aria-label="GitHub"
              >
                <FiGithub className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#FFD54F]/30 hover:border-[#FFC107] hover:bg-[#FFFDF7] shadow-sm flex items-center justify-center text-[#64748B] hover:text-[#1E293B] transition-all hover:-translate-y-1 duration-200 group"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.codechef.com/users/nish010906"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#FFD54F]/30 hover:border-[#FFC107] hover:bg-[#FFFDF7] shadow-sm flex items-center justify-center text-[#64748B] hover:text-[#1E293B] transition-all hover:-translate-y-1 duration-200 group"
                aria-label="CodeChef"
              >
                <SiCodechef className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 rounded-full bg-white border border-[#FFD54F]/30 hover:border-[#FFC107] hover:bg-[#FFFDF7] shadow-sm flex items-center justify-center text-[#64748B] hover:text-[#1E293B] transition-all hover:-translate-y-1 duration-200 group"
                aria-label="Email"
              >
                <FiMail className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="w-12 h-12 rounded-full bg-white border border-[#FFD54F]/30 hover:border-[#FFC107] hover:bg-[#FFFDF7] shadow-sm flex items-center justify-center text-[#64748B] hover:text-[#1E293B] transition-all hover:-translate-y-1 duration-200 group"
                aria-label="Phone"
              >
                <FiPhone className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image (5 columns on large screen) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center lg:justify-end z-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-64 sm:w-80 md:w-96 lg:w-full max-w-md"
            >
              {/* Warm Amber gradient background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107] to-[#FFD54F] rounded-[2.5rem] blur-2xl opacity-20 animate-pulse" />
              
              {/* Profile image with tilted frame */}
              <div ref={profileCardRef} className="relative bg-white border-2 border-[#FFC107]/40 shadow-2xl rounded-[2.5rem] p-4 overflow-hidden">
                <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2.5rem]" />
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-auto rounded-[2rem] object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating amber decoration shapes */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#FFC107] to-[#FFB300] rounded-2xl opacity-40 blur-xl -z-10"
              />
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#FFD54F] to-[#FFC107] rounded-2xl opacity-40 blur-xl -z-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#FFC107]/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#FFC107] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
