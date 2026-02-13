import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Stars } from "lucide-react";
import LoveModal from "./LoveModal";

const CTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    return (
        <section className="py-32 px-4 bg-gradient-to-t from-pink-100 to-rose-200 overflow-hidden relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-dancing font-bold text-rose-600 mb-8 drop-shadow-md leading-tight">
                        Jadi, mau nggak jadi Valentine-ku?
                    </h2>

                    <motion.button
                        onClick={handleOpen}
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 overflow-hidden"
                        whileHover={{
                            boxShadow: "0 0 25px 5px rgba(236, 72, 153, 0.6)",
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="relative z-10 flex items-center gap-2 font-sans tracking-wide">
                            MAU BANGET! <Heart className="w-5 h-5 fill-current animate-bounce" />
                        </span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    </motion.button>

                    <p className="mt-6 text-rose-400 font-medium text-sm italic opacity-80">
                        *warning: tombol ini mengandung efek bucin berlebihan
                    </p>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-pink-300 rounded-full blur-xl opacity-40 animate-bounce delay-1000"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-400 rounded-full blur-xl opacity-40 animate-bounce"></div>

            <LoveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default CTA;
