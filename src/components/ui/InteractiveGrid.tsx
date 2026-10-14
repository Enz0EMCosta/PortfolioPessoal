// Interactive Grid — Originkit
// 3D Perspective Card Grid with Lift, Glow & Interactive Hover

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

const DEFAULT_ICONS = [
  // React
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.23174 23 20.46348'%3e%3ccircle cx='0' cy='0' r='2.05' fill='%2361dafb'/%3e%3cg stroke='%2361dafb' stroke-width='1' fill='none'%3e%3cellipse rx='11' ry='4.2'/%3e%3cellipse rx='11' ry='4.2' transform='rotate(60)'/%3e%3cellipse rx='11' ry='4.2' transform='rotate(120)'/%3e%3c/g%3e%3c/svg%3e",
  // TypeScript
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233178C6'%3e%3cpath d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12.44 14.522c.288.75 1.107 1.34 2.148 1.34 1.258 0 2.016-.69 2.016-1.642 0-2.42-3.83-2.142-3.83-5.264 0-1.745 1.4-3.08 3.51-3.08 1.63 0 2.875.767 3.39 2.035l-1.92 1.133c-.23-.62-.77-1.04-1.47-1.04-.79 0-1.37.49-1.37 1.19 0 2.18 3.83 1.94 3.83 5.31 0 1.97-1.57 3.29-3.95 3.29-2.28 0-3.69-1.13-4.22-2.48l1.866-1.072zm-6.9 3.01v-8.48H2.17V7.124h8.34v1.928H7.135v8.48H5.54z'/%3e%3c/svg%3e",
  // Next.js
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M18.665 21.978C16.808 23.255 14.5 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.584-1.576 6.8-4.083 9.002l-9.84-12.72v-1.14h1.792v1.545l8.796 11.291zm-7.973-5.746L4.545 7.857V6.714h1.792v7.652l4.355 1.866z'/%3e%3c/svg%3e",
  // Tailwind
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2338BDF8'%3e%3cpath d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z'/%3e%3c/svg%3e",
  // Figma
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath fill='%23F24E1E' d='M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z'/%3e%3cpath fill='%23A259FF' d='M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z'/%3e%3cpath fill='%23F24E1E' d='M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z'/%3e%3cpath fill='%23FF7262' d='M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z'/%3e%3cpath fill='%231ABCFE' d='M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z'/%3e%3c/svg%3e",
  // Node.js
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2368A063'%3e%3cpath d='M12 2L2 8v8l10 6 10-6V8l-10-6zm0 2.3l7.7 4.6-3.2 1.9-4.5-2.7v-3.8zm-1 3.8l-4.5 2.7-3.2-1.9L11 4.3v3.8zM3 9.4l4.5 2.7v5.4L3 14.8V9.4zm9 11.2l-3.5-2.1v-4.8l3.5 2.1v4.8zm1-4.8l3.5-2.1v4.8L13 20.6v-4.8zm8-6.4l-4.5 2.7v-5.4l4.5-2.7v5.4z'/%3e%3c/svg%3e",
  // Git
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F05032'%3e%3cpath d='M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.124 0L8.83 2.563l2.937 2.938a1.782 1.782 0 0 1 2.26 2.26l2.827 2.828a1.78 1.78 0 1 1-1.06 1.06l-2.63-2.63v4.614a1.78 1.78 0 1 1-1.5 0V8.75l-2.82-2.82L.452 14.32a1.5 1.5 0 0 0 0 2.124l10.48 10.479a1.5 1.5 0 0 0 2.123 0l10.49-10.48a1.5 1.5 0 0 0 0-2.513z'/%3e%3c/svg%3e",
  // Vite
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath fill='%23FFD814' d='M19.4 3.7L12.3 22l-1.8-4.7L19.4 3.7z'/%3e%3cpath fill='%23BD34FE' d='M4.6 3.7L11.7 22l1.8-4.7L4.6 3.7z'/%3e%3cpath fill='%2341D1FF' d='M12 2l-7.4 1.7L12 22l7.4-18.3L12 2z'/%3e%3c/svg%3e",
];

const DEFAULTS = {
  padding: "30px",
  columns: 6,
  rows: 4,
  gap: 12,
  rounded: 16,
  logoScale: 3,
  cardFill: "rgba(22, 24, 32, 0.75)",
  cardBorder: "rgba(255, 255, 255, 0.08)",
  shadow: true,
  cardShadow: "rgba(231, 111, 81, 0.25)",
  glow: true,
  glowStart: "rgba(36, 157, 143, 0.5)",
  glowEnd: "#E76F51",
  glowIntensity: 60,
  perspective: 1200,
  rotateX: 6,
  rotateY: -4,
};

const MAX_GLOW_BLUR = 16;
const DURATION = 240;
const LEAVE_DELAY = 150;

const NS = "framer-animate-grid";

