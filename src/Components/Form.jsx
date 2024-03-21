import React, { useState } from 'react';
import style from '../style/form.module.scss'
// Form component

const Form = () => {

    const [grade_HK1, changeHK1] = useState(0);
    const [grade_HK2, changeHK2] = useState(0);
    const [average, changeAve] = useState("");
    const [result, changeResult] = useState("");
    const [rank, changeRank] = useState("");

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
            if (name === 'HK1' && value >= 0 && value <= 10) {
                changeHK1(parseFloat(value));
            } else if (name === 'HK2' && value >= 0 && value <= 10) {
                changeHK2(parseFloat(value));
            }

    };
        
    const clasify = (average) => {
        if (average < 5) {
            changeResult('Yếu');
            changeRank("Ở lại lớp")
        } else if (average >= 5 && average < 6.5) {
            changeResult('Trung bình');
        } else if (average >= 6.5 && average < 8) {
            changeResult('Khá');
        } else if (average >= 8 && average < 9) {
            changeResult('Giỏi');
        } else if (average >= 9 && average <= 10) {
            changeResult('Xuất sắc');
        }
        if (average >= 5) {
            changeRank("Được lên lớp");
        }
    }

    // Call handleInputChange in the input elements
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let average = (grade_HK1 + grade_HK2*2) / 3;
        if(grade_HK1 < 0 || grade_HK1 > 10 || grade_HK2 < 0 || grade_HK2 > 10 || isNaN(average)) {
            alert('Invalid input');
            return;
        }
        changeAve(average);
        clasify(average);
    };

    return (
        <form onSubmit={handleSubmit} method='POST' action='/' >
            <div className={style.title_container}>
                <h2>Kết quả học tập</h2>
            </div>
            
            <div className={style.container}>

                <div>
                    <label htmlFor='HK1'>Điểm HK1:</label>
                    <input name='HK1' id='HK1' type='text' onChange={handleInputChange}></input>
                </div>

                <div>
                    <label htmlFor='HK2'>Điểm HK2:</label>
                    <input name='HK2' id='HK2' type='text' onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor='average'> Điểm trung bình:</label>
                    <input id='average' type='number' defaultValue={average}></input>
                </div>
                <div>
                    <label htmlFor='result'>Kết quả:</label>
                    <input id='result' type='text' defaultValue={result}></input>
                </div>
                <div>
                    <label htmlFor='rank'>Xếp loại:</label>
                    <input id='rank' type='text' defaultValue={rank}></input>
                </div>

                <button type="submit">Xem kết quả</button>

            </div>
        </form>
    );
};
export default Form;