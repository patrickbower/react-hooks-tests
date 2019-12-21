import React, { useState, useEffect } from 'react'
import {GoGet, urlOne} from './Ajax';
import CharacterDetail from './CharacterDetail'

const CharacterContainer = props => {

  const [character, setCharacter] = useState([]); 
  const { id } = props.match.params;

  const fetchCharacter = async () => {
    const response = await GoGet(urlOne(id));
    setCharacter(response);
  };

  useEffect(() => {
    fetchCharacter()
    }, []
  );

  return <CharacterDetail character={character} />
}

export default CharacterContainer;
