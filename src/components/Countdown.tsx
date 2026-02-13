import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set target date to next Valentine's Day (or today if it's the day)
        const now = new Date();
        let target = new Date(now.getFullYear(), 1, 14); // Month is 0-indexed, so 1 is Feb

        // If today is past Feb 14, set target to next year
        if (now > target && now.getDate() !== 14) {
            target = new Date(now.getFullYear() + 1, 1, 14);
        }
        // If today is exactly Feb 14, maybe show "Happy Valentine!"? 
        // For countdown logic, let's just count to the end of the day or show 0 if it's the day.
        // Let's assume the user wants a countdown to the *start* of the day if before, or just "00:00:00" if today.

        // Wait, the user prompt implies "Countdown ke 14 Februari".
        // If it is 14 Feb, show 0 or "Hari ini".

        const interval = setInterval(() => {
            const currentTime = new Date();
            const difference = target.getTime() - currentTime.getTime();

            if (difference <= 0) {
                // Target reached (it's Feb 14 or past it today)
                // If it's technically Feb 14 today, let's just keep it at 0 or show a message.
                // But for visual countdown, 0s is fine.
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeUnits = [
        { label: "Hari", value: timeLeft.days },
        { label: "Jam", value: timeLeft.hours },
        { label: "Menit", value: timeLeft.minutes },
        { label: "Detik", value: timeLeft.seconds },
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-dancing mb-12 drop-shadow-md">
                    Menunggu Hari Spesial ⏳
                </h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 w-24 md:w-32 flex flex-col items-center shadow-lg border border-white/30"
                            whileHover={{ scale: 1.1 }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut"
                            }}
                        >
                            <span className="text-3xl md:text-5xl font-bold font-mono">
                                {String(unit.value).padStart(2, '0')}
                            </span>
                            <span className="text-sm md:text-base font-medium mt-2 text-pink-100 uppercase tracking-wider">
                                {unit.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Countdown;
