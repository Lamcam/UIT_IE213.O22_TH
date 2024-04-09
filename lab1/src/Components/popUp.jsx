import React, {useState} from "react";


function PopUp (props) {

    const hide = props.hide ? "block" : "none";
    console.log("hide in popUp ",hide);
    const style={
        posittion: 'relative',
        display: hide,
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '400',
        height: '250px',
        width: '500px',
        position: 'absolute',
        bot: '50%',
        left: '50%',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'white',
        border: '1px solid black',
    }

    let atHome =  props.atHome ? "Tại nhà" : "";
    let atClass = props.atClass ? "Tại lớp" : "";

    return (
        <section style={style}>
            <h1>Thông tin phiếu theo dõi</h1>
            <p>Tên học sinh: {props.name} - Lớp: {props.class} </p>
            <p>Ngày đăng ký: {props.date} - Giáo viên phụ trách {props.teacher}</p>
            <p>Những công việc đã được phân công nhưng chưa hoàn thành</p>
            <p>{props.task}</p>

            <p>Cam kết sẽ hoàn thành tại: {atHome} {(atHome !== "" && atClass !== "" ) ?  "-" :  null } {atClass} </p>
        </section>
    );
}

export default PopUp;

