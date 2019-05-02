import React from 'react';
import PropTypes from 'prop-types';

export default class TittleBar extends React.Component {
  render(){
    return (
      <div className="tittle-bar">
        <div className="wrapper">
        <h1>{this.props.tittle}</h1>
        <h2 className="tittle-bar__subtittle">{this.props.subtittle}</h2>
        </div>
      </div>
    );
  }
}

TittleBar.propTypes = {

  tittle: PropTypes.string.isRequired,
};

// TittleBar.propTypes = {
//   subTittle: React.PropTypes.string.isRequired
// };

// TittleBar.defaultProps = {
//   tittle: 'Default Tittle'
// }
