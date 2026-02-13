import { motion } from "framer-motion";
import { Heart, Smile, Sparkles, MessageCircleHeart, Music, Star, Gift, Crown } from "lucide-react";

const reasons = [
    { icon: <Smile className="w-8 h-8 text-pink-500" />, title: "Senyummu", desc: "Bikin hari-hariku jadi cerah seketika." },
    { icon: <Heart className="w-8 h-8 text-rose-500" />, title: "Hatimu", desc: "Tulus dan baik banget ke semua orang." },
    { icon: <Sparkles className="w-8 h-8 text-yellow-400" />, title: "Vibes Kamu", desc: "Asik diajak ngobrol dan bercanda." },
    { icon: <MessageCircleHeart className="w-8 h-8 text-blue-400" />, title: "Supportmu", desc: "Selalu ada pas aku butuh semangat." },
    { icon: <Music className="w-8 h-8 text-purple-500" />, title: "Selera Musik", desc: "Playlist kita kayaknya sama deh." },
    { icon: <Star className="w-8 h-8 text-orange-400" />, title: "Matamu", desc: "Ada bintangnya kalau lagi ketawa." },
    { icon: <Gift className="w-8 h-8 text-green-500" />, title: "Kejutanmu", desc: "Suka bikin hal kecil jadi spesial." },
    { icon: <Crown className="w-8 h-8 text-amber-500" />, title: "Kamu Unik", desc: "Nggak ada duanya di dunia ini." },
];

const Reasons = () => {
    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-dancing text-center text-rose-600 mb-16 drop-shadow-sm">
                    Kenapa Aku Suka Kamu? <span className="text-2xl block mt-2 font-sans text-pink-400 font-normal">(Cuma sebagian kecil lho)</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 border border-pink-100 bg-pink-50/50"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                        >
                            <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-rose-700 mb-2 font-dancing">{reason.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-sans">{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reasons;
