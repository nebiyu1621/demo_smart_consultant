export default function About() {
    return (
        <section id="about" className="py-24 bg-background-dark relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 technical-grid opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative" data-aos="fade-right">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/about_engineering.png"
                                alt="Engineering Legacy"
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-primary"></div>
                            <span className="text-xs font-black text-primary uppercase tracking-widest">ABOUT THE FIRM</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter italic">
                            ENGINEERING WITH <span className="text-primary not-italic">INTELLIGENCE</span> & INTEGRITY
                        </h2>
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
                            <p>
                                SMART Consulting Engineers PLC is a leading Ethiopian firm dedicated to delivering high-performance infrastructure solutions. Our team of veteran engineers combines local insights with international best practices.
                            </p>
                            <p>
                                We specialize in complex structural systems, urban road networks, and large-scale industrial projects. Our philosophy is rooted in technical precision and sustainable development.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            <div>
                                <span className="block text-4xl font-black text-white mb-1">200+</span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Projects Completed</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black text-white mb-1">15+</span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certified Experts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
