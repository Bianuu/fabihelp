import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Problems from "./pages/Problems";
import Problem from "./pages/Problem";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * App component defines the application routes and wraps each page with
 * a common Layout.  Undefined paths fall back to a NotFound page.  We
 * use BrowserRouter for client‑side navigation.
 */
function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home/>
                        </Layout>
                    }
                />
                <Route
                    path="/despre"
                    element={
                        <Layout>
                            <About/>
                        </Layout>
                    }
                />
                <Route
                    path="/probleme"
                    element={
                        <Layout>
                            <Problems/>
                        </Layout>
                    }
                />
                <Route
                    path="/problema/:id"
                    element={
                        <Layout>
                            <Problem/>
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contact/>
                        </Layout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Layout>
                            <NotFound/>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;