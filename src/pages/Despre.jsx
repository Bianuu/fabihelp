import {Brain, Code, Heart, Sparkles} from "lucide-react";
import {motion} from "framer-motion";

export default function Despre() {
    return (
        <div
            className="w-screen min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 flex flex-col items-center overflow-x-hidden">
            {/* Titlu principal */}
            <motion.h1
                initial={{opacity: 0, y: -40}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="pt-28 text-5xl font-extrabold text-indigo-700 mb-6 text-center px-4"
            >
                Despre <span className="text-indigo-500">mine</span> 💻
            </motion.h1>

            {/* Subtitlu */}
            <p className="text-gray-600 text-lg max-w-3xl text-center mb-12 px-6">
                Sunt <b>Fabi</b> — pasionat de informatică, algoritmi și gândire logică.
                Am creat <span className="font-semibold text-indigo-600">FabiHelp</span>{" "}
                pentru a face învățarea mai clară, mai interactivă și mai plăcută pentru toți studenții.
            </p>

            {/* Carduri info */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6 md:px-12 lg:px-24 xl:px-40">
                {/* Card 1 */}
                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Brain className="text-indigo-600 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">Gândire algoritmică</h3>
                    <p className="text-gray-600">
                        Îmi place să analizez probleme complexe și să le simplific pas cu pas.
                        Cred că orice algoritm bun pornește dintr-o idee clară.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Code className="text-indigo-600 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">Dezvoltare software</h3>
                    <p className="text-gray-600">
                        Scriu cod curat și structurat, orientat spre soluții eficiente.
                        Mă inspiră proiectele care combină logică și creativitate.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Heart className="text-indigo-600 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">Învățare prin pasiune</h3>
                    <p className="text-gray-600">
                        Cred că informatica e o artă. Prin FabiHelp, vreau să arăt că oricine poate învăța
                        algoritmică dacă are curiozitate și pasiune.
                    </p>
                </motion.div>
            </div>

            {/* Secțiune finală */}
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                className="mt-20 bg-indigo-600 text-white rounded-2xl shadow-2xl px-6 sm:px-10 py-10 sm:py-12 text-center w-full max-w-3xl mx-auto mb-16"
            >
                <Sparkles className="w-10 h-10 mx-auto mb-4 text-yellow-300"/>
                <h2 className="text-3xl font-bold mb-4">Misiunea mea 🎯</h2>
                <p className="text-lg text-indigo-50 leading-relaxed px-2 sm:px-4">
                    Să ofer resurse clare și exemple practice pentru studenți și pasionați
                    de informatică. Cred într-o educație deschisă, simplă și interactivă.
                </p>
            </motion.div>
        </div>
    );
}
