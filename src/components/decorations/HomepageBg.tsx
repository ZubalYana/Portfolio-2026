import { useEffect, useRef } from "react";

interface Intersection {
  x: number;
  y: number;
  phase: number;
  speed: number;
  isActive: boolean;
  activeStart: number;
  activeDuration: number;
}

export default function HomepageBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const CELL = 60;
    const BLUE_R = 0, BLUE_G = 140, BLUE_B = 255;

    let cols: number, rows: number;
    let nodes: Intersection[] = [];

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      cols = Math.ceil(canvas!.width / CELL) + 1;
      rows = Math.ceil(canvas!.height / CELL) + 1;
      build();
    }

    function build() {
      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            x: c * CELL,
            y: r * CELL,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 1.0,
            isActive: false,
            activeStart: 0,
            activeDuration: 300 + Math.random() * 700,
          });
        }
      }
    }

    function centerWeight(x: number, y: number): number {
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const t = Math.max(0, 1 - dist);
      return t * t * (3 - 2 * t); 
    }

    let lastTime = 0;

    function draw(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let c = 0; c < cols; c++) {
        const x = c * CELL;
        const cx = canvas!.width / 2;
        const dx = Math.abs(x - cx) / cx;
        const lineAlpha = Math.max(0.02, 0.18 * (1 - dx * dx));
        ctx.strokeStyle = `rgba(245,245,245,${lineAlpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas!.height);
        ctx.stroke();
      }
      for (let r = 0; r < rows; r++) {
        const y = r * CELL;
        const cy = canvas!.height / 2;
        const dy = Math.abs(y - cy) / cy;
        const lineAlpha = Math.max(0.02, 0.18 * (1 - dy * dy));
        ctx.strokeStyle = `rgba(245,245,245,${lineAlpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas!.width, y);
        ctx.stroke();
      }

      for (const n of nodes) {
        n.phase += n.speed * dt;

        const w = centerWeight(n.x, n.y);

        if (!n.isActive && Math.random() < 0.00015 * w) {
          n.isActive = true;
          n.activeStart = now;
          n.activeDuration = 400 + Math.random() * 600;
        }

        const basePulse = (Math.sin(n.phase) * 0.5 + 0.5) * 0.06;
        const baseAlpha = (0.08 + basePulse) * w + 0.015;
        let radius = 1.2;

        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,245,245,${baseAlpha.toFixed(3)})`;
        ctx.fill();

        if (n.isActive) {
          const p = (now - n.activeStart) / n.activeDuration;
          if (p >= 1) {
            n.isActive = false;
          } else {
            const burst = Math.sin(p * Math.PI);
            const burstAlpha = burst * 0.75 * (0.4 + w * 0.6);
            const burstRadius = 1.2 + burst * 2.0;

            const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, burstRadius * 5);
            grd.addColorStop(0, `rgba(${BLUE_R},${BLUE_G},${BLUE_B},${(burst * 0.2 * w).toFixed(3)})`);
            grd.addColorStop(1, `rgba(${BLUE_R},${BLUE_G},${BLUE_B},0)`);
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(n.x, n.y, burstRadius * 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(n.x, n.y, burstRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${BLUE_R},${BLUE_G},${BLUE_B},${burstAlpha.toFixed(3)})`;
            ctx.fill();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}