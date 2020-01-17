import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

const WEBPACK = require('../assets/webpack.png');

class LibraryItem extends Component {
  constructor(props) {
    super(props);
  }

  renderDescription() {
    if (this.props.expanded) {
      return <Text>{this.props.lib.description}</Text>;
    }
  }

  render() {
    return (
      <View>
        <ListItem
          Component={TouchableWithoutFeedback}
          title={this.props.lib.title}
          titleStyle={styles.listStyle}
          bottomDivider
          leftAvatar={{ source: WEBPACK }}
          chevron={{
            name: 'caret-down',
            type: 'font-awesome',
            color: '#FFFFFF',
          }}
          pad={10}
          onPress={() => this.props.selectLibraryAction(this.props.lib.id)}
          containerStyle={styles.containerStyle}
        />
        {this.renderDescription()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listStyle: {
    color: '#FFFFFF',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  containerStyle: {
    backgroundColor: '#1E237E',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    margin: 8,
    elevation: 1,
    borderRadius: 10,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.lib.id === state.selectedLibraryId;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions,
)(LibraryItem);
