import { Layers, Briefcase, SearchCode, HardHat, Activity, Box } from "lucide-react";

export default function Expertise() {
    const skills = [
        {
            icon: <Layers className="text-primary" size={32} />,
            title: "Structural Design",
            desc: "Advanced analysis and design of reinforced concrete and steel structures."
        },
        {
            icon: <Briefcase className="text-primary" size={32} />,
            title: "Project Management",
            desc: "Comprehensive oversight from inception to commissioning."
        },
        {
            icon: <SearchCode className="text-primary" size={32} />,
            title: "Feasibility Studies",
            desc: "Technical and economic viability assessments for large-scale projects."
        },
        {
            icon: <HardHat className="text-primary" size={32} />,
            title: "Construction Supervision",
            desc: "Quality assurance and on-site monitoring to ensure compliance."
        },
        {
            icon: <Activity className="text-primary" size={32} />,
            title: "Seismic Assessment",
            desc: "Evaluation and retrofitting of buildings for earthquake resilience."
        },
        {
            icon: <Box className="text-primary" size={32} />,
            title: "BIM Implementation",
            desc: "Building Information Modeling for enhanced project coordination."
        }
    ];

    return (
        <section className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Core Competencies</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">OUR TECHNICAL <span className="text-primary not-italic">COMMAND</span></h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="glass-panel p-10 rounded-2xl hover:bg-white/10 transition-all duration-500 group border-white/5"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                {skill.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{skill.title}</h4>
                            <p className="text-slate-400 leading-relaxed font-medium">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
