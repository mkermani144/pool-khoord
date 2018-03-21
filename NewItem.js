import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input
} from 'native-base';
import { TextField } from 'react-native-material-textfield';

export default class NewItem extends Component {
  render() {
    return (
      <Container>
        <TextField
          label='عنوان'
          inputContainerStyle={styles.textInput}
        />
        <TextField
          label='مقدار'
          inputContainerStyle={styles.textInput}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 16,
    marginRight: 16,
  },
});