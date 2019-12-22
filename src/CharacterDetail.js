import React from 'react'

const CharacterDetail = (props) => {
  return (
    <React.Fragment>
      <h2>{props.character.id}. {props.character.name}</h2>
      <img src={props.character.image} alt=""/>
      {props.children}
    </React.Fragment>
  )
}

export default CharacterDetail;
