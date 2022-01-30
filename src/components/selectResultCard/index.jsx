import React from 'react';
import CityCard from "../cityCard"
import style from "./style.module.scss"

function SelectResultCard(props) {
    const storeToLocalStorage = () => {
        localStorage.setItem(props.cityName, props.cityName)
    }

    return (
    <div className={style.container}>
        <a className={style.addBtn} onClick={storeToLocalStorage} href='/'>
        <div className={style.dispalyArea}>
            <CityCard cityName={props.cityName} clickDisabled={true}>
            </CityCard>
        </div>
        </a>
    </div> 
    );
}

export default SelectResultCard;