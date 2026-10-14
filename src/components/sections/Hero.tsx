import React, { useRef, useCallback, useState } from 'react';
import { SocialLinks } from '../ui/SocialLinks';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import LiquidCarveButton from '../ui/LiquidCarveButton';
import enzoPng from '../../assets/Enzo.png';
import inkSpray from '../../assets/ink_spray_grain.jpg';
import { OrganicInkSplatter, InkDroplets } from '../ui/OrganicInkSplatter';

const CV_URL = 'https://docs.google.com/document/d/1tBUz6Xo-DjO7WS7AbqH5TRfqBTMbltWTj9Iw0qrBD9Q/export?format=pdf';
const ENZO_PHOTO = enzoPng;

// Minimalist floating skill badges around the photo with organic stamp shapes
const BADGES = [
  { label: 'React', emoji: '⚛️', x: '-16%', y: '12%', delay: '0s', rotate: '-3deg' },
  { label: 'TypeScript', emoji: '🔷', x: '96%', y: '16%', delay: '0.4s', rotate: '4deg' },
  { label: 'Node.js', emoji: '🟢', x: '86%', y: '68%', delay: '0.8s', rotate: '-2deg' },
  { label: 'Next.js', emoji: '▲', x: '-20%', y: '62%', delay: '1.2s', rotate: '3deg' },
  { label: 'UFS', emoji: '🎓', x: '35%', y: '-12%', delay: '0.6s', rotate: '-1deg' },
];

// Cartão de foto do Enzo com moldura orgânica
const PhotoCard: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(ENZO_PHOTO || '/Enzo.png');

  return (
    <div className="relative w-full h-full bg-[#f3efe6]">
      <img
        src={imgSrc}
        alt="Enzo Maia"
        className="w-full h-full object-cover object-top select-none grayscale-[0.2] contrast-[1.08]"
        loading="eager"
        onError={() => {
          if (imgSrc !== '/Enzo.png') {
            setImgSrc('/Enzo.png');
          }
        }}
      />
    </div>
  );
};

