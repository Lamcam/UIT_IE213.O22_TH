import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import LearningOutcomes from './components/LearningOutcomes';
import LearningMonitoring from './components/LearningMonitoring';
import BookingInformation from './components/BookingInformation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/bai1" element={<LearningOutcomes />} />
        <Route path="/bai4" element={<LearningMonitoring />} />
        <Route path="/bai5" element={<BookingInformation />} />
      </Routes>
      <ul className="list">
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
    </div>
  );
}

export default App;
