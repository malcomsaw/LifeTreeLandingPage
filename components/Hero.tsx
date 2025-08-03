
import React from 'react';
import RadialBackground from './RadialBackground';

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden">
            <RadialBackground />
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                    Declutter Your Mind. <br className="hidden md:block"/>See Your Life. <br className="hidden md:block"/>Make Better Decisions.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
                    LifeTree helps you map your thoughts, decisions, emotions, and experiences into a visual canvas — so you can finally see yourself clearly.
                </p>
                <div id="join-waitlist" className="mt-10">
                    <button className="bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-green-500 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-green-600/20">
                        → Join Waitlist
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
