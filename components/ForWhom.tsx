
import React from 'react';

const ForWhom = () => {
  const audiences = [
    "Going through a quarter-life crisis",
    "Starting therapy or self-coaching",
    "Recovering from burnout",
    "Planning a new chapter of life...",
  ];

  return (
    <section className="py-20 sm:py-32 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          A Tool for Reflective Minds
        </h2>
        <p className="mt-4 text-lg text-slate-400">
            Whether you’re:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => (
            <span key={index} className="bg-slate-800 text-slate-300 py-2 px-5 rounded-full text-md md:text-lg border border-slate-700">
              {audience}
            </span>
          ))}
        </div>
        <p className="mt-16 text-2xl md:text-3xl font-bold text-green-400 max-w-3xl mx-auto">
          LifeTree shows you the map of your mind.
        </p>
      </div>
    </section>
  );
};

export default ForWhom;
