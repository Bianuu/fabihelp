import { motion } from "framer-motion";
import { Brain, Code, Users, Rocket } from "lucide-react";

/**
 * Home page (Acasă) introduces visitors to the purpose of FabiHelp.  It
 * features a hero section with a call to action, followed by a list of
 * benefits the platform offers.  Animations are provided by
 * framer-motion.
 */
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 pt-12 sm:pt-20"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-6">
          Bun venit pe <span className="text-indigo-500 dark:text-indigo-400">FabiHelp</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Platforma educațională dedicată pasionaților de informatică.  Descoperă
          algoritmi, grafuri și programare dinamică explicate clar și interactiv.
        </p>
        <motion.a
          href="https://wa.me/40748585665"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
        >
          Începe aventura ta personalizată
        </motion.a>
      </motion.section>

      {/* Benefits section */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center"
        >
          <Brain className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Gândește logic</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Învață să structurezi gândirea algoritmică pas cu pas, prin exemple
            clare și vizualizări intuitive.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center"
        >
          <Code className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Scrie cod elegant</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Descoperă cum să scrii cod curat, eficient și bine structurat — ca un
            programator profesionist.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center"
        >
          <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Comunitate activă</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Fă parte dintr-o comunitate de elevi și pasionați care învață și
            evoluează împreună.
          </p>
        </motion.div>
      </section>

      {/* Call to action */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl shadow-lg mx-4 sm:mx-8 p-10 text-center"
      >
        <Rocket className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
        <h2 className="text-3xl font-bold mb-3">Pregătit să începi?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Explorează problema potrivită pentru nivelul tău și pune-ți cunoștințele
          la încercare.
        </p>
        <a
          href="/probleme"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
        >
          Descoperă probleme
        </a>
      </motion.section>
    </div>
  );
}