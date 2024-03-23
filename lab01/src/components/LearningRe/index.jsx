import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './style.scss';

function LearningRe(props) {
    const [semester1Score, setSemester1Score] = useState(0);
    const [semester2Score, setSemester2Score] = useState(0);
    const [average, setAverage] = useState(0);
    const [grade, setGrade] = useState('');
    const [result, setResult] = useState('');

    const handleSemester1ScoreChange = (e) => {
        setSemester1Score(e.target.value);
    };

    const handleSemester2ScoreChange = (e) => {
        setSemester2Score(e.target.value);
    };

    const handleShowResultClick = () => {
        const avgScore = (parseFloat(semester1Score) + parseFloat(semester2Score)) / 2;
        setAverage(avgScore);

        const gradeValue = calculateGrade(avgScore);
        setGrade(gradeValue);

        const resultValue = calculateResult(avgScore);
        setResult(resultValue);
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

    const handleSemester1ScoreBlur = (e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) {
            value = 0;
        }
        if (value > 10) {
            value = 10;
        }
        setSemester1Score(value);
    };

    const handleSemester2ScoreBlur = (e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 0) {
            value = 0;
        }
        if (value > 10) {
            value = 10;
        }
        setSemester2Score(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        handleShowResultClick(); // Call the function to calculate and show results
    };

    return (
        <div className='container container-learning-results'>
            <div className="learning-results-title">
                <h2>KẾT QUẢ HỌC TẬP</h2>
            </div>
            <form className="learning-results-form" onSubmit={handleSubmit} method="post" action={window.location.pathname}>
                <div className="form-group">
                    <label htmlFor="semester1Score">Điểm HK1:</label>
                    <TextField
                        type="number"
                        id="semester1Score"
                        name="semester1Score"
                        value={semester1Score}
                        onChange={handleSemester1ScoreChange}
                        onBlur={handleSemester1ScoreBlur}
                        inputProps={{
                            inputMode: 'numeric',
                            pattern: '[0-9]*',
                            min: 0,
                            max: 10
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="semester2Score">Điểm HK2:</label>
                    <TextField
                        type="number"
                        id="semester2Score"
                        name="semester2Score"
                        value={semester2Score}
                        onChange={handleSemester2ScoreChange}
                        onBlur={handleSemester2ScoreBlur}
                        inputProps={{
                            inputMode: 'numeric',
                            pattern: '[0-9]*',
                            min: 0,
                            max: 10
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Average">Điểm trung bình:</label>
                    <TextField
                        type="text"
                        id="average"
                        name="average"
                        value={average.toFixed(2)}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="result">Kết quả:</label>
                    <TextField
                        type="text"
                        id="result"
                        name="result"
                        value={result}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Xếp loại học lực:</label>
                    <TextField
                        type="text"
                        id="grade"
                        name="grade"
                        value={grade}
                        readOnly
                    />
                </div>
                <div className="button-result">
                    <Button variant="contained" type="submit">Xem kết quả</Button>
                </div>
            </form>
        </div>
    );
}

export default LearningRe;