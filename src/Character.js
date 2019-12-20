import React from 'react';
import {GoGet, urlAll} from './Ajax';
import {Link} from 'react-router-dom';

class Characters extends React.Component {
  constructor(){
    super();
    
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    GoGet(urlAll())
      .then(data => {
        this.setState({
          list: data.results
        })
      });
  }
  
  render() {
    return (
        this.state.list.map(each => {
          return (
            <Link key={each.id} to={`/${each.id}`}>
              <h2>{each.name}</h2>
              <img src={each.image} alt=""/>
            </Link>
          )
        })
    )
  }
}

export default Characters;
