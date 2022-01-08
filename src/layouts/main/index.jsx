import CityCard from '../../components/cityCard';
import {Link} from 'react-router-dom';

function Main() {
  const cityList = []
  for (const key in localStorage) {
    if (Object.hasOwnProperty.call(localStorage, key)) {
      const element = localStorage[key];
      cityList.push(element)
    }
  }

  return (
    <div>
          <Link to="/SearchBar">
            <svg
              t="1641391359003"
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1958" width="32" height="32">
              <path d="M512 1024a512 512 0 1 1 0-1024.063936 512 512 0 0 1 0 1024.063936z m254.657343-581.69031h-191.808192v-191.808191h-127.872128v191.808191h-191.808192V574.145854h191.808192v187.844156h127.872128V574.20979h191.808192V442.30969z" p-id="1959" fill="#ffffff">
              </path>
            </svg>
          </Link>
        {cityList.map((cityname) => {
          return <CityCard key={cityname} cityName={cityname} />;
        })}
        <Link to="/RemoveSection">
          <svg t="1641544570723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2935" width="32" height="32"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-960a448 448 0 1 0 448 448A448 448 0 0 0 512 64zM288 480h448v64H288v-64z" p-id="2936" fill="#ffffff"></path></svg> 
        </Link>
      </div>
  );
}

export default Main;