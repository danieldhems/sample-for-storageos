import React from 'react';
import R from 'ramda';

class Beacon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayBeacon } = this.props;
    return displayBeacon ? <div className="beacon" /> : null;
  }
}

export default Beacon;
