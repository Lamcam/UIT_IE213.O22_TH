import React, { useState } from 'react';
import './style.scss'
function LearningOutcomes(props) {
    const [diemHK1, setDiemHK1] = useState(0);
    const [diemHK2, setDiemHK2] = useState(0);
    const [showResult, setShowResult] = useState(true);
    const [diemTrungBinh, setDiemTrungBinh] = useState(0);
    const [xepLoai, setXepLoai] = useState('');
    const [ketQua, setKetQua] = useState('');

    const handleDiemHK1Change = (e) => {
        setDiemHK1(e.target.value);

    };

    const handleDiemHK2Change = (e) => {
        setDiemHK2(e.target.value);
    };

    const handleShowResultClick = () => {
        const avgScore = (parseFloat(diemHK1) + parseFloat(diemHK2)) / 2;
        setDiemTrungBinh(avgScore);

        const grade = calculateGrade(avgScore);
        setXepLoai(grade);

        const result = calculateResult(avgScore);
        setKetQua(result);

        setShowResult(true);
    };

    const calculateGrade = (avgScore) => {
        if (avgScore >= 8) {
            return "Giỏi";
        } else if (avgScore >= 6.5) {
            return "Khá";
        } else if (avgScore >= 5) {
            return "Trung bình";
        } else {
            return "Yếu";
        }
    };

    const calculateResult = (avgScore) => {
        return avgScore >= 5 ? "Được lên lớp" : "Ở lại lớp";
    };
    const handleDiemHK1Blur = (e) => {
        const value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) {
            setDiemHK1(0);
        }
        if (value > 10)
            setDiemHK1(10);
    };
    const handleDiemHK2Blur = (e) => {
        const value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) {
            setDiemHK2(0);
        }
        if (value > 10)
            setDiemHK2(10);
    };
    return (
        <div className='container'>
            <div className="title">
                <h2>KẾT QUẢ HỌC TẬP</h2>
            </div>
            <form className="form-container">
                <div className="form-group">
                    <label htmlFor="diemHK1">Điểm HK1:</label>
                    <input
                        type="number"
                        id="diemHK1"
                        name="diemHK1"
                        inputMode="numeric"  // Chỉ hiển thị bàn phím số
                        pattern="[0-9]*"
                        value={diemHK1}
                        onChange={handleDiemHK1Change}
                        onBlur={handleDiemHK1Blur}
                        min={0}
                        max={10}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="diemHK2">Điểm HK2:</label>
                    <input
                        type="number"
                        id="diemHK2"
                        name="diemHK2"
                        inputMode="numeric"  // Chỉ hiển thị bàn phím số
                        pattern="[0-9]*"
                        value={diemHK2}
                        onChange={handleDiemHK2Change}
                        onBlur={handleDiemHK2Blur}
                        min={0}
                        max={10}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="diemTrungBinh">Điểm trung bình:</label>
                    <input
                        type="text"
                        id="diemTrungBinh"
                        name="diemTrungBinh"
                        value={diemTrungBinh.toFixed(2)}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ketQua">Kết quả:</label>
                    <input
                        type="text"
                        id="ketQua"
                        name="ketQua"
                        value={ketQua}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="xepLoai">Xếp loại học lực:</label>
                    <input
                        type="text"
                        id="xepLoai"
                        name="xepLoai"
                        value={xepLoai}
                        readOnly
                    />
                </div>
                <div className="button-result">
                    <button type="button" onClick={handleShowResultClick}>Xem kết quả</button>
                </div>
            </form>
        </div>
    );
}

export default LearningOutcomes;
