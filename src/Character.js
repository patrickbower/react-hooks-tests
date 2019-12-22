import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {

  const [list, setList] = useState([]);  
        
  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const myJson = await response.json();
      setList(myJson);
    }
    fetchCharacters();
  }, []);

  return (
    <ol>
      { list.map(listItem => {
        return (
          <li>
            <Link key={listItem.id} to={`/${listItem.id}`}>
              <h2>{listItem.name}</h2>
              <img src={listItem.image} alt=""/>
            </Link>
          </li>
        )
      }) }
    </ol> 
  )
}

export default Characters;
