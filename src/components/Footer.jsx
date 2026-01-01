import { Link } from "react-router-dom";
import { Github, Mail } from "lucide-react";

/**
 * Footer component displays quick links to the main sections of the site,
 * grouped by category.  It also provides shortcuts to the three class
 * levels used in the Problems section.  At the bottom of the footer we
 * show a small tagline and the current year.  Contact icons link to
 * external profiles.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 sm:px-8 py-10 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Navigație */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Navigație</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Acasă</Link>
            </li>
            <li>
              <Link to="/despre" className="hover:text-indigo-600 dark:hover:text-indigo-400">Despre</Link>
            </li>
            <li>
              <Link to="/probleme" className="hover:text-indigo-600 dark:hover:text-indigo-400">Probleme</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Clase */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Clase</h3>
          <ul className="space-y-2">
            <li>
              {/* Using query parameters to indicate the active grade when navigating to Problems page */}
              <Link to="/probleme?grade=9" className="hover:text-indigo-600 dark:hover:text-indigo-400">Clasa a IX‑a</Link>
            </li>
            <li>
              <Link to="/probleme?grade=10" className="hover:text-indigo-600 dark:hover:text-indigo-400">Clasa a X‑a</Link>
            </li>
            <li>
              <Link to="/probleme?grade=11" className="hover:text-indigo-600 dark:hover:text-indigo-400">Clasa a XI‑a</Link>
            </li>
          </ul>
        </div>

        {/* Contact icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Conectează-te</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <a
                href="mailto:fabian_fcucj1103@yahoo.com?subject=Salut%20FabiHelp!&body=Bună,%20am%20o%20întrebare%20despre%20proiect..."
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Email
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Github size={18} />
              <a
                href="https://github.com/Bianuu/Bianuu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom line */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {year} <span className="font-semibold text-gray-700 dark:text-gray-200">FabiHelp</span>. Toate drepturile rezervate.
        </p>
        <p className="mt-2">
          Creat cu pasiune pentru educație și algoritmică. ✨
        </p>
      </div>
    </footer>
  );
}