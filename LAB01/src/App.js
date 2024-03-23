import { Routes, Route, Link } from "react-router-dom";
import Bai1 from "./pages/Bai1";
import Bai4 from "./pages/Bai4";
import Bai5 from "./pages/Bai5";
import './App.css'
function App() {
    return (
        <div className="app">
            <nav style={{ fontSize: "20px" }}>
                <h3 style={{marginLeft:"20px"}}>MENU</h3>
                <ul>
                    <li>
                        <Link to="/bai1">Bài 1</Link>
                    </li>
                    <li>
                        <Link to="/bai4">Bài 4</Link>
                    </li>
                    <li>
                        <Link to="/bai5">Bài 5</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/bai1" element={<Bai1/>} />
                <Route path="/bai4" element={<Bai4/>} />
                <Route path="/bai5" element={<Bai5/>} />
            </Routes>
        </div>
    );
}

export default App;
