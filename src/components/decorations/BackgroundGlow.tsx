interface BackgroundGlowProps {
  width: number | string;
  height: number | string;
  opacity: number;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  color?: string;
}

export default function BackgroundGlow({
  width,
  height,
  opacity,
  top,
  right,
  bottom,
  left,
  color = '#008CFF',
}: BackgroundGlowProps) {
  const toCss = (v?: number | string) =>
    v === undefined ? undefined : typeof v === 'number' ? `${v}px` : v;

  return (
    <div
      className="absolute rounded-full pointer-events-none z-[-10]"
      style={{
        width: toCss(width),
        height: toCss(height),
        top: toCss(top),
        right: toCss(right),
        bottom: toCss(bottom),
        left: toCss(left),
        opacity,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
    />
  );
}