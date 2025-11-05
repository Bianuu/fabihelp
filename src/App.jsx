import {useState} from "react";

function App() {
    const [mesaj, setMesaj] = useState("");

    const getMesaj = async () => {
        const res = await fetch("/api/hello");
        const data = await res.json();
        setMesaj(data.message);
    };

    return (
        <div style={{textAlign: "center", marginTop: "100px"}}>
            <h1>FabiHelp 🚀</h1>
            <button onClick={getMesaj}>Primește mesaj de la serverrrrrrrrr</button>
            <p>{mesaj}</p>
        </div>
    );
}

export default App;