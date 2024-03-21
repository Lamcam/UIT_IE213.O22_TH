import React from "react";



function Name(props){
    return (
        <li>
            <a href={'#' + props.id} >{props.name}</a>
        </li>
    )
}

export default Name;