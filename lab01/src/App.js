import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import LearningRe from "./components/LearningRe";
import LearningManage from "./components/LearningManage";
import BookingInf from "./components/BookingInf";

function App() {
    return (
        <div className="App">
            <h3>21520796 - Bùi Yến Giàu</h3>
            <ul className="list">
                <li>
                    <Link to="/"></Link>
                </li>
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
            <Routes>
                <Route path="/" />
                <Route path="/bai1" element={<LearningRe />} />
                <Route path="/bai4" element={<LearningManage />} />
                <Route path="/bai5" element={<BookingInf />} />
            </Routes>
        </div>
    );
}

export default App;
