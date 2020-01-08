import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {

  const [list, setList] = useState([]);  
        
  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const myJson = await response.json();
      setList(myJson.results);
    }
    fetchCharacters();
  }, []);

  return (
    <ul>
      { list.map(listItem => {
        return (
          <li key={listItem.id}>
            <Link to={`/${listItem.id}`}>
              <h2>{listItem.name}</h2>
              <img src={listItem.image} alt=""/>
            </Link>
          </li> )
      })}
    </ul> 
  )
}

export default Characters;
