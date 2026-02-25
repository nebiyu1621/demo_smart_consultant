"use client";

import { motion } from "framer-motion";

export default function ConsultationPage() {
    return (
        <div className="pt-32 pb-24 bg-background-dark min-h-screen relative overflow-hidden">
            {/* Technical grid background */}
            <div className="absolute inset-0 technical-grid opacity-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel p-10 md:p-16 rounded-[40px] border-white/5 shadow-2xl"
                >
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-4 uppercase">
                            Book <span className="text-primary not-italic">Consultation</span>
                        </h1>
                        <p className="text-slate-400 font-medium">Initialize your infrastructure project with SMART's executive engineering team.</p>
                    </div>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
                                <input className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all font-bold" placeholder="E.g. Tadesse Bekele" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Organization</label>
                                <input className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all font-bold" placeholder="E.g. ABC Developers" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Project Type</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all font-bold appearance-none">
                                <option className="bg-slate-900">Structural Design Review</option>
                                <option className="bg-slate-900">Infrastructure Feasibility Study</option>
                                <option className="bg-slate-900">Road & Highway Engineering</option>
                                <option className="bg-slate-900">BIM Project Setup</option>
                                <option className="bg-slate-900">Seismic Assessment</option>
                                <option className="bg-slate-900">Site Supervision</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Detailed Requirements</label>
                            <textarea
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all font-bold h-40"
                                placeholder="Describe the scope and location of your project..."
                            ></textarea>
                        </div>

                        <button className="w-full bg-primary hover:bg-orange-600 text-white font-black py-6 rounded-2xl uppercase tracking-[0.3em] transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20">
                            Submit Engineering Request
                        </button>

                        <p className="text-[10px] text-center text-slate-600 font-bold uppercase tracking-widest pt-4">
                            Typical response time: <span className="text-white">Under 24 Business Hours</span>
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
