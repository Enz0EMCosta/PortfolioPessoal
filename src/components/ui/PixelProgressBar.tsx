import React from 'react';
import { clsx } from 'clsx';

export interface PixelProgressBarProps {
  label: string;
  value: number; // 0 to 100
  color?: 'green' | 'orange' | 'cyan' | 'pink' | 'purple';
  showPercent?: boolean;
}

export const PixelProgressBar: React.FC<PixelProgressBarProps> = ({
  label,
  value,
  color = 'green',
  showPercent = true,
}) => {
  const colorMap = {
    green: 'bg-[#00eb84]',
    orange: 'bg-[#ff8906]',
    cyan: 'bg-[#00d2ff]',
    pink: 'bg-[#e53170]',
    purple: 'bg-[#9d4edd]',
  };

  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between items-center text-xs font-pixel">
        <span className="text-[#a7a9be] uppercase">{label}</span>
        {showPercent && (
          <span className="text-[#fffffe]">{clampedValue}%</span>
        )}
      </div>
      <div className="h-4 w-full bg-[#0d0d15] border-2 border-black p-0.5 relative overflow-hidden">
        <div
          className={clsx(
            'h-full transition-all duration-500 ease-out',
            colorMap[color]
          )}
          style={{ width: `${clampedValue}%` }}
        />
        {/* Pixel grid pattern inside bar */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_6px,rgba(0,0,0,0.5)_6px)] bg-[length:8px_100%] pointer-events-none" />
      </div>
    </div>
  );
};
