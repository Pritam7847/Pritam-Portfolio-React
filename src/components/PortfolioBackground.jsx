'use client';

import { useEffect, useRef, useState } from 'react';

const PortfolioBackground = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseRefPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRefPos.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrame;
    const smoothMouse = () => {
      setMousePos((prev) => ({
        x: prev.x + (mouseRefPos.current.x - prev.x) * 0.1,
        y: prev.y + (mouseRefPos.current.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(smoothMouse);
    };

    animationFrame = requestAnimationFrame(smoothMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const gradientX = mousePos.x * 100;
  const gradientY = mousePos.y * 100;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0e27]"
      aria-hidden="true"
    >
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1629] via-[#0a0e27] to-[#050810]" />

      {/* Aurora Mesh Gradient - Top Left */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-40 mix-blend-screen transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%)',
          top: '-200px',
          left: '-200px',
          transform: `translate(${gradientX * 20}px, ${gradientY * 20}px)`,
        }}
      />

      {/* Aurora Mesh Gradient - Top Right */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-35 mix-blend-screen transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)',
          top: '-100px',
          right: '-150px',
          transform: `translate(${-gradientX * 25}px, ${gradientY * 15}px)`,
        }}
      />

      {/* Aurora Mesh Gradient - Bottom Center */}
      <div
        className="absolute w-[900px] h-[600px] rounded-full blur-3xl opacity-25 mix-blend-screen transition-transform duration-700"
        style={{
          background: 'radial-gradient(ellipse, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.05) 40%, transparent 70%)',
          bottom: '-200px',
          left: '50%',
          transform: `translateX(calc(-50% + ${gradientX * 15}px)) translateY(${-gradientY * 20}px)`,
        }}
      />

      {/* Animated Grid Pattern - Ultra Subtle */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="url(#gridGradient)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating Gradient Orbs - Layer 1 */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          top: '15%',
          left: '10%',
          animation: 'float 20s ease-in-out infinite',
        }}
      />

      {/* Floating Gradient Orbs - Layer 2 */}
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          bottom: '10%',
          right: '15%',
          animation: 'float 25s ease-in-out infinite reverse',
        }}
      />

      {/* Floating Gradient Orbs - Layer 3 */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-10 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
          top: '50%',
          right: '5%',
          animation: 'float 30s ease-in-out infinite',
        }}
      />

      {/* Light Beam Effects - Diagonal */}
      <div
        className="absolute w-full h-full opacity-20 mix-blend-screen"
        style={{
          background: `linear-gradient(135deg, 
            transparent 0%, 
            rgba(99, 102, 241, 0.15) 25%, 
            transparent 40%,
            transparent 60%,
            rgba(34, 211, 238, 0.1) 75%,
            transparent 100%)`,
          animation: 'shimmer 8s ease-in-out infinite',
        }}
      />

      {/* Glassmorphism Panel - Upper Center (Hidden on mobile) */}
      <div
        className="absolute hidden md:block w-[600px] h-[400px] rounded-3xl backdrop-blur-2xl opacity-0 hover:opacity-20 transition-opacity duration-1000"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
      />

      {/* Soft Noise Texture Overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' seed='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'drift 20s linear infinite',
        }}
      />

      {/* Vignette - Premium fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, 
            transparent 0%, 
            transparent 40%, 
            rgba(0, 0, 0, 0.3) 75%, 
            rgba(0, 0, 0, 0.6) 100%)`,
        }}
      />

      {/* Additional radial vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, 
            transparent 0%, 
            transparent 50%, 
            rgba(0, 0, 0, 0.4) 100%)`,
        }}
      />

      {/* Animated Gradient Line - Horizontal */}
      <div
        className="absolute w-full h-px opacity-30"
        style={{
          top: '30%',
          background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)',
          animation: 'slideX 15s ease-in-out infinite',
        }}
      />

      {/* Animated Gradient Line - Vertical */}
      <div
        className="absolute w-px h-full opacity-25"
        style={{
          left: '50%',
          background: 'linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.4), transparent)',
          animation: 'slideY 18s ease-in-out infinite reverse',
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 40px) scale(0.95);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.35;
          }
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, 10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes slideX {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes slideY {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (max-width: 768px) {
          [style*='animation: float'] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioBackground;
