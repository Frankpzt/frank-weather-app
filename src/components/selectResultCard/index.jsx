import React from 'react';
import CityCard from "../cityCard"
import style from "./style.module.scss"

function SelectResultCard(props) {
    const storeToLocalStorage = () => {
        localStorage.setItem(props.cityName, props.cityName)
    }

    return (
    <div className={style.container}>
        <CityCard cityName={props.cityName} className={style.dispalyArea}>
        </CityCard>
        <a className={style.addBtn} onClick={storeToLocalStorage} href='/'>
                <svg
                    t="1641391359003"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1958" width="48" height="48">
                    <path d="M512 1024a512 512 0 1 1 0-1024.063936 512 512 0 0 1 0 1024.063936z m254.657343-581.69031h-191.808192v-191.808191h-127.872128v191.808191h-191.808192V574.145854h191.808192v187.844156h127.872128V574.20979h191.808192V442.30969z" p-id="1959" fill="#ffffff">
                    </path>
                </svg>
        </a>
    </div> 
    );
}

export default SelectResultCard;