
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          <span role="img" aria-label="leaf" className="mr-2">🌿</span>LifeTree
        </div>
        <a href="#join-waitlist" className="hidden md:inline-block bg-green-600 text-white font-bold py-2 px-5 rounded-full hover:bg-green-500 transition-colors duration-300">
          Join Waitlist
        </a>
      </div>
    </header>
  );
};

export default Header;
