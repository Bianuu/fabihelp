import {motion} from "framer-motion";
import {Brain, Code, Star, Users} from "lucide-react";

export default function Acasa() {
    return (
        <div
            className="w-screen min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 flex flex-col items-center overflow-x-hidden">
            {/* Hero Section */}
            <motion.section
                initial={{opacity: 0, y: -40}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="pt-28 text-center px-6"
            >
                <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-700 mb-6">
                    Bine ai venit pe <span className="text-indigo-500">FabiHelp</span> 🚀
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                    Platformă educațională dedicată pasionaților de informatică — explorează
                    algoritmi, grafuri și programare dinamică explicate clar și interactiv.
                </p>

                <motion.a
                    /// href="/probleme"
                    whileHover={{scale: 1.08}}
                    className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
                >
                    Începe aventura personalizată 👨‍💻
                </motion.a>
            </motion.section>

            {/* Secțiune cu avantaje */}
            <section
                className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6 md:px-12 lg:px-24 xl:px-40">
                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Brain className="text-indigo-600 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">Gândește logic</h3>
                    <p className="text-gray-600">
                        FabiHelp te ajută să structurezi gândirea algoritmică pas cu pas,
                        prin exemple clare și vizualizări interactive.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Code className="text-indigo-600 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">
                        Scrie cod elegant
                    </h3>
                    <p className="text-gray-600">
                        Învață să scrii cod curat, eficient și bine structurat — ca un adevărat
                        programator profesionist.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Users className="text-indigo-600 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">
                        Comunitate activă
                    </h3>
                    <p className="text-gray-600">
                        Fii parte dintr-o comunitate de studenți și pasionați care învață și
                        cresc împreună.
                    </p>
                </motion.div>
            </section>

            {/* Secțiune testimoniale */}
            <motion.section
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
                className="mt-24 bg-indigo-600 text-white rounded-2xl shadow-2xl px-6 sm:px-10 py-12 sm:py-16 text-center w-full max-w-4xl mx-auto mb-20"
            >
                <Star className="w-10 h-10 mx-auto mb-4 text-yellow-300"/>
                <h2 className="text-3xl font-bold mb-6">Ce spun utilizatorii 💬</h2>

                <ul className="space-y-4 text-indigo-50 text-lg leading-relaxed">
                    <li>“FabiHelp m-a ajutat să înțeleg algoritmii mult mai clar!”</li>
                    <li>“Foarte bine structurat.”</li>
                    <li>“Design curat și explicații excelente.”</li>
                </ul>
            </motion.section>
        </div>
    );
}
