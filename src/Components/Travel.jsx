import React from "react";
import Name from "./Name";
import place from "../place";
import Detail from "./Detail";
import style from '../style/index.module.scss' 

function Travel() {

    function createList(place) {
        return (
            <Name 
            key={place.id}
            id={place.id}
            name={place.name}>
            imgURL={place.imgURL} </Name>
        )
    }

    function createDetail(place) {
        return (
            <Detail 
            key={place.id}
            id={place.id}
            name={place.name}
            imgURL={place.imgURL} />
        )
    }

    return (
        <div className={style.travel}>
            <h1 id="title">Danh lam thắng cảnh</h1>
            <div className={style.container}>
                <div className={style.landmark_list}>
                    <h2>Danh sách địa danh</h2>
                    <ul>
                        {place.map(createList)}
                    </ul>
                </div>

                <div className={style.intro}>
                    {place.map(createDetail)}
                </div>
            </div>

        </div>
    );
}

export default Travel;