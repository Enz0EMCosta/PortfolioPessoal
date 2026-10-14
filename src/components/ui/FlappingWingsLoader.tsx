import React, { useState, useEffect } from 'react';
import './FlappingWingsLoader.css';

interface FlappingWingsLoaderProps {
  onFinish: () => void;
  durationMs?: number;
}

export const FlappingWingsLoader: React.FC<FlappingWingsLoaderProps> = ({
  onFinish,
  durationMs = 2800,
}) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setIsFading(true);
        setTimeout(() => {
          onFinish();
        }, 600);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [durationMs, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0e1015] select-none transition-opacity duration-600 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient heat-map glow */}
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#249D8F]/20 via-[#E9C46A]/15 to-[#E76F51]/25 blur-3xl pointer-events-none" />

      <div className="flapping-loader-container relative z-10">
        {/* Flapping Wings Loader Animation */}
        <div className="flapping-loader">
          <div className="dot-one" />
          <div className="dot-two" />
          <div className="dot-three" />
        </div>

        {/* Clean, Elegant Progress Counter */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="font-mono text-xs tracking-widest text-[#a7a9be] uppercase">
            Loading Experience
          </span>
          <span className="font-mono text-2xl font-bold tracking-wider text-white tabular-nums">
            {progress}%
          </span>
          {/* Subtle minimal progress line */}
          <div className="w-36 h-1 bg-[#1e212b] rounded-full overflow-hidden mt-1">
            <div
              className="h-full bg-gradient-to-r from-[#249D8F] via-[#E9C46A] to-[#E76F51] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlappingWingsLoader;
