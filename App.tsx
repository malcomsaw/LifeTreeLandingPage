
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import Why from './components/Why';
import ForWhom from './components/ForWhom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased selection:bg-green-500/30">
      <Header />
      <main>
        <Hero />
        <WhatIs />
        <Why />
        <ForWhom />
      </main>
      <Footer />
    </div>
  );
}

export default App;
