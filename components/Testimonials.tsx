export default function Testimonials() {
    const reviews = [
        {
            name: "Dr. Elias Tilahun",
            role: "Urban Infrastructure Director",
            text: "SMART's technical precision in the Addis roadway expansion exceeded our expectations. Truly world-class engineering."
        },
        {
            name: "Hanna Gebre",
            role: "Real Estate Developer",
            text: "Their BIM implementation saved us significant costs during the structural phase of our mixed-use tower. Professional and reliable."
        }
    ];

    return (
        <section className="py-24 bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {reviews.map((rev, idx) => (
                        <div key={idx} className="relative p-12 glass-panel rounded-3xl" data-aos="zoom-in">
                            <div className="absolute -top-6 -left-6 text-7xl font-serif text-primary opacity-30">"</div>
                            <p className="text-2xl text-white italic mb-8 relative z-10 font-medium">
                                {rev.text}
                            </p>
                            <div>
                                <h5 className="text-lg font-bold text-white uppercase tracking-widest">{rev.name}</h5>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">{rev.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
