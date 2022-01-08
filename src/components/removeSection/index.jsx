import React from 'react';
import CityCard from "../cityCard"
import style from "./style.module.scss"
import RemoveCard from "../removeCard"

function RemoveSection(props) {
    const cityList = []
    for (const key in localStorage) {
      if (Object.hasOwnProperty.call(localStorage, key)) {
        const element = localStorage[key];
        cityList.push(element)
      }
    }
    return (
    <div className={style.container}>
        <h1>remove</h1>
        {cityList.map((cityname) => {
          return <RemoveCard key={cityname} cityName={cityname} />;
        })}
    </div> 
    );
}

export default RemoveSection;