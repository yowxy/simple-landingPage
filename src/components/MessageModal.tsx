import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";

interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MessageModal = ({ isOpen, onClose }: MessageModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full relative overflow-hidden shadow-2xl border-4 border-pink-200"
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 100 }}
                        transition={{ type: "spring", damping: 15 }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-pink-600" />
                        </button>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-200 rounded-full blur-2xl opacity-50"></div>

                        {/* Heart icon */}
                        <motion.div
                            className="flex justify-center mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                                <Heart className="w-10 h-10 text-white fill-white" />
                            </div>
                        </motion.div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-5xl font-dancing text-rose-600 mb-6 text-center drop-shadow-sm">
                            Surat Kecil Untukmu 💌
                        </h2>

                        {/* Message content */}
                        <div className="space-y-4 font-sans text-rose-800 leading-relaxed text-base md:text-lg relative z-10">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Hai kamu...
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                Mungkin kata-kata ini nggak cukup buat gambarin apa yang aku rasain, tapi aku tetep mau coba.
                                Setiap kali aku liat kamu, rasanya dunia jadi lebih cerah.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                Makasih ya udah jadi bagian dari hari-hariku. Kehadiranmu itu kayak pelangi sehabis hujan,
                                bikin semuanya jadi indah. Aku harap kamu tau betapa berartinya kamu buat aku.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="font-dancing text-2xl text-right mt-8 text-rose-500"
                            >
                                - Iklil 
                            </motion.p>
                        </div>

                        {/* Close button at bottom */}
                        <motion.div
                            className="flex justify-center mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold shadow-lg hover:shadow-pink-300/50 hover:scale-105 transition-all"
                            >
                                Tutup Pesan ❤️
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MessageModal;
