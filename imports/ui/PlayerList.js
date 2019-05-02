import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  renderPlayer(){

    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started</p>
        </div>
      )
    } else {
      return this.props.players.map( (player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }

render(){
  return(
  <div>
    <FlipMove maintainContainerHeight={true}>
    {this.renderPlayer()}
    </FlipMove>
  </div>
  );
}

};

PlayerList.opTypes = {
  players: PropTypes.array.isRequired
}
