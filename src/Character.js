import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Characters = () => {

  const [list, setList] = useState([]);  
        
  const fetchCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const myJson = await response.json();
    setList(myJson.results);
  };

  useEffect(() => {
    fetchCharacters()
    }, []
  );

  return (
    list.map(listItem => {
      return (
        <Link key={listItem.id} to={`/${listItem.id}`}>
          <h2>{listItem.name}</h2>
          <img src={listItem.image} alt=""/>
        </Link>
      )
    })
  )
}

export default Characters;
