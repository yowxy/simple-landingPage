import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MessageModal from "./MessageModal";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-pink-50 to-rose-100">
            <motion.div
                className="text-center z-10 px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-6xl md:text-8xl font-dancing text-rose-600 drop-shadow-sm mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    Untuk Kamu <span className="text-pink-500">❤️</span>
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-rose-400 font-sans font-medium mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Ada pesan spesial buat orang yang paling spesial...
                </motion.p>
                <motion.button
                    onClick={handleOpenModal}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/40 backdrop-blur-sm border border-white/60 rounded-full text-rose-600 font-semibold shadow-lg hover:bg-white/60 transition-all active:scale-95 mx-auto text-lg cursor-pointer"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="text-gradient">Buka Pesan</span>
                    <ChevronDown size={20} className="text-rose-600" />
                </motion.button>
            </motion.div>

            {/* Ambient background decoration */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

            {/* Message Modal */}
            <MessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Hero;
