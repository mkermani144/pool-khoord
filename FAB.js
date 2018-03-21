import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Fab,
  Button,
  Icon,
} from 'native-base';

export default class FAB extends Component {
  state = {
    fabOpen: false,
  };
  handlePress =  (type) => {
    this.setState({ fabOpen: false });
    this.props.onPress(type);
  }
  render() {
    return (
      <Fab
        style={styles.fab}
        position="bottomLeft"
        direction="up"
        active={this.state.fabOpen}
        onPress={() => this.setState(prev => ({ fabOpen: !prev.fabOpen }))}
      >
        <Icon name="add" />
        <Button onPress={() => this.handlePress(1)} style={{ backgroundColor: '#4CAF50' }}>
          <Icon name="trending-up" />
        </Button>
        <Button onPress={() => this.handlePress(-1)} style={{ backgroundColor: '#F44336' }}>
          <Icon name="trending-down" />
        </Button>
      </Fab>
    )
  }
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#2196F3',
  },
});

