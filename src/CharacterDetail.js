import React from 'react'
import {Link} from 'react-router-dom'

const CharacterDetail = (props) => {
  return (
    <div>
      <h2>{props.character.name}</h2>
      <img src={props.character.image} alt=""/>
      <br/>
      <Link to="/">Back</Link>
    </div>
  )
}

export default CharacterDetail;
