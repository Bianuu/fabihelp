import {motion} from "framer-motion";
import {
    Award,
    BookOpen,
    CheckCircle2,
    Code as Code2,
    GraduationCap,
    Lightbulb,
    Target,
    Users as UsersIcon,
} from "lucide-react";

/**
 * About page explains the mission, objectives, benefits and intended
 * audience of the FabiHelp platform.  Inspired by the redesigned
 * version in the "fabiihelp - Copy" project, this version uses plain
 * JavaScript and Tailwind CSS with framer-motion for subtle animations.
 */
export default function About() {
    const benefits = [
        {
            icon: BookOpen,
            title: "Conținut Structurat",
            description:
                "Probleme organizate pe clase și categorii tematice pentru o învățare progresivă și logică.",
        },
        {
            icon: Code2,
            title: "Soluții Detaliate",
            description:
                "Fiecare problemă vine cu explicații clare, cod sursă comentat și analiză a complexității.",
        },
        {
            icon: Target,
            title: "Pregătire pentru Examene",
            description:
                "Probleme din bacalaureat și concursuri pentru o pregătire completă.",
        },
        {
            icon: Lightbulb,
            title: "Gândire Algoritmică",
            description:
                "Dezvoltarea abilităților de rezolvare a problemelor și a gândirii computaționale.",
        },
    ];

    const objectives = [
        "Să ofere o resursă educațională gratuită și de calitate",
        "Să faciliteze învățarea algoritmilor prin practică",
        "Să pregătească elevii pentru bacalaureat și olimpiade",
        "Să dezvolte gândirea logică și capacitatea de analiză",
        "Să prezinte concepte complexe într-un mod accesibil",
        "Să încurajeze exersarea constantă și autodisciplina",
    ];

    const targetAudience = [
        {
            icon: GraduationCap,
            title: "Elevi de Liceu",
            description: "Clasele IX-XI care studiază informatică în curriculum școlar.",
        },
        {
            icon: Award,
            title: "Participanți la Olimpiade",
            description: "Elevi care se pregătesc pentru concursuri de informatică.",
        },
        {
            icon: UsersIcon,
            title: "Pasionați de Programare",
            description: "Oricine dorește să învețe algoritmi și structuri de date.",
        },
    ];

    return (
        <div className="w-full space-y-20">
            {/* Hero Section */}
            <section className="text-center pt-12 sm:pt-20 px-4">
                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-4xl sm:text-5xl font-bold mb-4 text-indigo-700 dark:text-indigo-300"
                >
                    Despre <span className="text-indigo-500 dark:text-indigo-400">FabiHelp</span>
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.1}}
                    className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                >
                    O platformă educațională creată pentru a sprijini elevii în călătoria lor
                    spre excelență în informatică.
                </motion.p>
            </section>

            {/* Mission and Objectives Section */}
            <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 px-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
                        Misiunea Noastră
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        FabiHelp a fost creat din dorința de a oferi elevilor un instrument
                        educațional modern și accesibil pentru studiul informaticii. Platforma
                        răspunde nevoii de materiale structurate și de calitate care să
                        completeze predarea din școli.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Credem că informatica trebuie să fie accesibilă tuturor, iar
                        înțelegerea algoritmilor este fundamentală pentru dezvoltarea gândirii
                        analitice și a capacității de rezolvare a problemelor.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Prin această platformă, ne propunem să transformăm învățarea
                        informaticii într-o experiență interactivă, structurată și plăcută.
                    </p>
                </div>
                <div className="relative">
                    <div
                        className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
                            Obiectivele Platformei
                        </h3>
                        <ul className="space-y-3">
                            {objectives.map((objective, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 mt-1"/>
                                    <span className="text-gray-700 dark:text-gray-300">
                    {objective}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">
                        Beneficiile Platformei
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
                        Ce face FabiHelp diferită și cum te poate ajuta în pregătire
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1}}
                                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-700/20 flex items-center justify-center mx-auto mb-4">
                                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">
                        Pentru Cine Este?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
                        Platforma se adresează tuturor celor care doresc să învețe informatică
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {targetAudience.map((audience, index) => {
                        const Icon = audience.icon;
                        return (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center"
                            >
                                <div
                                    className="w-16 h-16 mx-auto rounded-2xl bg-indigo-100 dark:bg-indigo-700/20 flex items-center justify-center mb-4">
                                    <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400"/>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                                    {audience.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {audience.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}