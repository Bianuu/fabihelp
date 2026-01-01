import { Link } from "react-router-dom";

/**
 * NotFound component renders a friendly 404 page when the user navigates
 * to a route that does not exist.  It offers a link back to the home
 * page for easy recovery.
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">404</h1>
      <p className="text-lg text-gray-700 dark:text-gray-400 mb-6">
        Oops! Pagina pe care o cauți nu a fost găsită.
      </p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
      >
        Înapoi la Acasă
      </Link>
    </div>
  );
}