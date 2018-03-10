import React, { Component } from 'react';
import {
  Tab,
  Tabs
} from 'native-base';
import { Text } from 'react-native';

export default class MainPart extends Component {
  render() {
    return (
      <Tabs>
        <Tab heading="گز‍ارش‌ها" />
        <Tab heading="تاریخچه" />
      </Tabs>
    );
  }
}