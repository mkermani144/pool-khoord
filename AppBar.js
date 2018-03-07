import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Right,
  Container,
  Header,
  Title
} from 'native-base';

export default class AppBar extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.appBar}>
          <Right>
            <Title>پول خورد</Title>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    height: 72,
    paddingTop: 24,
  },
});
