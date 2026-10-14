import React from 'react';

interface Ghost {
  id: number;
  x: number;       // % horizontal inicial
  size: number;    // em px
  duration: number; // segundos para subir
  delay: number;   // delay inicial em segundos
  opacity: number;
  drift: number;   // quanto deriva na horizontal
}

const NUM_GHOSTS = 18;

function makeGhosts(): Ghost[] {
  return Array.from({ length: NUM_GHOSTS }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 16 + Math.random() * 24,
    duration: 14 + Math.random() * 20,
    delay: -(Math.random() * 30),
    opacity: 0.08 + Math.random() * 0.14,
    drift: (Math.random() - 0.5) * 120,
  }));
}

const GHOSTS = makeGhosts();

// Pixel ghost SVG roxo estilo Pokémon
const GhostSVG: React.FC<{ size: number; opacity: number }> = ({ size, opacity }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ opacity, imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Body */}
    <rect x="3" y="5" width="10" height="8" fill="#9d4edd"/>
    {/* Head dome */}
    <rect x="4" y="3" width="8" height="2" fill="#9d4edd"/>
    <rect x="5" y="2" width="6" height="1" fill="#9d4edd"/>
    {/* Eyes white */}
    <rect x="5" y="6" width="2" height="2" fill="#e0aaff"/>
    <rect x="9" y="6" width="2" height="2" fill="#e0aaff"/>
    {/* Eye pupils */}
    <rect x="5" y="7" width="1" height="1" fill="#3c096c"/>
    <rect x="9" y="7" width="1" height="1" fill="#3c096c"/>
    {/* Mouth */}
    <rect x="6" y="9" width="4" height="1" fill="#3c096c"/>
    {/* Bottom wavy edge */}
    <rect x="3" y="13" width="2" height="2" fill="#9d4edd"/>
    <rect x="7" y="13" width="2" height="2" fill="#9d4edd"/>
    <rect x="11" y="13" width="2" height="2" fill="#9d4edd"/>
    {/* Glow tint */}
    <rect x="3" y="5" width="10" height="10" fill="#c77dff" opacity="0.18"/>
  </svg>
);

export const FloatingGhosts: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    >
      {GHOSTS.map((g) => (
        <div
          key={g.id}
          style={{
            position: 'absolute',
            left: `${g.x}%`,
            bottom: '-60px',
            animation: `ghostRise ${g.duration}s linear ${g.delay}s infinite`,
            '--drift': `${g.drift}px`,
          } as React.CSSProperties}
        >
          <GhostSVG size={g.size} opacity={g.opacity} />
        </div>
      ))}

      <style>{`
        @keyframes ghostRise {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) translateX(calc(var(--drift) * 0.5));
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translateY(-105vh) translateX(var(--drift)) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingGhosts;
