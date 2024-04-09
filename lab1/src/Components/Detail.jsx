import React from "react";


const style ={
    display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
        backgroundColor: '#f5f5f5',
    
}

const imgStyle = {
    width: '350px',
    height: 'auto',
    borderRadius: '0px',
    
}



function Detail(props){
    return (
        <div className="detail" id={props.id} style={style}>
            <h3>{props.name}</h3>
            <img style={imgStyle} src={props.imgURL} alt={props.name} />
            <a href='#title'>Quay về đầu trang</a>
        </div>
    )
}

export default Detail;