import React, { useRef, useEffect, useState } from 'react';
import { OrganicInkSplatter } from '../ui/OrganicInkSplatter';

interface Tech {
  name: string;
  icon: string;
}

const TECHS: Tech[] = [
  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  // Backend
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  // Database & DevOps
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  // Tools & Design
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const TechCard: React.FC<{ tech: Tech; index: number; visible: boolean }> = ({ tech, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  // Subtle unique rotation for each card to simulate hand-stamped tiles
  const naturalAngle = ((index % 5) - 2) * 0.8;

  return (
    <div
      className="flex flex-col items-center gap-3 group cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(0) rotate(${hovered ? 0 : naturalAngle}deg) scale(1)`
          : 'translateY(24px) scale(0.95)',
        transition: `opacity 0.45s ease ${index * 30}ms, transform 0.35s ease`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon container with organic stamped contour and ink press effect */}
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-all duration-300"
        style={{
          borderRadius: '20px 24px 18px 22px',
          background: hovered ? 'rgba(239, 246, 255, 0.96)' : 'rgba(255, 255, 255, 0.9)',
          border: `1.5px solid ${hovered ? 'rgba(37, 99, 235, 0.65)' : 'rgba(15, 23, 42, 0.16)'}`,
          boxShadow: hovered
            ? '0 12px 28px -4px rgba(37, 99, 235, 0.25), 1px 2px 0px rgba(15, 23, 42, 0.15)'
            : '1px 2px 0px rgba(15, 23, 42, 0.08)',
          transform: hovered ? 'translateY(-4px) scale(1.07)' : 'translateY(0) scale(1)',
        }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300 select-none"
          style={{
            filter: hovered ? 'brightness(1.05) drop-shadow(0 4px 8px rgba(37, 99, 235, 0.25))' : 'brightness(0.95)',
          }}
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = 'none';
            const p = t.parentElement;
            if (p) {
              p.innerHTML = `<span style="font-size:22px;font-weight:700;color:#2563eb">${tech.name.charAt(0)}</span>`;
            }
          }}
        />
      </div>

      {/* Name */}
      <span
        className="font-mono text-xs text-slate-700 text-center transition-colors duration-300 tracking-tight font-medium"
        style={{ color: hovered ? '#2563eb' : undefined }}
      >
        {tech.name}
      </span>
    </div>
  );
};

export const TechStack: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="techstack" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Organic ink section divider top */}
      <div className="ink-section-divider absolute top-0 left-0 right-0" />

      {/* Authentic wet ink puddles dropped in this section */}
      <OrganicInkSplatter
        size={360}
        variant="blue"
        rotate={-35}
        opacity={0.35}
        className="absolute -top-16 left-1/2 -translate-x-1/2"
      />
      <OrganicInkSplatter
        size={280}
        variant="black"
        rotate={85}
        opacity={0.32}
        className="absolute top-1/2 -left-12"
      />
      <OrganicInkSplatter
        size={220}
        variant="black"
        rotate={140}
        opacity={0.25}
        className="absolute bottom-6 -right-8"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div
          className="text-center mb-16 relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="ink-stamp inline-flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-slate-900 font-bold bg-white/95">
            Tecnologias &amp; Ferramentas
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-serif italic relative inline-block">
            meu{' '}
            <span className="font-sans font-black not-italic text-[#2563eb]">
              stack
            </span>
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-slate-700 max-w-md mx-auto leading-relaxed">
            As ferramentas e tecnologias que utilizo para transformar ideias em produtos digitais completos e performáticos.
          </p>
        </div>

        {/* Tech icons grid with organic irregular rhythm */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 sm:gap-8 justify-items-center">
          {TECHS.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
