import { useEffect, useState } from "react";
import country from "../country/country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
       fetch('https://restcountries.com/v3.1/all') 
       .then(res => res.json())
       .then(data => setCountries(data));
    } , [])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country => <country></country>)
            }
        </div>
    );
};

export default Countries;