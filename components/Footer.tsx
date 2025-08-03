
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500">
        <p className="font-bold text-slate-400"><span role="img" aria-label="leaf" className="mr-2">🌿</span>LifeTree</p>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} LifeTree. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
