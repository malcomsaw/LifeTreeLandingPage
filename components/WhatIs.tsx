
import React from 'react';
import { ListItemCheckIcon } from '../constants';

const WhatIs = () => {
  const features = [
    "Visualize your life’s biggest patterns",
    "Understand emotional triggers and behaviors",
    "Connect past events to current beliefs",
    "Spot repeated mistakes and hidden growth",
    "Choose with clarity instead of chaos",
  ];

  return (
    <section className="py-20 sm:py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
                What’s LifeTree?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
                LifeTree is a personal mind mapping app that turns your thoughts, feelings, decisions, and memories into a visual decision tree.
            </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
            <ul className="space-y-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 pt-1">
                            <ListItemCheckIcon />
                        </div>
                        <p className="ml-4 text-lg text-slate-300">{feature}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
