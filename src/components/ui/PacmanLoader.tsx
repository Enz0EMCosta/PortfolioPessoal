import React, { useState, useEffect } from 'react';
import './PacmanLoader.css';
import { YellowParticleExplosion } from './YellowParticleExplosion';
import { GlitterWrap } from './GlitterWrap';

interface PacmanLoaderProps {
  onFinish: () => void;
  durationMs?: number;
}

export const PacmanLoader: React.FC<PacmanLoaderProps> = ({
  onFinish,
  durationMs = 3500,
}) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'exploding' | 'warp' | 'done'>('loading');

  useEffect(() => {
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        // Step 1: Trigger yellow particle explosion
        setPhase('exploding');

        // Step 2: Trigger warp starfield transition
        setTimeout(() => {
          setPhase('warp');
        }, 400);

        // Step 3: Finish and reveal the portfolio
        setTimeout(() => {
          setPhase('done');
          onFinish();
        }, 1200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [durationMs, onFinish]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090f] select-none transition-opacity duration-600 ${
        phase === 'warp' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Starfield Warp effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <GlitterWrap
          speed={phase === 'loading' ? 2 : 14}
          particleCount={phase === 'loading' ? 250 : 600}
          starSize={phase === 'loading' ? 10 : 24}
          color1="#ffffff"
          color2="#ff8906"
          color3="#FFE500"
          glitterIntensity={phase === 'loading' ? 2 : 7}
          trailAmount={phase === 'loading' ? 75 : 90}
          className="w-full h-full opacity-40"
        />
        {/* Subtle scanline overlay */}
        <div className="absolute inset-0 scanlines-bg opacity-30 pointer-events-none" />
      </div>

      {/* Yellow Particle Explosion (Canvas overlay) */}
      <YellowParticleExplosion active={phase === 'exploding' || phase === 'warp'} />

      {/* Center Pac-Man Stage */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center p-6 max-w-sm w-full transition-transform duration-400 ${
          phase === 'exploding' ? 'animate-pacman-explode' : ''
        }`}
      >
        {/* Pac-Man Animation */}
        <div className="pacman-wrapper mb-6">
          <main id="container">
            <div className="dots">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <div className="dots2">
              <div className="dot2" />
              <div className="dot2" />
              <div className="dot2" />
              <div className="dot2" />
              <div className="dot2" />
              <div className="dot2" />
              <div className="dot2" />
              <div className="dot2" />
              <div className="dot2" />
              <div className="dot2" />
            </div>
            <div className="circle" />
          </main>
        </div>

        {/* Clean, Legible Monospace Percentage & Bar (No Heavy Neon) */}
        <div className="flex flex-col items-center gap-3 w-full max-w-[240px]">
          {/* Clean Percentage Counter */}
          <div className="font-mono text-2xl font-bold tracking-widest text-[#fffffe] tabular-nums">
            {progress}%
          </div>

          {/* Minimalist Clean Progress Line */}
          <div className="w-full h-2 bg-[#191929] border border-[#353556] p-0.5 overflow-hidden">
            <div
              className="h-full bg-[#FFE500] transition-all duration-75 ease-out"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacmanLoader;
