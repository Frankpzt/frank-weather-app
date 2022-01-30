import React, {useState, useEffect} from 'react';
import getWeatherByCityName from '../../requests/getWeatherByCityName';
import style from "./style.module.scss";
import DetailedCard from "../../components/detailedCard";
import conditions from "../../services/conditions.json";

function CityCard(props) {
    const [detailVisible, setDetailVisible] = useState(false)
    const [weatherInfo, setWeatherInfo] = useState({
        name: "",
        country: "",
        localtime: "",
        temp: "",
        is_day: 1
    });
    const [condition, setCondition] = useState({
        code: "",
        icon: "",
        text: "",
        zh_text: ""
    })

    useEffect(
        () => {
            async function fetchAndSetData() {
                try {
                    const response = await getWeatherByCityName(props.cityName);
                    console.log(response.location.name);
                    const data = {
                        name: response.location.name,
                        country: response.location.country,
                        localtime: response.location.localtime.slice(0, 10),
                        temp: response.current.temp_c,
                        is_day: response.current.is_day
                    }
                    const condition = {
                        code: response.current.condition.code,
                        icon: response.current.condition.icon,
                        text: response.current.condition.text
                    }
                    setWeatherInfo(data)
                    setCondition(condition)
                    conditions.forEach(e => {
                        if (e.code === condition.code) {
                            // console.log(e.languages[3]);
                            setCondition({...condition, zh_text: e.languages[3].day_text})
                        }
                    })
                } catch (error) {
                    console.log(error);
                    setWeatherInfo({
                        name: "opps... please refreash your page.",
                        country: "",
                        localtime: "",
                        temp: "",
                        is_day: 1
                    })
                }

        }
        fetchAndSetData();
        const interval = setInterval(fetchAndSetData, 10000)
        return () => {
            console.log("destroyed");
            setWeatherInfo({});
            setCondition({});
            clearInterval(interval);
          };
    }, [props.cityName])
    const showDetail = () => {
        console.log("show");
        setDetailVisible(true)
    }
    const hideDetail = () => {
        console.log("ok");
            setDetailVisible(false)
    }
    return (
        <>
            <div className={style.container} onClick={props.clickDisabled? () => {} : showDetail}>
                <h1>{weatherInfo.name}</h1>
                <h2> <p>{weatherInfo.temp}</p> </h2>
            </div>
            {detailVisible && weatherInfo.name !== "error" && <DetailedCard 
                               name={weatherInfo.name}
                               icon={condition.icon}
                               temp={weatherInfo.temp}
                               text={condition.text}
                               zh_text={condition.zh_text}
                               country={weatherInfo.country}
                               localtime={weatherInfo.localtime}
                               hideDetail={hideDetail} className={style.detail} 
                               />}
        </>
    );
}

export default CityCard;