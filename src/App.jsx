import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Acasa from "./pages/Acasa";
import Despre from "./pages/Despre";
import Probleme from "./pages/Probleme";
import Probleme9 from "./probleme/a9a"
import Probleme10 from "./probleme/a10a"
import Probleme11 from "./probleme/a11a"
import Contact from "./pages/Contact";
import ProblemaView from "./pages/ProblemaView.jsx";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-gray-50 text-gray-800">
                <Navbar/>
                <main className="flex-grow w-full px-4 py-10">
                    <Routes>
                        <Route path="/" element={<Acasa/>}/>
                        <Route path="/despre" element={<Despre/>}/>
                        <Route path="/probleme" element={<Probleme/>}/>
                        <Route path="/probleme/a9a" element={<Probleme9/>}/>
                        <Route path="/probleme/a10a" element={<Probleme10/>}/>
                        <Route path="/probleme/a11a" element={<Probleme11/>}/>
                        <Route path="/problema/:id" element={<ProblemaView/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
