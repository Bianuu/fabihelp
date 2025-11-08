import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

export default function Probleme() {
    const navigate = useNavigate();
    const categorii = {
        "Elemente de bază ale limbajului": ['#4861'],
        "Algoritmi elementari": [],
    };

    // Icone asociate categoriilor
    const icons = {};

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
                Probleme <span className="text-indigo-500">practice clasa a IX-a</span> 💡
            </motion.h1>

            {/* Subtitlu */}
            <p className="text-gray-600 text-lg max-w-2xl text-center mb-12 px-6">
                Alege o categorie și explorează seturi de probleme menite să-ți dezvolte gândirea algoritmică.
                Analizând fiecare exercițiu, vei putea înțelege logica din spatele soluțiilor și îți vei îmbunătăți
                abilitățile pas cu pas.
                Mulțumiri platformei{" "}
                <a
                    href="https://www.pbinfo.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-semibold hover:underline"
                >
                    pbinfo.ro
                </a>{" "}
                pentru colecția valoroasă de probleme! 💻
            </p>

            {/* Lista de categorii */}
            <div className="w-full max-w-6xl px-6 md:px-12 lg:px-24 space-y-16 pb-24">
                {Object.entries(categorii).map(([categorie, probleme], i) => (
                    <motion.div
                        key={categorie}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: i * 0.2}}
                        className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all"
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-6">
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                {icons[categorie]}
                                <h3 className="text-2xl font-bold text-indigo-700">
                                    {categorie}
                                </h3>
                            </div>
                            <span className="text-gray-500 font-medium">
                                {probleme.length} probleme
                            </span>
                        </div>

                        {/* Grid probleme */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                            {probleme.map((nr) => (
                                <motion.div
                                    key={nr}
                                    whileHover={{scale: 1.08}}
                                    className="bg-indigo-50 hover:bg-indigo-100 rounded-xl p-5 text-center font-medium text-indigo-700 shadow-sm hover:shadow-md transition cursor-pointer"
                                    onClick={() => navigate(`/problema/${nr.replace('#', '')}`)}

                                >
                                    {nr}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Secțiune finală */}
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                className="mt-10 bg-indigo-600 text-white rounded-2xl shadow-2xl px-6 sm:px-10 py-10 sm:py-12 text-center w-full max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">💪 Exersează zilnic</h2>
                <p className="text-lg text-indigo-50 leading-relaxed px-2 sm:px-4">
                    Practica te transformă dintr-un simplu începător într-un gânditor algoritmic.
                    Rezolvă câteva probleme în fiecare zi — consistența bate talentul!
                </p>
            </motion.div>

        </div>
    );
}
