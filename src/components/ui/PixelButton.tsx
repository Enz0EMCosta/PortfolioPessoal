import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'cyber';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  icon,
  className,
  disabled,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-[#ff8906] text-[#0f0e17] hover:bg-[#ffa033] border-black active:bg-[#e07800]',
    secondary: 'bg-[#222238] text-[#fffffe] hover:bg-[#2d2d48] border-black hover:text-[#ff8906]',
    success: 'bg-[#00eb84] text-[#0f0e17] hover:bg-[#33f09d] border-black active:bg-[#00c970]',
    danger: 'bg-[#e53170] text-[#fffffe] hover:bg-[#ea558a] border-black',
    cyber: 'bg-[#00d2ff] text-[#0f0e17] hover:bg-[#38dcff] border-black',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 font-pixel gap-1.5',
    md: 'text-xs sm:text-sm px-4 py-2.5 font-pixel gap-2',
    lg: 'text-sm sm:text-base px-6 py-3.5 font-pixel gap-3',
  };

  const baseClasses = twMerge(
    clsx(
      'inline-flex items-center justify-center font-bold transition-all uppercase tracking-wider',
      'border-2 sm:border-3 border-black pixel-box shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000]',
      'hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000000]',
      'active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000000]',
      'cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      variantStyles[variant],
      sizeStyles[size],
      className
    )
  );

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
