import React, { useEffect, useState } from 'react';
import {GoGet, urlAll} from './Ajax';
import {Link} from 'react-router-dom';

const Characters = () => {

  // const state = {
  //   list: []
  // }

  const [list, setList] = useState([]);
  
  // componentDidMount() {
    //   GoGet(urlAll())
    //     .then(data => {
      //       this.setState({
        //         list: data.results
        //       })
        //     });
        // }
  

  const getAllCharacters = () => {
    return GoGet(urlAll())
      .then(data => {
          return data.results
        });
  }
        
  useEffect(() => {
    getAllCharacters().then(data => { console.log(data) });
  },[]);


  return (
    list.map(each => {
      return (
        <Link key={each.id} to={`/${each.id}`}>
          <h2>{each.name}</h2>
          <img src={each.image} alt=""/>
        </Link>
      )
    })
  )
}

export default Characters;
