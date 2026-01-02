import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {problems} from "../data/problems";
import {CheckCircle, ClipboardCopy, FileText} from "lucide-react";

/**
 * Problem page displays the full description and optional solution of a single
 * problem.  Users can copy the solution to the clipboard.  If the
 * problem does not exist or lacks a solution, appropriate feedback is
 * provided.
 */
export default function Problem() {
    const {id} = useParams();
    const [problem, setProblem] = useState(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const found = problems.find((p) => p.id === id);
        setProblem(found || null);
        setCopied(false);
    }, [id]);

    const handleCopy = () => {
        if (problem && problem.solution) {
            navigator.clipboard
                .writeText(problem.solution)
                .then(() => setCopied(true))
                .catch(() => {
                });
        }
    };

    if (!problem) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                    Problema nu a fost găsită
                </h2>
                <Link to="/probleme" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    Înapoi la listă
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4">
            <motion.h1
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4"
            >
                {problem.code}: {problem.title}
            </motion.h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">
                {problem.description}
            </p>
            {/* Solution Section */}
            {problem.solution ? (
                <div
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6 relative">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                            <FileText size={20}/>
                            <span>Soluție</span>
                        </h2>
                        <button
                            onClick={handleCopy}
                            className="inline-flex items-center space-x-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            {copied ? (
                                <>
                                    <CheckCircle size={16}/> <span>Copiat</span>
                                </>
                            ) : (
                                <>
                                    <ClipboardCopy size={16}/> <span>Copiază</span>
                                </>
                            )}
                        </button>
                    </div>
                    <pre
                        className="overflow-x-auto text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            {problem.solution}
          </pre>
                </div>
            ) : (
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Momentan nu există o soluție disponibilă pentru această problemă. Încearcă să o
                    rezolvi singur!
                </p>
            )}
            <Link
                to="/probleme"
                className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
            >
                ← Înapoi la probleme
            </Link>
        </div>
    );
}