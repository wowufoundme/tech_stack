import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const WEBPACK = require('../assets/webpack.png');

class LibraryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        title={this.props.lib.title}
        subtitle={this.props.lib.description.slice(0, 50).concat('...')}
        titleStyle={styles.listStyle}
        bottomDivider
        leftAvatar={{ source: WEBPACK }}
        chevron
        pad={10}
        onPress={() => []}
        containerStyle={styles.containerStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  listStyle: {
    color: '#1a237e',
  },
  containerStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    margin: 8,
    elevation: 1,
    borderRadius: 10,
  },
});

export default LibraryItem;
