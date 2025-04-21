import { useEffect, useRef } from 'react';

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create binary rain
    const createBinaryRain = () => {
      const element = document.createElement('div');
      element.className = 'binary-rain';
      element.style.left = `${Math.random() * 100}%`;
      element.style.animationDuration = `${Math.random() * 2 + 1}s`;
      element.textContent = Math.random() > 0.5 ? '0' : '1';
      containerRef.current?.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 2000);
    };

    // Create shooting star
    const createShootingStar = () => {
      const element = document.createElement('div');
      element.className = 'shooting-star';
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 50}%`;
      containerRef.current?.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 3000);
    };

    // Start animations
    const binaryInterval = setInterval(createBinaryRain, 100);
    const starInterval = setInterval(createShootingStar, 2000);

    return () => {
      clearInterval(binaryInterval);
      clearInterval(starInterval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 matrix-bg" />;
}
