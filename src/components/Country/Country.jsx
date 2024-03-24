import { useState } from 'react';
import './Country.css';


const Country = ({country}) => {
  const {name, flags, population, area, cca3} = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  }
    return (
        <div className='Country'>
            <h3>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area} </p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>Visited</button>
            {visited && 'I have visited Country.'}
        </div>
    );
};

export default Country;


      

