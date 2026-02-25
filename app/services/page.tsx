"use client";

import { motion } from "framer-motion";
import { Layers, Briefcase, SearchCode, HardHat, Activity, Box } from "lucide-react";

const services = [
    {
        icon: <Layers className="text-primary" size={40} />,
        title: "Structural Design & Analysis",
        desc: "State-of-the-art structural engineering solutions for residential, commercial, and industrial developments. We utilize advanced software for seismic analysis and optimization.",
        tags: ["Reinforced Concrete", "Steel Structures", "Seismic Retrofitting"]
    },
    {
        icon: <Briefcase className="text-primary" size={40} />,
        title: "Project Management",
        desc: "End-to-end project lifecycle management ensuring timely delivery, budget compliance, and technical excellence from feasibility to handover.",
        tags: ["Cost Control", "Scheduling", "Resource Planning"]
    },
    {
        icon: <SearchCode className="text-primary" size={40} />,
        title: "Feasibility Studies",
        desc: "Comprehensive technical and financial assessments that define the roadmap for successful infrastructure investments in the Ethiopian market.",
        tags: ["Market Analysis", "Risk Assessment", "Financial Modeling"]
    },
    {
        icon: <HardHat className="text-primary" size={40} />,
        title: "Construction Supervision",
        desc: "Rigorous on-site quality control and engineering supervision to ensure every detail matches the design specifications and safety standards.",
        tags: ["Quality Assurance", "Site Safety", "Technical Audit"]
    },
    {
        icon: <Activity className="text-primary" size={40} />,
        title: "Seismic & Wind Assessment",
        desc: "Specialized engineering services to evaluate and enhance the performance of buildings against lateral loads and natural disasters.",
        tags: ["Dynamic Analysis", "Wind Tunnel Testing", "Resilience Design"]
    },
    {
        icon: <Box className="text-primary" size={40} />,
        title: "BIM & 3D Modeling",
        desc: "Integrating Building Information Modeling into the design process to minimize coordination errors and streamline the construction workflow.",
        tags: ["Clash Detection", "Revit", "Virtual Construction"]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 bg-background-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-6">
                        ENGINEERING <span className="text-primary not-italic">SERVICES</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                        World-class consultancy delivering structural integrity and innovative solutions for Ethiopia's most ambitious projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 rotate-12">
                                {service.icon}
                            </div>
                            <div className="mb-8 p-4 bg-primary/10 rounded-xl inline-block group-hover:bg-primary/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-8 font-medium italic">
                                "{service.desc}"
                            </p>
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {service.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-black text-primary uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full group-hover:border-primary/40 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
