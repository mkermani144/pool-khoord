import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import { ActionButton } from 'react-native-material-ui';

export default class FAB extends Component {
  handlePress =  (type) => {
    this.props.onPress(type);
  }
  render() {
    return (
      <ActionButton
        icon="add"
        onPress={ text => ['1', '-1'].includes(text) && this.handlePress(+text) }
        actions={[
          { icon: 'trending-down', label: 'هزینه', name: '-1'},
          { icon: 'trending-up', label: 'درآمد', name: '1'},
        ]}
        transition="speedDial"
        style={{
          container: styles.fab,
          speedDialActionContainer: styles.fabLabel,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  fab: {
    right: Dimensions.get('window').width - 96,
    bottom: 56,
  },
  fabLabel: {
    right: Dimensions.get('window').width - 172,
    flexDirection: 'row-reverse',
    bottom: 56,
  },
});

