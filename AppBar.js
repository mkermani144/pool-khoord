import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Left,
  Right,
  Header,
  Title,
  Icon,
  Button,
  Body,
} from 'native-base';

export default class AppBar extends Component {
  setStyle = () => {
    if (!this.props.newItemPageOpen) return styles.appBarDefault;
    return this.props.newItemType === 1 ? styles.appBarIncome : styles.appBarExpense;
  }
  render() {
    return (
      <Header style={this.setStyle()} hasTabs>
        {!this.props.newItemPageOpen ?
          <Body>
            <Title style={styles.appBarTitle}>پول خورد</Title>
          </Body>
          :
          <Left>
            <Button
              transparent
              onPress={this.props.onConfirm}
            >
              <Icon name="checkmark" />
            </Button>
          </Left>
        }
        {this.props.newItemPageOpen &&
          <Right>
            <Button
              transparent
              onPress={this.props.onPressBack}
            >
              <Icon name="arrow-back" />
            </Button>
          </Right>
        }
      </Header>
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
