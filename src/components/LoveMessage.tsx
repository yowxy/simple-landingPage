import { motion } from "framer-motion";

const LoveMessage = () => {
    return (
        <section id="love-message" className="min-h-screen py-24 px-4 bg-gradient-to-b from-rose-100 to-pink-50 flex items-center justify-center">
            <motion.div
                className="glass-card max-w-2xl w-full p-8 md:p-12 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -m-8 w-32 h-32 bg-rose-200 rounded-full blur-2xl opacity-50"></div>

                <h2 className="text-3xl md:text-4xl font-dancing text-rose-600 mb-6 text-center drop-shadow-sm">
                    Surat Kecil Untukmu 💌
                </h2>

                <div className="space-y-4 font-sans text-rose-800 leading-relaxed text-lg text-justify md:text-left">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hai kamu...
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Mungkin kata-kata ini nggak cukup buat gambarin apa yang aku rasain, tapi aku tetep mau coba.
                        Setiap kali aku liat kamu, rasanya dunia jadi lebih cerah.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Makasih ya udah jadi bagian dari hari-hariku. Kehadiranmu itu kayak pelangi sehabis hujan,
                        bikin semuanya jadi indah. Aku harap kamu tau betapa berartinya kamu buat aku.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="font-dancing text-2xl text-right mt-8 text-rose-500"
                    >
                        - Iklil 
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default LoveMessage;
