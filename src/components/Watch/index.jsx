import React from 'react';
import {useState, useEffect} from "react";
import style from "./style.module.scss";

function Watch(props) {
const date = new Date().toLocaleTimeString();
const hour = date.split(":")[0];
const minute = date.split(":")[1];
const dayOrNight = date.split(":")[2].split(" ")[1];
const [seconds, setTimer] = useState(0);


useEffect(() => {
const tick = () => {
setTimer(prevCount => prevCount + 1);
}
const timer = setInterval(tick,1000)
return () => {
clearInterval(timer);
}
}, [seconds]

)
return (
<div className={style.container}>
    <h1> <span className={style.hour}> {hour}</span> : <span className={style.minute}> {minute}</span> {dayOrNight} <span
            className={style.dayOrNight}></span> </h1>
</div>
);
}

export default Watch;