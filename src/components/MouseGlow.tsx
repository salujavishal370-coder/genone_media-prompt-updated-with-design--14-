import React, { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -700, y: -700 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 pointer-events-none mix-blend-screen"
      style={{
        background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(232, 121, 249, 0.15), transparent 50%)`
      }}
    />
  );
}
