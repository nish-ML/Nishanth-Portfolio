import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiFileText, FiDownload } from 'react-icons/fi';
import { navLinks } from '../../data/portfolio';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks
        .map((item) => item.href.replace('#', ''))
        .filter(Boolean)
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const viewportCenter = window.scrollY + window.innerHeight / 3;
      const current = sections.reduce(
        (closest, section) => {
          const distance = Math.abs(section.offsetTop - viewportCenter);
          if (distance < closest.distance) {
            return { id: section.id, distance };
          }
          return closest;
        },
        { id: 'hero', distance: Number.POSITIVE_INFINITY }
      );

      setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFDF7]/95 backdrop-blur-xl shadow-md shadow-slate-100/50 border-b border-[#FFD54F]/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-8 sm:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.03 }}
            className="text-2xl font-bold relative group flex items-center gap-0.5 text-[#1E293B]"
          >
            <span className="gradient-text font-black">Nishanth</span>
            <span className="text-[#FFB300]">.</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFB300] to-[#FFC107] group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-semibold transition-colors group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? 'text-[#1E293B]' : 'text-[#64748B] group-hover:text-[#1E293B]'
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#FFC107]/12 rounded-full border border-[#FFD54F]/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#FFD54F]/80 bg-white rounded-full text-xs font-semibold text-[#1E293B] hover:bg-[#FFFDF7] hover:border-[#FFC107] transition-all flex items-center gap-1.5 shadow-sm shadow-slate-100"
            >
              <FiFileText className="text-[#FFB300] text-sm" />
              <span>Preview Resume</span>
            </a>
            <a
              href="/resume/resume.pdf"
              download="Nishanth_Resume.pdf"
              className="px-4 py-2 bg-[#FFC107] border border-[#FFC107] hover:bg-[#FFB300] hover:border-[#FFB300] rounded-full text-xs font-semibold text-[#1E293B] transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/10"
            >
              <FiDownload className="text-sm" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white border border-[#FFD54F]/30 flex items-center justify-center text-[#1E293B] hover:bg-[#FFFDF7] transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm lg:hidden"
              style={{ top: '5rem' }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-20 bottom-0 w-80 max-w-[85vw] bg-white border-l border-[#FFD54F]/20 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const id = link.href.replace('#', '');
                    const isActive = activeSection === id;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                          isActive
                            ? 'bg-[#FFC107]/12 border border-[#FFD54F]/40 text-[#1E293B]'
                            : 'text-[#64748B] hover:text-[#1E293B] hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Resume Actions - Mobile */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-4">Resume Options</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="/resume/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-3 border border-[#FFD54F]/85 bg-white text-center rounded-xl text-xs font-bold text-[#1E293B] hover:bg-[#FFFDF7] transition-all flex items-center justify-center gap-1"
                    >
                      <FiFileText className="text-[#FFB300]" />
                      Preview
                    </a>
                    <a
                      href="/resume/resume.pdf"
                      download="Nishanth_Resume.pdf"
                      className="px-3 py-3 bg-[#FFC107] text-center rounded-xl text-xs font-bold text-[#1E293B] hover:bg-[#FFB300] transition-all flex items-center justify-center gap-1"
                    >
                      <FiDownload />
                      Download
                    </a>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-400 text-center">
                    © 2026 Nishanth M M
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
