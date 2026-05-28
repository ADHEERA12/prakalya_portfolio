import React, { useRef, useEffect } from 'react';

export default function BackgroundParticles() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = [
      'rgba(139,92,246,', // purple
      'rgba(255,102,179,', // pink
      'rgba(0,212,255,' // blue
    ];

    const particles = [];
    const COUNT = Math.floor((width * height) / 15000) + 50; // scalable count

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < COUNT; i++) {
      const c = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rand(0.6, 3.2),
        vx: rand(-0.15, 0.15),
        vy: rand(-0.05, 0.05),
        alpha: rand(0.3, 0.9),
        color: c
      });
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);

    let t = 0;
    function draw() {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);
      // subtle background tint is handled by site CSS; draw particles
      for (let p of particles) {
        // move
        p.x += p.vx;
        p.y += p.vy + Math.sin(t + p.x * 0.001) * 0.1;
        // wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // twinkle alpha
        const a = p.alpha * (0.7 + 0.3 * Math.sin(t * 2 + p.x * 0.01));

        ctx.beginPath();
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grd.addColorStop(0, p.color + (a * 1) + ')');
        grd.addColorStop(0.4, p.color + (a * 0.35) + ')');
        grd.addColorStop(1, p.color + '0)');
        ctx.fillStyle = grd;
        ctx.fillRect(p.x - p.r * 6, p.y - p.r * 6, p.r * 12, p.r * 12);
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="bg-particles"
      style={{ position: 'fixed', inset: 0, zIndex: -30, pointerEvents: 'none' }}
      aria-hidden
    />
  );
}
