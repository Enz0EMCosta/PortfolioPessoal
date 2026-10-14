import React from 'react';
import inkSplatterImg from '../../assets/ink_splatter_real.jpg';

interface InkSplatterProps {
  className?: string;
  size?: number | string;
  variant?: 'black' | 'blue';
  rotate?: number;
  opacity?: number;
}

/**
 * Organic Ink Splatter dropped on paper
 * Uses authentic photographic nanquim ink blotch with satellite droplets & fiber bleed
 */
export const OrganicInkSplatter: React.FC<InkSplatterProps> = ({
  className = '',
  size = 180,
  variant = 'black',
  rotate = 0,
  opacity = 0.85,
}) => {
  const isBlue = variant === 'blue';

  return (
    <div
      className={`pointer-events-none select-none shrink-0 ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        transform: `rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply"
        style={{
          backgroundImage: `url(${inkSplatterImg})`,
          opacity,
          filter: isBlue
            ? 'invert(22%) sepia(95%) saturate(3500%) hue-rotate(215deg) brightness(85%) contrast(110%)'
            : 'contrast(1.2) brightness(0.95)',
        }}
      />
    </div>
  );
};

/**
 * Hand-crafted organic ink drip / droplet vector for precise micro-details
 */
export const InkDroplets: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#0f172a',
}) => {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main irregular droplet */}
      <path d="M48 20 C52 28, 62 38, 64 50 C66 64, 56 78, 44 76 C32 74, 26 60, 30 48 C34 36, 44 26, 48 20 Z" opacity="0.88" />
      {/* Small satellite splash drops */}
      <circle cx="68" cy="24" r="3.5" opacity="0.75" />
      <circle cx="74" cy="36" r="2" opacity="0.65" />
      <circle cx="78" cy="55" r="4" opacity="0.8" />
      <circle cx="62" cy="78" r="2.5" opacity="0.7" />
      <circle cx="22" cy="68" r="3" opacity="0.75" />
      <circle cx="18" cy="42" r="2" opacity="0.6" />
      <circle cx="28" cy="28" r="2.5" opacity="0.7" />
      <circle cx="50" cy="88" r="4.5" opacity="0.85" />
      <circle cx="54" cy="95" r="1.5" opacity="0.6" />
    </svg>
  );
};

export default OrganicInkSplatter;
