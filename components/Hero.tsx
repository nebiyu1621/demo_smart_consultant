export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-background-dark">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark z-10"></div>
                <div className="w-full h-full bg-[url('/civil_img.jpg')] bg-cover bg-center grayscale opacity-40"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Precision Engineering Excellence</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none italic">
                    SHAPING THE<br />
                    <span className="text-primary not-italic">INFRASTRUCTURE</span><br />
                    OF TOMORROW
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                    SMART Consulting Engineers PLC provides cutting-edge civil engineering solutions, serving Ethiopia's growing infrastructure needs with global standards.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="/services"
                        className="group relative px-10 py-5 bg-primary text-white font-black uppercase tracking-widest rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
                    >
                        <span className="relative z-10">Explore Our Services</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                    <a
                        href="/portfolio"
                        className="px-10 py-5 bg-white/5 border border-white/20 hover:border-primary/50 text-white font-black uppercase tracking-widest rounded-xl transition-all hover:bg-white/10"
                    >
                        View Projects
                    </a>
                </div>
            </div>

            {/* Technical Detail Elements */}
            <div className="absolute bottom-12 left-12 hidden lg:block opacity-20">
                <div className="flex items-center gap-4">
                    <div className="h-[2px] w-20 bg-primary"></div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Est. 2004</span>
                </div>
            </div>
        </section>
    );
}
