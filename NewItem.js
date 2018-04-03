import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class NewItem extends Component {
  render() {
    return (
      <View>
        <TextField
          label='عنوان'
          containerStyle={styles.textInput}
          onChangeText={newTitle => this.props.updateCurrentTitle(newTitle)}
          error={this.props.titleError}
        />
        <TextField
          label='مقدار'
          containerStyle={styles.textInput}
          onChangeText={newValue => this.props.updateCurrentValue(newValue)}
          error={this.props.valueError}
          keyboardType="numeric"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 16,
    marginRight: 16,
  },
});