export const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotX = -dy * 12;
      const rotY = dx * 12;
      cardRef.current!.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.7s cubic-bezier(0.22,1,0.36,1)';
      cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      setTimeout(() => {
        if (cardRef.current) cardRef.current.style.transition = '';
      }, 700);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 overflow-hidden bg-transparent"
    >
      {/* ── Soft Ambient Glows (Minimalist Blue Bokeh) ── */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-sky-400/8 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Aerosol Spray Dust Mist ── */}
      <div
        className="absolute -top-12 -left-20 w-[38rem] h-[38rem] bg-cover bg-center mix-blend-multiply opacity-35 pointer-events-none select-none rounded-full"
        style={{ backgroundImage: `url(${inkSpray})` }}
      />
      <div
        className="absolute top-1/3 -right-24 w-[40rem] h-[40rem] bg-cover bg-center mix-blend-multiply opacity-25 pointer-events-none select-none rounded-full"
        style={{ backgroundImage: `url(${inkSpray})`, transform: 'rotate(180deg)' }}
      />

      {/* ── Genuine Organic Ink Splatters Dropped on Paper ── */}
      <OrganicInkSplatter
        size={340}
        variant="black"
        rotate={18}
        opacity={0.38}
        className="absolute top-10 -left-16"
      />
      <OrganicInkSplatter
        size={260}
        variant="blue"
        rotate={120}
        opacity={0.32}
        className="absolute top-2/3 right-12"
      />

      {/* ── Top badge (Stamped imperfect tag) ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-end gap-4 pt-2">
        <div className="ink-stamp flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-800 bg-white/90 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
          <span>Fullstack &amp; Creative Developer • Aracaju, BR</span>
        </div>
      </div>

      {/* ── Main content: Text left + Organic Photo right ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Left: Text with authentic ink & paper feel */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 max-w-2xl relative">
          
          {/* Subtle ink puddle behind intro */}
          <div className="absolute -top-12 -left-14 opacity-20 pointer-events-none">
            <InkDroplets className="w-32 h-32" color="#2563eb" />
          </div>

          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#2563eb] mb-3 tracking-wide">
            olá, eu sou enzo maia
          </p>

          <h1 className="ink-title font-sans font-black uppercase tracking-[-0.08em] leading-[0.88] text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] select-none my-2 relative">
            <span className="ink-bleed block" data-text="Fullstack">Fullstack</span>
            <span className="block text-[#1d4ed8]">Developer</span>
          </h1>

          <p className="mt-4 max-w-lg font-sans font-light text-base sm:text-lg text-slate-700 leading-relaxed">
            Construo aplicações web modernas e interfaces intuitivas com{' '}
            <span className="text-slate-900 font-semibold">React</span>,{' '}
            <span className="text-slate-900 font-semibold">Node.js</span>,{' '}
            <span className="text-slate-900 font-semibold">TypeScript</span> e{' '}
            <span className="text-slate-900 font-semibold">Next.js</span>, aliando engenharia robusta a um design refinado.
          </p>

          {/* Action buttons with organic stamped styling */}
          <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* Blue organic CTA button */}
            <a
              href="#contact"
              className="px-7 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans font-semibold text-sm transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.5)] flex items-center gap-2 group ink-organic-button"
            >
              <span>Vamos Conversar</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Resume button */}
            <div className="ink-button">
              <LiquidCarveButton
                label="Baixar Currículo"
                link={CV_URL}
                newTab={true}
                addIcon={true}
                icon={{ type: 'symbol', symbol: '↓', color: '#ffffff', size: 14, side: 'right' }}
                colors={{ fill: '#0f172a', textColor: '#ffffff' }}
                blob={{ color: '#2563eb', size: 65, smoothness: 60 }}
                font={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: 13, lineHeight: '1em', letterSpacing: '0.02em' }}
                padding="13px 24px"
                rounded={50}
                gap={8}
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        {/* Right: Organic photo card with wet ink spill backdrop */}
        <div
          className="order-1 lg:order-2 shrink-0 relative"
          style={{ willChange: 'transform' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Big organic ink puddle bleeding from behind the card */}
          <OrganicInkSplatter
            size={420}
            variant="black"
            rotate={-25}
            opacity={0.65}
            className="absolute -top-16 -left-16"
          />
          <OrganicInkSplatter
            size={240}
            variant="blue"
            rotate={60}
            opacity={0.45}
            className="absolute -bottom-10 -right-10"
          />

          {/* Floating skill badges with organic stamped shapes and slight random tilt */}
          {BADGES.map((b) => (
            <div
              key={b.label}
              className="absolute z-20 flex items-center gap-1.5 px-3.5 py-1.5 ink-stamp bg-white/95 text-slate-800 font-mono whitespace-nowrap shadow-md text-xs cursor-default"
              style={{
                left: b.x,
                top: b.y,
                transform: `rotate(${b.rotate})`,
                animation: `floatBadge 3.8s ease-in-out infinite alternate`,
                animationDelay: b.delay,
              }}
            >
              <span>{b.emoji}</span>
              <span className="font-semibold text-slate-800">{b.label}</span>
            </div>
          ))}

          {/* 3D Photo Card with organic deckle / stamped border */}
          <div
            ref={cardRef}
            className="relative cursor-pointer"
            style={{
              width: 310,
              height: 400,
              transformStyle: 'preserve-3d',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            {/* Card frame with organic imperfect contour */}
            <div
              className="relative w-full h-full overflow-hidden bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)]"
              style={{
                borderRadius: '28px 38px 24px 34px',
                border: '2px solid rgba(15, 23, 42, 0.22)',
              }}
            >
              {/* Photo */}
              <PhotoCard />

              {/* Bottom label overlay inside card with ink stamped tag */}
              <div
                className="absolute bottom-4 left-4 right-4 z-10 p-3 bg-white/92 backdrop-blur-md shadow-sm flex items-center justify-between"
                style={{
                  borderRadius: '16px 20px 14px 18px',
                  border: '1.2px solid rgba(15, 23, 42, 0.18)',
                }}
              >
                <div>
                  <p className="font-mono text-[10px] text-[#2563eb] uppercase tracking-wider font-bold">fullstack dev</p>
                  <p className="font-sans font-bold text-sm text-slate-900">Enzo Maia</p>
                </div>
                {/* Organic ink drop */}
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar with organic ink divider ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 font-mono text-xs text-slate-600">
        <div className="ink-section-divider mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2563eb]" /> React 19
            </span>
            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#1d4ed8]" /> TypeScript
            </span>
            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600" /> Node.js
            </span>
          </div>
          <a
            href="#projects"
            className="hidden sm:flex items-center gap-1.5 text-slate-600 hover:text-[#2563eb] transition-colors"
          >
            <span>Explorar Projetos</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes floatBadge {
          0%   { transform: translateY(0px) rotate(-1deg); }
          100% { transform: translateY(-7px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
