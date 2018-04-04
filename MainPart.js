import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  BottomNavigation,
  COLOR,
} from 'react-native-material-ui';
import moment from 'moment-jalaali';

import Logs from './Logs';
import Reports from './Reports';

export default class MainPart extends Component {
  state = {
    active: 'logs',
  };
  changeTab = tab => this.setState({ active: tab });
  render() {
    return (
      <View style={styles.container}>
        {this.state.active === 'logs' ?
          <Logs list={this.props.list} /> :
          <Reports list={this.props.list} />
        }
        <BottomNavigation active={this.state.active} style={{ container: styles.bottomNavigation }}>
          <BottomNavigation.Action
            key="logs"
            label="تاریخچه"
            icon="menu"
            onPress={tab => this.changeTab('logs')}
            />
          <BottomNavigation.Action
            key="reports"
            label="گزارش‌ها"
            icon="pie-chart"
            onPress={tab => this.changeTab('reports')}
          />
        </BottomNavigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alignLeft: {
    textAlign: 'left',
  },
  bottomNavigation: {
    bottom: 0,
  },
  expense: {
    color: COLOR.red400,
  },
  income: {
    color: COLOR.green400,
  },
});
