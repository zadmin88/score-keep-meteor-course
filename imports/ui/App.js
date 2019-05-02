import React from 'react';
import TittleBar from './TittleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    return (
      <div>
      <TittleBar tittle={this.props.tittle} subtittle='created By Zai'/>
      <div className="wrapper">
      <PlayerList players={this.props.players} />
      <AddPlayer />
      </div>
      </div>
    );
  }
};
App.propTypes = {
  tittle: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
}
