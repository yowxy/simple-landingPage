import { motion, useScroll, useSpring } from "framer-motion";
import HeartsBackground from "./components/HeartsBackground";
import Hero from "./components/Hero";
import LoveMessage from "./components/LoveMessage";
import Gallery from "./components/Gallery";
import Reasons from "./components/Reasons";
import CTA from "./components/CTA";

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="relative min-h-screen font-sans selection:bg-pink-300 selection:text-pink-900">
            <HeartsBackground />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            <main className="relative z-10 w-full overflow-hidden">
                <Hero />
                <LoveMessage />
                <Gallery />
                <Reasons />
                <CTA />
            </main>

            <footer className="bg-white/80 backdrop-blur-md py-6 text-center shadow-inner relative z-20">
                <p className="text-rose-400 font-medium text-sm flex items-center justify-center gap-2">
                    Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>❤️</motion.span> for You
                </p>
                <p className="text-xs text-rose-300 mt-1">
                    &copy; {new Date().getFullYear()} Special Valentine
                </p>
            </footer>
        </div>
    );
}

export default App;
