import './App.css';
import { useEffect } from 'react';
import Button from './Component/Button';
import Card from './Component/Card';
import Input from './Component/Input' ;
import {useWeather} from './Context/Weather';
function App() {
  const Weather = useWeather();

  useEffect(()=>{
    //get current location here.
    Weather.fetchcurrentUserLocationData()
  }, [])
  return (
    <div className="App">
      <h1>Weather Forcast</h1>
      <Input  placeholder="this is input"/>
      <Button onClick={Weather.fetchData} value="search" /> 
      <Card />
      <Button onClick={()=> console.log('this is the name')
      } value="Refresh"/>
    </div>
  );
}

export default App;
