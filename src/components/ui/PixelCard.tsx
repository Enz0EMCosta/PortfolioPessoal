import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface PixelCardProps {
  title?: string;
  titleIcon?: React.ReactNode;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'terminal';
  className?: string;
  bodyClassName?: string;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  title,
  titleIcon,
  headerAction,
  children,
  variant = 'default',
  className,
  bodyClassName,
}) => {
  const variantBorder = {
    default: 'border-3 border-black bg-[#191929] shadow-[5px_5px_0px_0px_#000000]',
    accent: 'border-3 border-[#ff8906] bg-[#191929] shadow-[5px_5px_0px_0px_#000000]',
    terminal: 'border-3 border-black bg-[#0d0d15] shadow-[5px_5px_0px_0px_#000000]',
  };

  const headerBg = {
    default: 'bg-[#222238] border-b-3 border-black text-[#fffffe]',
    accent: 'bg-[#ff8906] border-b-3 border-black text-[#0f0e17]',
    terminal: 'bg-[#151522] border-b-3 border-black text-[#00eb84]',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'relative flex flex-col overflow-hidden transition-transform duration-200',
          variantBorder[variant],
          className
        )
      )}
    >
      {title && (
        <div
          className={clsx(
            'flex items-center justify-between px-3.5 py-2 font-pixel text-xs tracking-wider select-none',
            headerBg[variant]
          )}
        >
          <div className="flex items-center gap-2">
            {/* Retro window control pixel squares */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#e53170] border border-black inline-block" />
              <span className="w-2.5 h-2.5 bg-[#ffd000] border border-black inline-block" />
              <span className="w-2.5 h-2.5 bg-[#00eb84] border border-black inline-block" />
            </div>
            {titleIcon && <span className="inline-flex ml-1">{titleIcon}</span>}
            <span className="truncate">{title}</span>
          </div>

          {headerAction && <div className="text-[10px]">{headerAction}</div>}
        </div>
      )}

      <div className={twMerge(clsx('p-4 sm:p-5 text-sm sm:text-base', bodyClassName))}>
        {children}
      </div>
    </div>
  );
};
