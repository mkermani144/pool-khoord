import React, { Component } from 'react';
import { Container } from 'native-base';

import AppBar from './AppBar';
import MainPart from './MainPart';
import FAB from './FAB';

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />
        <MainPart />
        <FAB />
      </Container>
    );
  }
}
