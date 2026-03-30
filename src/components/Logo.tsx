import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Navy Bracket and Slash */}
        <path d="M35 40L15 60L35 80" stroke="currentColor" className="text-foreground" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M55 25L40 95" stroke="currentColor" className="text-foreground" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        {/* Gold Bracket */}
        <path d="M60 40L80 60L60 80" stroke="currentColor" className="text-brand" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-3xl font-bold tracking-tighter">
        <span className="text-foreground">Liri</span>
        <span className="text-brand">soft</span>
      </span>
    </div>
  );
};
