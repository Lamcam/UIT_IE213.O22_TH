import React, { useState } from "react";
import "../styles/Bai1.css";

function Bai1() {
    const [semester1, setSemester1] = useState("");
    const [semester2, setSemester2] = useState("");
    const [average, setAverage] = useState("");
    const [pass, setPass] = useState("");
    const [classification, setClassification] = useState("");

    // Hàm xử lý sự kiện khi submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        const avg = (
            (parseFloat(semester1) + parseFloat(semester2) * 2) /
            3
        ).toFixed(2);
        setAverage(avg);

        if (avg >= 5) {
            setPass("Được lên lớp");
        } else {
            setPass("Ở lại lớp");
        }

        if (avg >= 8) {
            setClassification("Giỏi");
        } else if (avg >= 6.5) {
            setClassification("Khá");
        } else if (avg >= 5) {
            setClassification("Trung bình");
        } else {
            setClassification("Yếu");
        }
    };

    return (
        <div className="form-container" onSubmit={handleSubmit}>
            <h1>KẾT QUẢ HỌC TẬP</h1>
            <form>
                <div className="input-content">
                    <label>Điểm HK1: </label>
                    <input
                        type="number"
                        name="semester1"
                        value={semester1}
                        onChange={(e) => setSemester1(e.target.value)}
                        min="0"
                        max="10"
                        step="0.1"
                        required
                    />
                </div>
                <div className="input-content">
                    <label>Điểm HK2: </label>
                    <input
                        type="number"
                        name="semester2"
                        value={semester2}
                        onChange={(e) => setSemester2(e.target.value)}
                        min="0"
                        max="10"
                        step="0.1"
                        required
                    />
                </div>
                <div className="input-content">
                    <label>Điểm trung bình: </label>
                    <input
                        type="number"
                        name="average"
                        value={average}
                        readOnly
                    />
                </div>
                <div className="input-content ">
                    <label>Kết quả: </label>
                    <input type="text" name="pass" value={pass} readOnly />
                </div>
                <div className="input-content">
                    <label>Xếp loại học lực: </label>
                    <input
                        type="text"
                        name="classification"
                        value={classification}
                        readOnly
                    />
                </div>
                <button type="submit">Xem kết quả</button>
            </form>
        </div>
    );
}

export default Bai1;
