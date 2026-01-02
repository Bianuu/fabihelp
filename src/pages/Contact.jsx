import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";

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

    const sendingRef = useRef(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (sendingRef.current) return;

        sendingRef.current = true;
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-extrabold text-indigo-700 text-center mb-6"
            >
                Contactează Echipa FabiHelp
            </motion.h1>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-white border text-center shadow">
                    <Mail className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:fabian_fcucj1103@yahoo.com" className="text-orange-500">
                        @yahoo.com
                    </a>
                </div>

                <div className="p-6 rounded-xl bg-white border text-center shadow">
                    <Instagram className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <a
                        href="https://www.instagram.com/fabi.cioban/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500"
                    >
                        @instagram
                    </a>
                </div>

                <div className="p-6 rounded-xl bg-white border text-center shadow">
                    <Github className="w-10 h-10 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <a
                        href="https://github.com/Bianuu/Bianuu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @github
                    </a>
                </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 border rounded-xl p-6 mb-10 shadow">
                {submitted ? (
                    <div className="text-center py-10">
                        <h2 className="text-2xl font-bold text-green-600 mb-2">
                            Mulțumim!
                        </h2>
                        <p>Mesajul tău a fost trimis cu succes.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full"
                        >
                            Trimite alt mesaj
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Nume */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Nume
                            </label>
                            <input
                                name="nume"
                                required
                                value={formData.nume}
                                onChange={handleChange}
                                placeholder="Introdu numele tău"
                                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="exemplu@email.com"
                                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        {/* Telefon */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Număr de telefon
                            </label>
                            <input
                                name="telefon"
                                type="tel"
                                pattern="[0-9]{10}"
                                required
                                value={formData.telefon}
                                onChange={handleChange}
                                placeholder="07xxxxxxxx"
                                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        {/* Subiect */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Subiect
                            </label>
                            <input
                                name="subiect"
                                required
                                value={formData.subiect}
                                onChange={handleChange}
                                placeholder="Subiectul mesajului"
                                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        {/* Mesaj */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">
                                Mesaj
                            </label>
                            <textarea
                                name="mesaj"
                                rows="4"
                                required
                                value={formData.mesaj}
                                onChange={handleChange}
                                placeholder="Scrie mesajul tău..."
                                className="w-full px-4 py-2 rounded-lg border resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full text-white font-semibold px-6 py-3 rounded-full ${
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
