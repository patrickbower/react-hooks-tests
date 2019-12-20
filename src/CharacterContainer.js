import React from 'react'
import { withRouter } from "react-router-dom"
import {GoGet, urlOne} from './Ajax';
import CharacterDetail from './CharacterDetail'

class CharacterContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      character: {}
    }
  }

  componentDidMount() {
    GoGet(urlOne(this.props.match.params.id))
      .then(data => {
        this.setState({
          character: data
        })
      });
  }

  render() {
    return <CharacterDetail character={this.state.character} />
  }
}

export default withRouter(CharacterContainer);
