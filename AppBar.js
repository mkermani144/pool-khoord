import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class AppBar extends Component {
  setStyle = () => {
    if (!this.props.newItemPageOpen) return styles.appBarDefault;
    return this.props.newItemType === 1 ? styles.appBarIncome : styles.appBarExpense;
  }
  render() {
    return (
      !this.props.newItemPageOpen ?
        <Toolbar 
          centerElement="پول خورد"
          style={{
            container: this.setStyle(),
            titleText: styles.appBarTitle,
          }}
        />
        :
        <Toolbar
          leftElement="done"
          rightElement="arrow-back"
          style={{
            container: this.setStyle(),
            titleText: styles.appBarTitle,
          }}
          onLeftElementPress={this.props.onConfirm}
          onRightElementPress={this.props.onPressBack}
        />
    );
  }
}

const styles = StyleSheet.create({
  appBarDefault: {
    height: 72,
    paddingTop: 24,
    backgroundColor: '#FFEB3B',
  },
  appBarIncome: {
    height: 72,
    paddingTop: 24,
    backgroundColor: '#4CAF50',
  },
  appBarExpense: {
    height: 72,
    paddingTop: 24,
    backgroundColor: '#F44336',
  },
  appBarTitle: {
    color: '#212121',
  }
});
