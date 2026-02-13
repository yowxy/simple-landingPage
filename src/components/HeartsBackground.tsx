import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeartsBackground = () => {
    const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        const newHearts = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 5,
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-pink-300/40 text-4xl"
                    initial={{ y: "110vh", x: `${heart.left}vw`, opacity: 0 }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 1, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        left: `${heart.left}vw`,
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};

export default HeartsBackground;
