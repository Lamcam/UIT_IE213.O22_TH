import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import LearningResults from "./components/LearningResults";
import LearningTracking from "./components/LearningTracking";
import BookingInformation from "./components/BookingInformation";

function App() {
    return (
        <div className="App">
            <h3>21522422 - Bùi Xuân Nhi</h3>
            <ul className="list">
                <li>
                    <Link to="/">Trang chủ</Link>
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
                <Route path="/bai1" element={<LearningResults />} />
                <Route path="/bai4" element={<LearningTracking />} />
                <Route path="/bai5" element={<BookingInformation />} />
            </Routes>
        </div>
    );
}

export default App;
