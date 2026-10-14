import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('.interactive-hover') ||
        target?.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    // Smooth trailing loop
    const followLoop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrail({ x: currentX, y: currentY });
      animId = requestAnimationFrame(followLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Trailing Ring with Heatmap Glow */}
      <div
        className="fixed rounded-full transition-transform duration-100 ease-out will-change-transform"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: isHovered ? '48px' : isClicked ? '24px' : '32px',
          height: isHovered ? '48px' : isClicked ? '24px' : '32px',
          transform: 'translate(-50%, -50%)',
          border: isHovered ? '1.5px solid #FF7E42' : '1px solid rgba(231, 111, 81, 0.5)',
          backgroundColor: isHovered ? 'rgba(231, 111, 81, 0.12)' : 'rgba(36, 157, 143, 0.05)',
          boxShadow: isHovered ? '0 0 16px rgba(255, 126, 66, 0.4)' : 'none',
        }}
      />

      {/* Center Precision Point */}
      <div
        className="fixed rounded-full will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isHovered ? '#FF7E42' : '#ffffff',
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
