import React from 'react';
import './Country.css';

const Country = (Props) => {
    const {name,capital,population,area,flags} = Props.country
    return (
        <div className='single-country'>
            <h3>Country Name: {name.common}</h3>
            <img style={{width:'200px'}} src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
        
    );
};

export default Country;