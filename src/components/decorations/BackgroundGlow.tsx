interface BackgroundGlowProps {
  width: number;
  height: number;
  opacity: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
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
  return (
    <div
      className="absolute rounded-full pointer-events-none z-[-10]"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: top !== undefined ? `${top}px` : undefined,
        right: right !== undefined ? `${right}px` : undefined,
        bottom: bottom !== undefined ? `${bottom}px` : undefined,
        left: left !== undefined ? `${left}px` : undefined,
        opacity,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
    />
  );
}