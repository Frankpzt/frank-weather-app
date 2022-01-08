import React, {useState, useEffect} from 'react';
import style from "./style.module.scss"

function DetailedCard(props) {
    return (
            <div className={style.container} onClick={props.hideDetail
            }>
                <div> <img src={props.icon} alt={props.text} /></div>
                <h1 className={style.cityName}>{props.name}</h1>
                <h2 className={style.temprature}>{props.temp}</h2>
                <h2 className={style.text}>{props.text}</h2>
                <h2 className={style.text}>{props.zh_text}</h2>
                <ul className={style.otherInfo}>
                    <li>{props.country}</li>
                    <li>{props.localtime}</li>
                </ul>
            </div>
    );
}

export default DetailedCard;