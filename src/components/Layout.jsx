import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Layout component wraps every page with the common structure of the site:
 * a navigation bar at the top and a footer at the bottom.  The `children`
 * prop renders the page content in between.  Theme toggling is handled
 * inside the Navbar component, which applies the appropriate classes to
 * the root html element.  See `Navbar.jsx` for details.
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full px-4 sm:px-8 pt-20 pb-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}