import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

class LibraryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Rendering ' + this.props.lib.title + '...');
    return <ListItem title={this.props.lib.title} />;
  }
}

export default LibraryItem;
