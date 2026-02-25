"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/#about" },
        { name: "Consultation", href: "/consultation" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background-dark/80 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-black text-white tracking-tighter">
                            SMART<span className="text-primary italic">.</span>
                        </span>
                        <div className="hidden sm:block h-8 w-[1px] bg-white/20 mx-2"></div>
                        <span className="hidden sm:block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                            Consulting<br />Engineers
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-slate-300 hover:text-primary transition-colors uppercase tracking-widest pt-1"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="/consultation"
                            className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                        >
                            Book Project
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-white/10 p-4 space-y-4 animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-lg font-bold text-slate-200 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/consultation"
                        className="block bg-primary text-white text-center py-4 rounded-xl font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Start Consultation
                    </Link>
                </div>
            )}
        </nav>
    );
}
