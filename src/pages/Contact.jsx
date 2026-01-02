import {useRef, useState} from "react";
import {motion} from "framer-motion";
import {Github, Instagram, Mail} from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        nume: "",
        email: "",
        telefon: "",
        subiect: "",
        mesaj: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // 🔐 BLOCARE REALĂ ANTI-DUBLU SUBMIT
    const sendingRef = useRef(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (sendingRef.current) return;

        sendingRef.current = true;
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Eroare trimitere");

            setSubmitted(true);
            setFormData({
                nume: "",
                email: "",
                telefon: "",
                subiect: "",
                mesaj: "",
            });
        } catch (err) {
            alert("Eroare la trimiterea mesajului. Încearcă din nou.");
            console.error(err);
        } finally {
            setLoading(false);
            sendingRef.current = false;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            {/* Heading */}
            <motion.h1
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 text-center mb-6"
            >
                Contactează Echipa FabiHelp
            </motion.h1>

            {/* Contact details */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div
                    className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center shadow">
                    <Mail className="w-10 h-10 text-orange-500 mx-auto mb-3"/>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Email
                    </h3>
                    <a
                        href="mailto:fabian_fcucj1103@yahoo.com"
                        className="text-orange-500 hover:underline"
                    >
                        @yahoo.com
                    </a>
                </div>

                <div
                    className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center shadow">
                    <Instagram className="w-10 h-10 text-pink-500 mx-auto mb-3"/>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Instagram
                    </h3>
                    <a
                        href="https://www.instagram.com/fabi.cioban/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:underline"
                    >
                        @instagram
                    </a>
                </div>

                <div
                    className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center shadow">
                    <Github className="w-10 h-10 text-gray-800 dark:text-gray-200 mx-auto mb-3"/>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        GitHub
                    </h3>
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
            <div
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-10 shadow">
                {submitted ? (
                    <div className="text-center py-10">
                        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                            Mulțumim!
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Mesajul tău a fost trimis cu succes. Vom reveni în curând.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-6 inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700"
                        >
                            Trimite alt mesaj
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="nume"
                            placeholder="Nume"
                            required
                            value={formData.nume}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border"
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border"
                        />

                        <input
                            name="telefon"
                            type="tel"
                            placeholder="07xxxxxxxx"
                            pattern="[0-9]{10}"
                            required
                            value={formData.telefon}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border"
                        />

                        <input
                            name="subiect"
                            placeholder="Subiect"
                            required
                            value={formData.subiect}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border"
                        />

                        <textarea
                            name="mesaj"
                            rows="4"
                            placeholder="Mesaj"
                            required
                            value={formData.mesaj}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full text-white font-semibold px-6 py-3 rounded-full transition ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-indigo-600 hover:bg-indigo-700"
                            }`}
                        >
                            {loading ? "Se trimite..." : "Trimite mesaj"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
