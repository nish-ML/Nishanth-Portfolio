import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiFileText, FiDownload, FiCheckCircle } from 'react-icons/fi';
import { SiCodechef } from 'react-icons/si';
import { personalInfo } from '../../data/portfolio';
import { useCardTilt } from '../../hooks/useCardTilt';

function ContactInfoCard({ card, itemVariants }) {
  const cardRef = useCardTilt({ scale: 1.02, lift: 6 });
  const Icon = card.icon;

  return (
    <motion.a
      href={card.href}
      target={card.href.startsWith('http') ? '_blank' : undefined}
      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      variants={itemVariants}
      ref={cardRef}
      className={`flex items-center gap-4 p-4 bg-white border-2 border-[#FFD54F]/15 premium-shadow rounded-2xl transition-all duration-300 group relative overflow-hidden`}
    >
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-2xl" />
      <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
        <Icon className="text-xl" />
      </div>
      <div className="flex-1 min-w-0 relative z-10">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{card.label}</p>
        <p className="text-slate-700 font-semibold text-sm sm:text-base truncate">{card.value}</p>
      </div>
    </motion.a>
  );
}

function SocialButton({ social, itemVariants }) {
  const cardRef = useCardTilt({ scale: 1.08, lift: 4 });
  const Icon = social.icon;

  return (
    <motion.a
      href={social.href}
      target={social.href.startsWith('http') ? '_blank' : undefined}
      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      variants={itemVariants}
      ref={cardRef}
      className="flex-1 flex flex-col items-center gap-2 p-3 bg-white border-2 border-[#FFD54F]/15 premium-shadow rounded-xl transition-all duration-300 group relative overflow-hidden"
    >
      <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-xl" />
      <div className="w-10 h-10 rounded-lg bg-[#FFD54F]/20 text-[#FFB300] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD54F]/30 transition-all duration-300 relative z-10">
        <Icon className="text-lg" />
      </div>
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider relative z-10">{social.label}</span>
    </motion.a>
  );
}

function Contact() {
  const connectCardRef = useCardTilt({ scale: 1.02, lift: 10 });

  const contactCards = [
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'bg-[#FFD54F]/20 text-[#FFB300]',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'bg-[#FFD54F]/20 text-[#FFB300]',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'nish-ML',
      href: personalInfo.github,
      color: 'bg-[#FFD54F]/20 text-[#FFB300]',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'nishanth-m-m',
      href: personalInfo.linkedin,
      color: 'bg-[#FFD54F]/20 text-[#FFB300]',
    },
    {
      icon: SiCodechef,
      label: 'CodeChef',
      value: 'nish010906',
      href: 'https://www.codechef.com/users/nish010906',
      color: 'bg-[#FFD54F]/20 text-[#FFB300]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-[120px] relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center">
        <span className="outline-text text-[10rem] sm:text-[22rem] lg:text-[30rem] font-black opacity-10 leading-none select-none tracking-tighter rotate-[6deg] translate-y-[-10%]">
          CONNECT
        </span>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD54F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-[64px]"
        >
          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-[#FFD54F]/20 border border-[#FFC107]/30 rounded-full text-xs font-bold text-[#FFB300] uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black mb-6 text-[#1E293B] uppercase tracking-tighter leading-none">
              Let's <span className="block outline-text-dark text-[#FFB300]">Collaborate</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FFB300] to-[#FFC107] mx-auto rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Let's discuss opportunities, projects, or collaborations
          </p>
        </motion.div>

        <div className="max-w-[1140px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Left Column - Contact & Social Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.h3
                variants={itemVariants}
                className="text-xl font-black text-[#1E293B] uppercase tracking-tight mb-2"
              >
                Contact Information
              </motion.h3>

              {contactCards.map((card, index) => (
                  <ContactInfoCard key={index} card={card} itemVariants={itemVariants} />
              ))}

              <motion.h3
                variants={itemVariants}
                className="text-xl font-black text-[#1E293B] uppercase tracking-tight mt-6 mb-2"
              >
                Social Links
              </motion.h3>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {[
                  { icon: FiGithub, label: 'GitHub', href: personalInfo.github },
                  { icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.linkedin },
                  { icon: SiCodechef, label: 'CodeChef', href: 'https://www.codechef.com/users/nish010906' },
                  { icon: FiMail, label: 'Email', href: `mailto:${personalInfo.email}` },
                  { icon: FiPhone, label: 'Phone', href: `tel:${personalInfo.phone}` },
                ].map((social, index) => (
                  <SocialButton key={index} social={social} itemVariants={itemVariants} />
                ))}
              </div>
            </motion.div>

            {/* Right Column - Let's Connect Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              ref={connectCardRef}
              className="bg-white border-2 border-[#FFD54F]/25 premium-shadow rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden"
            >
              <div data-card-glow className="absolute inset-0 opacity-0 pointer-events-none z-0 rounded-[2rem]" />
              <div className="mb-8">
                <h3 className="text-3xl sm:text-4xl font-black text-[#1E293B] mb-3 tracking-tight">
                  Let's Build Something<br />Amazing Together
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base">
                  I'm always open to internships, collaborations, AI projects, web development opportunities and meaningful conversations.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold text-[#FFB300] uppercase tracking-wider mb-4">What You Can Expect</p>
                <div className="space-y-3">
                  {[
                    'Professional Communication',
                    'Timely Project Delivery',
                    'Innovative Solutions',
                    'Continuous Learning',
                    'Collaborative Mindset',
                    'Quality-Focused Development',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FiCheckCircle className="text-[#FFB300] text-lg flex-shrink-0" />
                      <span className="text-slate-600 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <p className="text-sm font-bold text-[#1E293B] mb-1">Have an idea or opportunity?</p>
                <p className="text-xs text-slate-400 font-medium mb-6">Let's connect and build something impactful.</p>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="/resume/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3.5 border border-[#FFD54F]/85 bg-white text-center rounded-2xl text-xs font-bold text-[#1E293B] hover:bg-[#FFFDF7] transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <FiFileText className="text-[#FFB300] text-sm" />
                      <span>Preview Resume</span>
                    </a>
                    <a
                      href="/resume/resume.pdf"
                      download="Nishanth_Resume.pdf"
                      className="px-4 py-3.5 bg-[#FFC107] text-center rounded-2xl text-xs font-bold text-[#1E293B] hover:bg-[#FFB300] transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/10"
                    >
                      <FiDownload className="text-sm" />
                      <span>Download Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
