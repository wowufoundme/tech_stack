import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ItemDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.item.description}</Text>
      </View>
    );
  }
}

export default ItemDescription;
