import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ItemDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.descContainer}>
        <Text style={styles.descText}>{this.props.item.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#EEEEEE',
  },
  descText: {
    color: '#1E237E',
    lineHeight: 14 * 1.5,
    fontSize: 14,
    alignSelf: 'stretch',
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
  },
});

export default ItemDescription;
