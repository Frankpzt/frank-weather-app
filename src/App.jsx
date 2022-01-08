// import React, {useEffect} from 'react';
import style from './App.module.scss';
import CityCard from './components/cityCard';
import SearchBar from "./components/searchBar"
import Routes from './routes';
import RemoveSection from "./components/removeSection"

function App() {

  return (
    <div className={style.App}>
      <Routes />
    </div>
  );
}

export default App;
