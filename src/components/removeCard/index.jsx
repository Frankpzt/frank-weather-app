import React from 'react';
import CityCard from "../cityCard"
import style from "./style.module.scss"

function RemoveResultCard(props) {
    const removeFromLocalStorage = () => {
        localStorage.removeItem(props.cityName)
    }

    return (
    <div className={style.container}>
        <CityCard cityName={props.cityName} className={style.dispalyArea}>
        </CityCard>
        <a className={style.addBtn} onClick={removeFromLocalStorage} href='/'>
        <svg t="1641544570723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2935" width="32" height="32"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-960a448 448 0 1 0 448 448A448 448 0 0 0 512 64zM288 480h448v64H288v-64z" p-id="2936" fill="#ffffff"></path></svg> 
        </a>
    </div> 
    );
}

export default RemoveResultCard;