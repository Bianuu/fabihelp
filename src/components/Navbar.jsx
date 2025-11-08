import {Link, useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

export default function Navbar() {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef(null); // 🔹 Referință pentru detectare click extern

    const navLinks = [
        {name: "Acasă", path: "/"},
        {name: "Despre", path: "/despre"},
        {name: "Probleme_Rezolvări", path: "/probleme"},
        {name: "Contact", path: "/contact"},
    ];

    const categoriiProbleme = [
        {name: "Clasa a IX-a", path: "/probleme/a9a"},
        {name: "Clasa a X-a", path: "/probleme/a10a"},
        {name: "Clasa a XI-a", path: "/probleme/a11a"},
    ];

    // 🔹 Efect pentru a închide dropdown-ul dacă dai click în afara lui
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
                {/* 🔹 Logo */}
                <Link
                    to="/"
                    className="text-3xl font-extrabold text-indigo-700 hover:text-indigo-500 tracking-tight transition-colors"
                >
                    FabiHelp 🚀
                </Link>

                {/* 🔹 Meniu */}
                <ul className="flex items-center gap-10 relative">
                    {navLinks.map((link) => {
                        const active = location.pathname === link.path;

                        // 🔽 Dropdown pentru "Probleme_Rezolvări"
                        if (link.name === "Probleme_Rezolvări") {
                            return (
                                <li key={link.path} className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setOpenDropdown(!openDropdown)}
                                        className={`relative text-lg font-semibold transition-colors duration-300 ${
                                            active ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                                        }`}
                                    >
                                        {link.name} ▾
                                    </button>

                                    {openDropdown && (
                                        <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden">
                                            {categoriiProbleme.map((cat) => (
                                                <li key={cat.path}>
                                                    <Link
                                                        to={cat.path}
                                                        className="block px-5 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                                                        onClick={() => setOpenDropdown(false)}
                                                    >
                                                        {cat.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        }

                        // 🔸 Linkuri normale
                        return (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative text-lg font-semibold transition-colors duration-300 ${
                                        active
                                            ? "text-indigo-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-indigo-600"
                                            : "text-gray-600 hover:text-indigo-600"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
