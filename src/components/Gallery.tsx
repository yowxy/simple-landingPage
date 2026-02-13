import { motion } from "framer-motion";

const Gallery = () => {
    const images = [
        "/images/WhatsApp Image 2026-02-14 at 01.12.25 (2).jpeg",
        "/images/WhatsApp Image 2026-02-14 at 01.13.14.jpeg",
        "/images/WhatsApp Image 2026-02-14 at 01.13.15.jpeg",
        "/images/WhatsApp Image 2026-02-14 at 01.13.16 (1).jpeg",
        "/images/WhatsApp Image 2026-02-14 at 01.13.16.jpeg",
        "/images/WhatsApp Image 2026-02-14 at 01.13.22.jpeg",
    ];

    return (
        <section className="py-24 px-4 bg-pink-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-dancing text-center text-rose-600 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    My gwenn
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative aspect-[3/4] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                <span className="text-white font-medium text-lg font-dancing">My gwenn  {index + 1}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
