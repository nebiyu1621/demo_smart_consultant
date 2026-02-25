export default function Footer() {
    return (
        <footer className="bg-black py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-3xl font-black text-white tracking-tighter mb-6 block">
                            SMART<span className="text-primary italic">.</span>
                        </span>
                        <p className="text-slate-500 max-w-sm mb-8 font-medium">
                            Premium civil engineering consultancy delivering structural integrity and innovative infrastructure across Ethiopia.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6">Contact</h6>
                        <ul className="space-y-4 text-sm text-slate-500 font-bold">
                            <li>Addis Ababa, Ethiopia</li>
                            <li>Bole Sub-city, Woreda 03</li>
                            <li>info@smartconsulting.com</li>
                            <li>+251 11 123 4567</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6">Social</h6>
                        <ul className="space-y-4 text-sm text-slate-500 font-bold">
                            <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-primary">Twitter</a></li>
                            <li><a href="#" className="hover:text-primary">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                        © 2024 SMART Consulting Engineers PLC. All Rights Reserved.
                    </p>
                    <p className="text-[10px] font-bold text-slate-800 uppercase tracking-[0.2em]">
                        Engineering with Precision
                    </p>
                </div>
            </div>
        </footer>
    );
}
