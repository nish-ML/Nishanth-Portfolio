function Footer() {
  return (
    <footer className="relative border-t border-[#FFC107]/30 bg-[#FFFDF7]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC107]/60 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 py-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-sm text-[#64748B] font-medium">
          <a
            href="mailto:nish010906@gmail.com"
            className="transition-colors duration-300 hover:text-[#FFB300]"
          >
            📧 nish010906@gmail.com
          </a>
          <span className="hidden sm:inline mx-4 text-[#FFC107]/40 select-none">|</span>
          <span>📍 Coimbatore,Tamil Nadu,India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
