
import React from 'react';

const RadialBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                        <radialGradient id="hero-gradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.15)" />
                            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                        </radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-gradient)" />
                </svg>
            </div>
            <div className="absolute inset-0 animate-pulse" style={{ animationDuration: '6s' }}>
                <svg width="100%" height="100%">
                    <circle cx="50%" cy="50%" r="25%" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="1" fill="none" />
                </svg>
            </div>
            <div className="absolute inset-0 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}>
                <svg width="100%" height="100%">
                    <circle cx="50%" cy="50%" r="40%" stroke="rgba(34, 197, 94, 0.05)" strokeWidth="1" fill="none" />
                </svg>
            </div>
            <div className="absolute inset-0 animate-spin-slow">
                 <svg width="100%" height="100%">
                    <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(203, 213, 225, 0.03)" strokeWidth="1" />
                    <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(203, 213, 225, 0.03)" strokeWidth="1" />
                    <line x1="25%" y1="0%" x2="75%" y2="100%" stroke="rgba(203, 213, 225, 0.02)" strokeWidth="1" />
                    <line x1="75%" y1="0%" x2="25%" y2="100%" stroke="rgba(203, 213, 225, 0.02)" strokeWidth="1" />
                 </svg>
            </div>
        </div>
    );
};

export default RadialBackground;
