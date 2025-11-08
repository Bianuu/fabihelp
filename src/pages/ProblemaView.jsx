import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {BookOpen} from "lucide-react";

export default function ProblemaView() {
    const {id} = useParams();
    const [continut, setContinut] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProblema = async () => {
            try {
                const res = await fetch(`/rezolvari/${id}.txt`);
                if (!res.ok) throw new Error("Fișierul nu a fost găsit");
                const text = await res.text();
                setContinut(text);
            } catch (err) {
                setContinut("Eroare: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProblema();
    }, [id]);

    if (loading)
        return (
            <div
                className="pt-28 min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-indigo-100 text-gray-600 text-lg">
                Se încarcă problema...
            </div>
        );

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
                Problema <span className="text-indigo-500">#{id}</span> 💡
            </motion.h1>

            {/* Conținutul problemei */}
            <motion.div
                initial={{opacity: 0, y: 40}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.2}}
                className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-gray-800 leading-relaxed whitespace-pre-wrap w-full px-6 md:px-12 lg:px-24 xl:px-40"
            >
                {continut}
            </motion.div>

            {/* Secțiune finală */}
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4}}
                className="mt-16 bg-indigo-600 text-white rounded-2xl shadow-2xl px-6 sm:px-10 py-10 sm:py-12 text-center w-full max-w-3xl mx-auto mb-16"
            >
                <BookOpen className="w-10 h-10 mx-auto mb-4 text-yellow-300"/>
                <h2 className="text-3xl font-bold mb-4">Analizează și înțelege 🧠</h2>
                <p className="text-lg text-indigo-50 leading-relaxed px-2 sm:px-4">
                    Fiecare problemă e o oportunitate de a-ți îmbunătăți gândirea algoritmică.
                    Citește soluția, dar mai important — înțelege de ce funcționează.
                </p>
            </motion.div>

            {/* Buton de întoarcere */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5}}
                className="mb-20"
            >
                <a
                    href="/probleme"
                    className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition"
                >
                    ← Înapoi la probleme
                </a>
            </motion.div>
        </div>
    );
}
