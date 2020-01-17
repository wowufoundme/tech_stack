import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ItemDescription from './ItemDescription';

const WEBPACK = require('../assets/webpack.png');

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class LibraryItem extends Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillUpdate() {
    LayoutAnimation.linear();
  }

  renderDescription() {
    if (this.props.expanded) {
      return <ItemDescription item={this.props.lib} />;
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
