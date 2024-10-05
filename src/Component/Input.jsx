import React from "react";
import { useWeather } from "../Context/Weather";
const Input = () =>{
    const Weather = useWeather();
    console.log(Weather, 'weather');
    
    return(
    <div>
        <input className="input-field" type="text" 
        placeholder="search here"
        value={Weather.searchCity}
        onChange= {(e)=> Weather.setSeachCity(e.target.value)} />
    </div>
    )
}

export default Input;