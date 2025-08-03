
import React from 'react';

const Why = () => {
    const points = [
        { q: "Feel constantly overwhelmed by your thoughts?", a: "LifeTree helps you unpack them visually." },
        { q: "Keep looping through the same life problems?", a: "Map out past decisions and where they lead." },
        { q: "Struggling to grow or change?", a: "Trace your beliefs, fears, and experiences." },
        { q: "Traditional journaling not working?", a: "LifeTree is structured, visual, and smart." }
    ];

    return (
        <section className="py-20 sm:py-32 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Why You’ll Want LifeTree</h2>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {points.map((point, index) => (
                        <div key={index} className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:border-green-500/50 transition-colors duration-300">
                            <p className="text-xl font-semibold text-white mb-4">
                                <span className="text-2xl mr-3" role="img" aria-label="question mark">❓</span>
                                {point.q}
                            </p>
                            <p className="text-lg text-green-400 flex items-start">
                                <span className="font-bold mr-3 text-2xl leading-none">→</span>
                                <span>{point.a}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;
