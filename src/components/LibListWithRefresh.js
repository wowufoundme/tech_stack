import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  UNSAFE_componentWillMount() {}

  constructor(props) {
    super(props);
  }

  state = {
    libr: this.props.libraries,
    refreshing: false,
  };

  handleRefresh() {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.setState(
          {
            libr: [...this.state.libr, { id: 14, title: 'NEW ELEMENT' }],
          },
          () => {
            this.setState({
              refreshing: false,
            });
          },
        );
      },
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.libr}
        renderItem={({ item }) => <LibraryItem lib={item} />}
        style={styles.listContainer}
        keyExtractor={item => item.id}
        onRefresh={() => this.handleRefresh()}
        refreshing={this.state.refreshing}
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
