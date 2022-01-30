import React from 'react';
import style from "./style.module.scss";
import {useState} from "react";

function RemoveResultCard(props) {
    const [cityName, setCityName] = useState(props.cityName)
    const removeFromLocalStorage = () => {
        setCityName("");
        localStorage.removeItem(props.cityName)
    }

    return (
   cityName? <div className={style.container}>
        <div>
                <h1>{cityName}</h1>
        </div>
        <div className={style.removeBtn} onClick={removeFromLocalStorage} >
        <svg t="1641544570723" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2935" width="32" height="32"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-960a448 448 0 1 0 448 448A448 448 0 0 0 512 64zM288 480h448v64H288v-64z" p-id="2936" fill="#ffffff"></path></svg> 
        </div>
    </div> : <div></div>
    );
}

export default RemoveResultCard;