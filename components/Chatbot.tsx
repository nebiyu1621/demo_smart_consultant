"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading, error, reload, append } = useChat({
        onError: (err) => {
            console.error("Chat Component Error:", err);
        }
    });
    const scrollRef = useRef<HTMLDivElement>(null);

    const quickActions = [
        { label: "🏗️ Structural Design Services", query: "Can you tell me about your Structural Design & Analysis services?" },
        { label: "📉 Project Feasibility Study", query: "I need information about Project Feasibility Studies." },
        { label: "🏢 BIM & 3D Modeling", query: "How does BIM & 3D Modeling help my project?" },
        { label: "📅 Book a Consultation", query: "I'd like to book a consultation for my project." },
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            {/* Chat Bubble Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-[60] hover:scale-110 active:scale-95 transition-transform"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] glass-panel rounded-2xl shadow-3xl z-[60] flex flex-col overflow-hidden border border-white/10"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-primary/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                    <span className="text-white font-black text-xs">C</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Civic</h3>
                                    <p className="text-[10px] text-primary font-bold">Senior Engineering Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
                        >
                            {/* Civic Greeting */}
                            <div className="flex justify-start">
                                <div className="max-w-[85%] bg-white/5 text-slate-200 border border-white/10 rounded-2xl p-3 rounded-tl-none text-sm group">
                                    <p className="font-bold text-primary text-[10px] uppercase mb-1">Civic</p>
                                    Hello! I am Civic, your dedicated Civil Engineering Assistant. How can I help you with your project or consultancy needs today?
                                </div>
                            </div>

                            {messages.length === 0 && (
                                <div className="grid grid-cols-1 gap-2 mt-4">
                                    {quickActions.map((action) => (
                                        <button
                                            key={action.label}
                                            onClick={() => append({ role: 'user', content: action.query })}
                                            className="text-left p-3 text-xs font-semibold text-primary border border-primary/20 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all hover:border-primary/40 group flex items-center justify-between"
                                        >
                                            {action.label}
                                            <Send size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${m.role === 'user'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white/5 text-slate-200 border border-white/10 rounded-tl-none'
                                        }`}>
                                        {m.role === 'assistant' && (
                                            <p className="font-bold text-primary text-[10px] uppercase mb-1">Civic</p>
                                        )}
                                        {m.content}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3 rounded-tl-none">
                                        <Loader2 size={16} className="text-primary animate-spin" />
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="flex flex-col items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                    <p className="text-xs text-red-400 text-center">
                                        {error.message || "Failed to connect to the consultant. Check your API key."}
                                    </p>
                                    <button
                                        onClick={() => reload()}
                                        className="flex items-center gap-2 text-[10px] font-bold text-red-400 border border-red-500/30 px-3 py-1.5 rounded-lg hover:bg-red-500/10 transition-colors uppercase tracking-widest"
                                    >
                                        <RotateCcw size={12} /> Retry Connection
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 bg-slate-900/50 border-t border-white/10">
                            <div className="relative">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Ask Civic..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1.5 w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center disabled:opacity-50 disabled:bg-slate-700 transition-all hover:scale-105 active:scale-95"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
