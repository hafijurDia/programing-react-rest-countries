import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    return (
        <div>
            <h1>Countries form other File</h1>
            <div className="country-container">
            
            {
                countries.map(country => <><Country country={country}></Country></> )
            }
        </div>
        </div>
    );
};

export default Countries;