const CSS = `
.${NS}-card {
  transition: all ${DURATION}ms cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.${NS}-shadow {
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.4),
    0 0 20px var(--ag-shadow);
}
.${NS}-card img {
  opacity: 0.75;
  transition: all ${DURATION}ms ease;
  filter: grayscale(10%) drop-shadow(0 2px 6px rgba(0,0,0,0.3));
}
.${NS}-card:hover img {
  opacity: 1;
  filter: grayscale(0%) drop-shadow(0 4px 12px rgba(231, 111, 81, 0.4));
}

.${NS}-small {
  transform: scale(1.04) translateZ(8px);
  border-color: rgba(255, 255, 255, 0.2) !important;
}
.${NS}-big {
  transform: scale(1.16) translateZ(25px) translateY(-6px);
  border-color: #E76F51 !important;
  background: rgba(30, 34, 46, 0.95) !important;
}

.${NS}-glow-big {
  animation: ${NS}-glow 1.5s ease-in-out infinite alternate;
}
.${NS}-glow-small {
  animation: ${NS}-glow-small 1.5s ease-in-out infinite alternate;
}
@keyframes ${NS}-glow {
  0%  { filter: drop-shadow(0 0 4px var(--ag-glow-start)); }
  to  { filter: drop-shadow(0 2px var(--ag-glow-blur) var(--ag-glow-end)); }
}
@keyframes ${NS}-glow-small {
  0%  { filter: drop-shadow(0 0 2px var(--ag-glow-start)); }
  to  { filter: drop-shadow(0 1px var(--ag-glow-blur-small) var(--ag-glow-start)); }
}
`;

interface ImageItem {
  src: string;
}

export interface InteractiveGridProps {
  images?: (ImageItem | string)[];
  padding?: string;
  columns?: number;
  rows?: number;
  gap?: number;
  rounded?: number;
  logoScale?: number;
  cardFill?: string;
  cardBorder?: string;
  shadow?: boolean;
  cardShadow?: string;
  glow?: boolean;
  glowStart?: string;
  glowEnd?: string;
  glowIntensity?: number;
  perspective?: number;
  rotateX?: number;
  rotateY?: number;
  style?: CSSProperties;
  className?: string;
}

const srcOf = (image: ImageItem | string): string =>
  typeof image === "string" ? image : (image?.src ?? "");

export function InteractiveGrid(props: InteractiveGridProps) {
  const {
    images = DEFAULT_ICONS,
    padding = DEFAULTS.padding,
    columns = DEFAULTS.columns,
    rows = DEFAULTS.rows,
    gap = DEFAULTS.gap,
    rounded = DEFAULTS.rounded,
    logoScale = DEFAULTS.logoScale,
    cardFill = DEFAULTS.cardFill,
    cardBorder = DEFAULTS.cardBorder,
    shadow = DEFAULTS.shadow,
    cardShadow = DEFAULTS.cardShadow,
    glow = DEFAULTS.glow,
    glowStart = DEFAULTS.glowStart,
    glowEnd = DEFAULTS.glowEnd,
    glowIntensity = DEFAULTS.glowIntensity,
    perspective = DEFAULTS.perspective,
    rotateX = DEFAULTS.rotateX,
    rotateY = DEFAULTS.rotateY,
    style,
    className,
  } = props;

  const urls = useMemo(() => {
    const list = (images ?? []).map(srcOf).filter(Boolean);
    return list.length ? list : DEFAULT_ICONS;
  }, [images]);

  const cols = Math.max(1, Math.round(columns));
  const rowCount = Math.max(1, Math.round(rows));
  const count = cols * rowCount;

  const [hovered, setHovered] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  const neighbours = useMemo(() => {
    if (hovered === null) return [];
    const out: number[] = [];
    if (hovered % cols !== 0) out.push(hovered - 1);
    if (hovered % cols !== cols - 1) out.push(hovered + 1);
    out.push(hovered - cols);
    out.push(hovered + cols);
    return out.filter((n) => n >= 0 && n < count);
  }, [hovered, cols, count]);

  const onEnter = (i: number) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setHovered(i);
  };
  const onLeave = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setHovered(null), LEAVE_DELAY);
  };

  const glowBlur =
    (Math.min(100, Math.max(0, glowIntensity)) / 100) * MAX_GLOW_BLUR;

  const logoPct = Math.min(10, Math.max(1, Math.round(logoScale))) * 18;

  return (
    <div
      className={className}
      style={
        {
          ...style,
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding,
          boxSizing: "border-box",
          "--ag-shadow": cardShadow,
          "--ag-glow-start": glowStart,
          "--ag-glow-end": glowEnd,
          "--ag-glow-blur": `${glowBlur.toFixed(1)}px`,
          "--ag-glow-blur-small": `${(glowBlur / 2).toFixed(1)}px`,
        } as CSSProperties
      }
    >
      <style>{CSS}</style>
      <div
        onPointerLeave={onLeave}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
          gap,
          width: "100%",
          height: "100%",
          transform: `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: count }).map((_, i) => {
          const isBig = hovered === i;
          const isSmall = !isBig && neighbours.includes(i);
          return (
            <div
              key={i}
              onPointerEnter={() => onEnter(i)}
              className={[
                `${NS}-card`,
                shadow && `${NS}-shadow`,
                isBig && `${NS}-big`,
                isSmall && `${NS}-small`,
                glow && isBig && `${NS}-glow-big`,
                glow && isSmall && `${NS}-glow-small`,
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 16px",
                background: cardFill,
                border: `1px solid ${cardBorder}`,
                borderRadius: rounded,
                boxSizing: "border-box",
                minWidth: 0,
                minHeight: 0,
                overflow: "visible",
                cursor: "pointer",
                zIndex: isBig ? count + 1 : i + 1,
              }}
            >
              <img
                src={urls[i % urls.length]}
                alt="Tech Stack Icon"
                draggable={false}
                style={{
                  width: `${logoPct}%`,
                  height: `${logoPct}%`,
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InteractiveGrid;
