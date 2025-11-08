import {useState} from "react";
import {Github, Instagram, Mail} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

export default function Contact() {
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

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
                Contactează <span className="text-indigo-500">echipa</span> FabiHelp 🚀
            </motion.h1>

            {/* 🔵 Cerc cu imagine statică */}
            <motion.div
                initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 0.6}}
                className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl mb-10"
            >
                <img
                    src="/fabihelp_logo.png" // <-- imaginea ta din backend / public
                    alt="FabiHelp Logo"
                    className="object-cover w-full h-full"
                />
            </motion.div>

            {/* Subtitlu */}
            <p className="text-gray-600 text-lg max-w-2xl text-center mb-12 px-6">
                Ai întrebări, sugestii sau vrei să contribui la proiect? Ne poți găsi aici 👇
            </p>

            {/* Carduri info */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6 md:px-12 lg:px-24 xl:px-40">
                {/* Email */}
                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Mail className="text-orange-500 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">Email</h3>
                    <a
                        href="mailto:fabian_fcucj1103@yahoo.com?subject=Salut FabiHelp!&body=Bună, am o întrebare despre proiect..."
                        className="text-orange-500 hover:underline break-all"
                    >
                        @yahoo.com
                    </a>
                </motion.div>

                {/* Instagram */}
                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Instagram className="text-orange-500 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">Instagram</h3>
                    <a
                        href="https://www.instagram.com/fabi.cioban/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline"
                    >
                        @instagram
                    </a>
                </motion.div>

                {/* GitHub */}
                <motion.div
                    whileHover={{scale: 1.05}}
                    className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center hover:shadow-2xl transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Github className="text-orange-500 w-12 h-12"/>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-700 mb-3">GitHub</h3>
                    <a
                        href="https://github.com/Bianuu/Bianuu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline break-all"
                    >
                        @github.com
                    </a>
                </motion.div>
            </div>

            {/* Restul codului tău (Termeni și Confidențialitate) rămâne neschimbat */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 w-full max-w-4xl px-6 md:px-12 lg:px-20">
                {/* ... */}
            </div>

            <AnimatePresence>
                {/* ... Drawer-uri */}
            </AnimatePresence>
        </div>
    );
}
