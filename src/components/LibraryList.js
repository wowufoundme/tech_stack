import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  UNSAFE_componentWillMount() {}

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={({ item }) => <LibraryItem lib={item} />}
        style={styles.listContainer}
        keyExtractor={item => item.title}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 80,
  },
});

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
