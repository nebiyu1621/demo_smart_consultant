"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        title: "Bole Road Commercial Tower",
        category: "Structural Design",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        year: 2023
    },
    {
        title: "Industrial Park Expensions",
        category: "Project Management",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
        year: 2022
    },
    {
        title: "Addis-Adama Expressway Audit",
        category: "Construction Supervision",
        image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928",
        year: 2021
    },
    {
        title: "Mixed-Use Plaza Retaining Wall",
        category: "Seismic Assessment",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931",
        year: 2023
    }
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-24 bg-background-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-none">
                        PROJECT <span className="text-primary not-italic">PORTFOLIO</span>
                    </h1>

                    <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
                                    <h3 className="text-3xl font-black text-white italic tracking-tighter">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
