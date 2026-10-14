import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface PixelBadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'orange' | 'cyan' | 'pink' | 'yellow' | 'purple' | 'gray';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const PixelBadge: React.FC<PixelBadgeProps> = ({
  children,
  variant = 'orange',
  size = 'md',
  icon,
  className,
}) => {
  const colorStyles = {
    green: 'bg-[#00eb84]/15 text-[#00eb84] border-[#00eb84]',
    orange: 'bg-[#ff8906]/15 text-[#ff8906] border-[#ff8906]',
    cyan: 'bg-[#00d2ff]/15 text-[#00d2ff] border-[#00d2ff]',
    pink: 'bg-[#e53170]/15 text-[#e53170] border-[#e53170]',
    yellow: 'bg-[#ffd000]/15 text-[#ffd000] border-[#ffd000]',
    purple: 'bg-[#9d4edd]/15 text-[#c77dff] border-[#9d4edd]',
    gray: 'bg-[#222238] text-[#a7a9be] border-[#3e3e5e]',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 font-pixel gap-1 border',
    md: 'text-xs px-2.5 py-1 font-pixel gap-1.5 border-2',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center select-none font-bold uppercase tracking-wide',
          colorStyles[variant],
          sizeStyles[size],
          className
        )
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
