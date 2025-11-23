import React, { useEffect, useRef } from 'react';

export default function DataAnalyticsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Resize canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create bars
    const bars = Array.from({ length: 40 }, (_, i) => ({
      x: i * 25,
      height: 100 + Math.random() * 150,
      targetHeight: 100 + Math.random() * 150
    }));

    // Update target heights every 2 seconds
    const interval = setInterval(() => {
      bars.forEach(b => {
        b.targetHeight = 100 + Math.random() * 150;
      });
    }, 2000);

    // Create line chart points
    const points = Array.from({ length: 20 }, (_, i) => ({
      x: (i / 20) * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.6 + 100,
      offset: Math.random() * 1000
    }));

    function animate() {
      ctx.fillStyle = 'rgba(10, 12, 16, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid background
      ctx.strokeStyle = 'rgba(0,255,153,0.08)';
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Bars (smoothly transition toward targetHeight)
      bars.forEach(b => {
        b.height += (b.targetHeight - b.height) * 0.05; // easing
        ctx.fillStyle = 'rgba(0,200,255,0.7)';
        ctx.fillRect(b.x, canvas.height - b.height, 15, b.height);
      });

      // Line chart
      ctx.strokeStyle = 'rgba(0,255,153,0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      points.forEach((p, i) => {
        const y = p.y + Math.sin(Date.now() * 0.002 + p.offset) * 20;
        if (i === 0) ctx.moveTo(p.x, y);
        else ctx.lineTo(p.x, y);
      });
      ctx.stroke();

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: -1 }}
      aria-hidden="true"
    />
  );
}