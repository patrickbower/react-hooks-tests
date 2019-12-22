import React, { useState, useEffect } from 'react'
import CharacterDetail from './CharacterDetail'
import {Link} from 'react-router-dom'

const CharacterContainer = props => {

  const [ character, setCharacter ] = useState(null); 
  const { id } = props.match.params;

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const myJson = await response.json();
      setCharacter(myJson);
    }
    fetchCharacter();
  }, [id]);

  return <CharacterDetail 
    character={character} 
    children={
      <Link to="/">Back</Link>
    }/>
}

export default CharacterContainer;
