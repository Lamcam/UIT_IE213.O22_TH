import React, { useState } from 'react';
import style from '../style/form2.module.scss';
import img from '../Img/pencil.png'
import PopUp, {handleChange} from './popUp';

function Form2() {
    const [hide, setHide] = useState(false);
    const [studyTracking, setStudent] = useState({
        student: '',
        teacher: '',
        class: '',
        date: '',
        task: '',
        completeAtSchool: false,
        completeAtHome:  false,
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if(name === 'student') {
            setStudent({...studyTracking, student: value});
        } else if(name === 'teacher') {
            setStudent({...studyTracking, teacher: value});
        } else if (name === 'class') {setStudent({...studyTracking, class: value})
        } else if (name === 'date') {setStudent({...studyTracking, date: value});
        } else if (name === 'completeAtSchool') {setStudent({...studyTracking, completeAtSchool: !studyTracking.completeAtSchool});
        } else if (name === 'completeAtHome') {setStudent({...studyTracking, completeAtHome: !studyTracking.completeAtHome});
        } else if (name === 'task') {setStudent({...studyTracking, task: value});   
    }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setHide(!hide);
        console.log(hide);
        console.log(studyTracking);
    };

    return (
        <>
        <form onSubmit={handleSubmit}  method='POST' >
            <div className={style.title_container}>
                <h2>Theo dõi học tập</h2>
            </div>

            <div className={style.section}>

            <div className={style.wrap}>

            <div className={style.baseIn4}>
                <label>
                    Tên học sinh:
                    <input
                        name='student'
                        type="text"
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Giáo viên phụ trách:
                        <input
                        name='teacher'
                        type="text"
                        onChange={handleInputChange}
                        />
                </label>
            </div>

            <div className={style.container}>
                <label>
                    Lớp:
                    <input
                        name='class'
                        type="text"
                        onChange={handleInputChange}
                    ></input>

                </label>

                <label>
                    Ngày:
                    <input
                        name='date'
                        type="date"
                        // value={inputText}
                        onChange={handleInputChange}
                    ></input>

                </label>

            </div>

            <div className={style.textField}>
                <label>
                    Những công việc phân công chưa làm:
                    <textarea name='task'
                        // value={inputText}
                        onChange={handleInputChange}
                    ></textarea>
                </label>
            </div>

        </div>
            <img style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '20px',
                }} src={img} alt="pencil" />
            
        </div>

            <div className={style.checkbox_container}>
                
                <label>
                    <input
                        name='completeAtSchool'
                        type="checkbox"
                        checked={studyTracking.completeAtSchool}
                        onChange={handleInputChange}
                    />
                    Những việc chưa làm sẽ được hoàn thành ngay tại lớp
                </label>

                <label>
                        <input
                            name='completeAtHome'
                            type="checkbox"
                            checked={studyTracking.completeAtHome}
                            onChange={handleInputChange}
                        />
                        Sẽ hoàn thành những công việc tại nhà và nộp cho giáo viên ngày hôm sau
                </label>
            </div>

            <button>Ghi nhận</button>
        </form>
        <PopUp 
        hide = {hide}
        name = {studyTracking.student}
        teacher = {studyTracking.teacher}
        class = {studyTracking.class}
        date = {studyTracking.date}
        task = {studyTracking.task}
        atHome = {studyTracking.completeAtHome}
        atClass = {studyTracking.completeAtSchool}
        />
        </>
    );
}

export default Form2;