export default function Footer() {
    return (
        <footer
            className="fixed-bottom w-full bg-indigo-700 text-white py-6 px-4 text-center text-sm md:text-base overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2">
                <p>
                    © {new Date().getFullYear()} <b>FabiHelp</b> — Toate drepturile rezervate.
                </p>
                <span className="hidden sm:inline text-indigo-300">|</span>
                <p className="text-indigo-200">
                    Creat cu 💙 pasiune pentru informatică.
                </p>
            </div>
        </footer>
    );
}
