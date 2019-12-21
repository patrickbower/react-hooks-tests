import React, { useEffect, useState } from 'react';
import {GoGet, urlAll} from './Ajax';
import {Link} from 'react-router-dom';

const Characters = () => {

  const [list, setList] = useState([]);  
        
  const fetchCharacters = async () => {
    const response = await GoGet(urlAll());
    setList(response.results)
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
