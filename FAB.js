import React, { Component } from 'react';
import {
  Fab,
  Icon,
} from 'native-base';

export default class FAB extends Component {
  render() {
    return (
      <Fab active>
        <Icon name="add" />
      </Fab>
    )
  }
}