import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Right,
  Header,
  Title
} from 'native-base';

export default class AppBar extends Component {
  render() {
    return (
      <Header style={styles.appBar} hasTabs>
        <Right>
          <Title style={styles.appBarTitle}>پول خورد</Title>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    height: 72,
    paddingTop: 24,
    backgroundColor: '#FFEB3B',
  },
  appBarTitle: {
    color: '#212121',
  }
});
