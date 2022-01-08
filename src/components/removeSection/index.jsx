import React from 'react';
import style from "./style.module.scss";
import RemoveCard from "../removeCard";
import {Link} from "react-router-dom";

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
        <div className={style.back_btn}>
          <Link to="/">
              <svg t="1641544095960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2026" width="32" height="32"><path d="M952 471.04H201.28l233.728-214.4V166.4a8 8 0 0 0-13.44-5.888L79.424 474.24a48 48 0 0 0 0 73.6l342.144 313.728a8 8 0 0 0 13.44-5.888v-90.368L201.28 550.976h750.72A8 8 0 0 0 960 542.976v-64a8 8 0 0 0-8-8z" p-id="2027" fill="#ffffff"></path></svg>
          </Link>
        </div>
        {cityList.map((cityname) => {
          return <RemoveCard key={cityname} cityName={cityname} />;
        })}
    </div> 
    );
}

export default RemoveSection;