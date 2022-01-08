import React from 'react';
import SelectResultCard from "../selectResultCard"

function SearchResult(props) {
    const listItems = props.cityList.map((city) => {
        return (
            <SelectResultCard cityName={city.name}/>
        ) 
    })
    return (
        <div>
            {listItems}
        </div>
    );
}

export default SearchResult;