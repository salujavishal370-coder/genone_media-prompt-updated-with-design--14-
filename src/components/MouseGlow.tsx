import React, { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(300px circle at ${e.clientX}px ${e.clientY}px, rgba(232, 121, 249, 0.15), transparent 50%)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[100] mix-blend-screen"
      style={{
        background: `radial-gradient(300px circle at -700px -700px, rgba(232, 121, 249, 0.15), transparent 50%)`
      }}
    />
  );
}
