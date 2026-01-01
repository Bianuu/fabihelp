import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Github } from "lucide-react";

/**
 * Contact page provides visitors with multiple ways to get in touch.  It
 * includes direct links to email, Instagram and GitHub, as well as a
 * simple contact form that displays a confirmation message on submission.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    subiect: "",
    mesaj: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration purposes we simply set a success state. In a real
    // application this is where you would send the data to a backend.
    setSubmitted(true);
    setFormData({ nume: "", email: "", subiect: "", mesaj: "" });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 text-center mb-6"
      >
        Contactează Echipa FabiHelp
      </motion.h1>

      {/* Contact details */}
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center shadow">
          <Mail className="w-10 h-10 text-orange-500 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Email</h3>
          <a
            href="mailto:fabian_fcucj1103@yahoo.com?subject=Salut%20FabiHelp!&body=Bună,%20am%20o%20întrebare..."
            className="text-orange-500 hover:underline"
          >
            @yahoo.com
          </a>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center shadow">
          <Instagram className="w-10 h-10 text-pink-500 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Instagram</h3>
          <a
            href="https://www.instagram.com/fabi.cioban/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            @instagram
          </a>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center shadow">
          <Github className="w-10 h-10 text-gray-800 dark:text-gray-200 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">GitHub</h3>
          <a
            href="https://github.com/Bianuu/Bianuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:underline"
          >
            @github
          </a>
        </div>
      </div>

      {/* Form */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-10 shadow">
        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Mulțumim!</h2>
            <p className="text-gray-700 dark:text-gray-300">Mesajul tău a fost trimis cu succes. Vom reveni în curând.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              Trimite alt mesaj
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nume
              </label>
              <input
                id="nume"
                name="nume"
                type="text"
                required
                value={formData.nume}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="subiect" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subiect
              </label>
              <input
                id="subiect"
                name="subiect"
                type="text"
                required
                value={formData.subiect}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mesaj
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                required
                rows="4"
                value={formData.mesaj}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
            >
              Trimite mesaj
            </button>
          </form>
        )}
      </div>
    </div>
  );
}