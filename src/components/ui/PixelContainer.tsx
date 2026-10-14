import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface PixelContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const PixelContainer: React.FC<PixelContainerProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <div
      id={id}
      className={twMerge(
        clsx(
          'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
