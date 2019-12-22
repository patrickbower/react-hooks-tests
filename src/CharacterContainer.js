import React, { useState, useEffect } from 'react'
import CharacterDetail from './CharacterDetail'

const CharacterContainer = props => {

  const [character, setCharacter] = useState([]); 
  const { id } = props.match.params;

  const fetchCharacter = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const myJson = await response.json();
    setCharacter(myJson);
  };

  useEffect(() => {
    fetchCharacter()
    }, []
  );

  return <CharacterDetail character={character} />
}

export default CharacterContainer;
