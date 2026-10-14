import React, { useRef, useEffect, useState } from 'react';
import { OrganicInkSplatter } from '../ui/OrganicInkSplatter';

interface JourneyItem {
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  period: string;
  accent: string;
}

const JOURNEY_ITEMS: JourneyItem[] = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/First_Robotics_Competition_logo_2024.svg',
    logoAlt: 'FLL Robotics',
    title: 'Robótica',
    subtitle: 'Competidor de robótica',
    period: '2016 – 2019',
    accent: '#2563eb',
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bras%C3%A3o_UFS.svg/512px-Bras%C3%A3o_UFS.svg.png',
    logoAlt: 'UFS',
    title: 'Sistemas de Informação',
    subtitle: 'Graduando · UFS',
    period: '2023 – 2026',
    accent: '#1d4ed8',
  },
  {
    logo: 'https://img.icons8.com/color/96/tournament-bracket.png',
    logoAlt: 'Hackathons',
    title: 'Hackathons',
    subtitle: 'Competidor',
    period: '2024',
    accent: '#3b82f6',
  },
  {
    logo: 'https://img.icons8.com/fluency/96/web-design.png',
    logoAlt: 'LAWD',
    title: 'Liga Acadêmica de Dev Web',
    subtitle: 'Desenvolvedor Fullstack',
    period: '2025 – 2026',
    accent: '#2563eb',
  },
  {
    logo: 'https://raiatech.com.br/favicon.ico',
    logoAlt: 'RaiaTech',
    title: 'RaiaTech',
    subtitle: 'Frontend Software Developer',
    period: '2025 – 2026',
    accent: '#1d4ed8',
  },
  {
    logo: 'https://img.icons8.com/color/96/hospital.png',
    logoAlt: 'Hospital Primavera',
    title: 'Hospital Primavera',
    subtitle: 'Estagiário em TI',
    period: '2025 – Presente',
    accent: '#059669',
  },
];

const JourneyRow: React.FC<{ item: JourneyItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="journey-row group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s ease ${index * 80}ms`,
      }}
    >
      {/* Separator top */}
      <div className="h-px w-full bg-[#0f172a]/10 group-first:hidden" />

      <div className="flex items-center gap-5 py-6 sm:py-7 px-3 sm:px-5 transition-all duration-300 group-hover:bg-blue-50/50 rounded-2xl border border-transparent group-hover:border-blue-200/60 relative">
        {/* Logo container with hand-stamped contour */}
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center bg-white shadow-xs p-2 transition-all duration-300 group-hover:border-[#2563eb]/50 group-hover:shadow-md"
          style={{
            borderRadius: '16px 22px 14px 20px',
            border: '1.5px solid rgba(15, 23, 42, 0.2)',
          }}
        >
          <img
            src={item.logo}
            alt={item.logoAlt}
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent) {
                parent.innerHTML = `<span style="font-size:20px;font-weight:700;color:${item.accent}">${item.logoAlt.charAt(0)}</span>`;
              }
            }}
          />
        </div>

        {/* Title + subtitle */}
        <div className="flex-1 min-w-0">
          <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 leading-tight group-hover:text-[#2563eb] transition-colors duration-300">
            {item.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 truncate">
            {item.subtitle}
          </p>
        </div>

        {/* Period with stamped tag */}
        <span
          className="ink-stamp font-mono text-xs sm:text-sm font-bold shrink-0 tabular-nums transition-colors duration-300 bg-white/95"
          style={{ color: item.accent }}
        >
          {item.period}
        </span>
      </div>

      {/* Separator bottom for last item */}
      <div className="h-px w-full bg-[#0f172a]/10" />
    </div>
  );
};

export const Journey: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Organic ink divider */}
      <div className="ink-section-divider absolute top-0 left-0 right-0" />

      {/* Organic ink splatter drops */}
      <OrganicInkSplatter
        size={340}
        variant="blue"
        rotate={105}
        opacity={0.3}
        className="absolute top-10 -left-16"
      />
      <OrganicInkSplatter
        size={280}
        variant="black"
        rotate={-40}
        opacity={0.28}
        className="absolute bottom-16 -right-12"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="ink-stamp inline-flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-slate-900 font-bold bg-white/95">
            Trajetória
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900">
            <span className="font-serif italic">minha </span>
            <span className="font-sans font-black not-italic text-[#2563eb]">
              jornada
            </span>
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-slate-700 max-w-md mx-auto leading-relaxed font-light">
            De competições de robótica até desenvolvimento fullstack moderno — cada etapa construiu minha bagagem técnica.
          </p>
        </div>

        {/* Timeline list */}
        <div className="flex flex-col">
          {JOURNEY_ITEMS.map((item, i) => (
            <JourneyRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
