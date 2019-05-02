import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';

Meteor.startup( () => {

 Tracker.autorun( () => {
  let players = Players.find({},{sort: {score: -1}}).fetch();
  let positionedPlayer = calculatePlayerPositions(players);
  let tittle = 'Score Keep';
  ReactDOM.render(<App tittle={tittle} players={positionedPlayer}/>, document.getElementById('app'));
  });
});
