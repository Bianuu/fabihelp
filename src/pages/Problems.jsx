import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories, problems } from "../data/problems";

// Problems page lists exercises grouped by class (grade) and category.  Users
// can switch between classes using tabs, filter by category, search for
// keywords and navigate to individual problem pages.  Difficulties are
// colour‑coded for quick visual cues.  This component replaces the
// original multiple pages per class with a unified experience.
export default function Problems() {
  // Parse query parameters to set the initial grade if provided (e.g. ?grade=10)
  const [searchParams] = useSearchParams();
  const initialGrade = parseInt(searchParams.get("grade"), 10);
  const [activeGrade, setActiveGrade] = useState(
    [9, 10, 11].includes(initialGrade) ? initialGrade : 9
  );
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  // When the active grade changes, reset the category filter and search
  useEffect(() => {
    setActiveCategory("all");
    setSearch("");
  }, [activeGrade]);

  // Filter problems based on grade, category and search query
  const filteredProblems = problems.filter((p) => {
    if (p.grade !== activeGrade) return false;
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    const query = search.trim().toLowerCase();
    if (query) {
      const inTitle = p.title.toLowerCase().includes(query);
      const inCode = p.code.toLowerCase().includes(query);
      if (!inTitle && !inCode) return false;
    }
    return true;
  });

  // Determine badge colour based on difficulty
  const getDifficultyStyles = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-300";
      case "medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-300";
      case "hard":
        return "bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-700/30 dark:text-gray-300";
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <header className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-2"
        >
          Probleme Rezolvate
        </motion.h1>
        <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
          Selectează clasa, filtrul și caută o problemă pentru a vedea descrierea și
          soluția.
        </p>
      </header>

      {/* Grade tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {[9, 10, 11].map((grade) => (
          <button
            key={grade}
            onClick={() => setActiveGrade(grade)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeGrade === grade
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {grade === 9 ? "Clasa a IX‑a" : grade === 10 ? "Clasa a X‑a" : "Clasa a XI‑a"}
          </button>
        ))}
      </div>

      {/* Category filters */}
      <div className="overflow-x-auto py-2 mb-6">
        <div className="flex space-x-4 px-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Toate
          </button>
          {categories[activeGrade]?.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Search field */}
      <div className="max-w-xl mx-auto mb-8 px-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Caută după titlu sau cod..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Problems grid */}
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProblems.length === 0 ? (
          <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
            Nu s-au găsit probleme pentru criteriile alese.
          </p>
        ) : (
          filteredProblems.map((problem, idx) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {problem.code}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyStyles(problem.difficulty)}`}>
                  {problem.difficulty === "easy"
                    ? "Ușor"
                    : problem.difficulty === "medium"
                    ? "Mediu"
                    : "Dificil"}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {problem.description}
              </p>
              <Link
                to={`/problema/${problem.id}`}
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Vezi detalii →
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}