import { useState } from 'react';
import './Country.css';


const Country = ({country, handleVisitedCountry}) => {
  const {name, flags, population, area, cca3} = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  }

  console.log(handleVisitedCountry);

  
    return (
        <div className= {`Country ${visited ? 'visited' : 'non-visited'}`} >
            <h3 style={{color: visited ? 'purple' : 'black'}}>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area} </p>
            <p><small>Code: {cca3}</small></p>
           
            <button>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited Country.' : 'I want to visit this country'}
        </div>
    );
};   

export default Country;


      

