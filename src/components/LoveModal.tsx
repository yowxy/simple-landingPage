import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { X, HeartHandshake } from "lucide-react";

interface LoveModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoveModal = ({ isOpen, onClose }: LoveModalProps) => {
    useEffect(() => {
        if (isOpen) {
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min: number, max: number) => {
                return Math.random() * (max - min) + min;
            }

            const interval: any = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti({
                    ...defaults, particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
                });
                confetti({
                    ...defaults, particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
                });
            }, 250);

            return () => clearInterval(interval);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        className="bg-white rounded-3xl p-8 max-w-md w-full relative overflow-hidden text-center shadow-2xl border-4 border-pink-200"
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 100 }}
                        transition={{ type: "spring", damping: 15 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors"
                        >
                            <X className="w-5 h-5 text-pink-600" />
                        </button>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <HeartHandshake className="w-16 h-16 text-rose-500" />
                        </motion.div>

                        <h2 className="text-3xl font-dancing text-rose-600 mb-4">Yeay! I Love You! 💖</h2>
                        <p className="text-gray-600 mb-8 font-sans">
                            Makasih ya udah mau jadi Valentine-ku. Aku janji bakal bikin hari-harimu bahagia terus!
                        </p>

                        <motion.div
                            className="flex justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold shadow-lg hover:shadow-pink-300/50 hover:scale-105 transition-all"
                            >
                                Kirimin Emote ❤️
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LoveModal;
