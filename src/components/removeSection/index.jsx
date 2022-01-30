import React from 'react';  
import style from "./style.module.scss";
import RemoveCard from "../removeCard";
import {Link} from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';

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
       <div className={style.close_btn}>
         <Link to="/">
              <CloseButton variant="white" />
          </Link>
       </div>
        <div className={style.dispalyArea}>
          {cityList.map((cityname) => {
            return <RemoveCard key={cityname} cityName={cityname} />;
          })}
        </div>
    </div> 
    );
}

export default RemoveSection;