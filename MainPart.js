import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Tab,
  Tabs
} from 'native-base';
import { Text } from 'react-native';

export default class MainPart extends Component {
  render() {
    return (
      <Tabs tabBarUnderlineStyle={styles.tabUnderline}>
        <Tab
          tabStyle={styles.tab}
          activeTabStyle={styles.tab}
          textStyle={styles.tabText}
          activeTextStyle={styles.activeTabText}
          heading="گز‍ارش‌ها"
        />
        <Tab
          tabStyle={styles.tab}
          activeTabStyle={styles.tab}
          textStyle={styles.tabText}
          activeTextStyle={styles.activeTabText}
          heading="تاریخچه"
        />
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#FFEB3B',
  },
  tabUnderline: {
    backgroundColor: '#2196F3',
  },
  tabText: {
    color: '#212121',
  },
  activeTabText: {
    color: '#212121',
    fontWeight: 'bold',
  }
});
