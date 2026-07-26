function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="max-w-3xl space-y-4 text-left">
      <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFB300]">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-[#1E293B] sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-slate-500 font-medium sm:text-lg">{description}</p>}
    </header>
  );
}

export default SectionHeading;
