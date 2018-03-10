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
          <Title>پول خورد</Title>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    height: 72,
    paddingTop: 24,
  },
});
