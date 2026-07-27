'use client';

const PortfolioBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.24) 0%, transparent 32%), radial-gradient(circle at 80% 15%, rgba(168, 85, 247, 0.2) 0%, transparent 28%), radial-gradient(circle at 50% 100%, rgba(34, 211, 238, 0.16) 0%, transparent 38%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.03) 100%)',
          mixBlendMode: 'screen',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </div>
  );
};

export default PortfolioBackground;
