import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Fab,
  Icon,
} from 'native-base';

export default class FAB extends Component {
  render() {
    return (
      <Fab
        style={styles.fab}
        active
      >
        <Icon name="add" />
      </Fab>
    )
  }
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#2196F3',
  },
});

