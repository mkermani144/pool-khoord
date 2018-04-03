import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  BottomNavigation,
  Container,
  COLOR,
  ListItem,
} from 'react-native-material-ui';
import moment from 'moment-jalaali';

export default class MainPart extends Component {
  state = {
    active: 'logs',
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          {this.props.list.map((el, i) => 
            <ListItem
              style={{
                primaryText: styles.alignLeft,
                secondaryText: StyleSheet.flatten([styles.alignLeft, el[1].value >= 0 ? styles.income : styles.expense]),
                tertiaryText: styles.alignLeft,
              }}
              key={i}
              divider
              centerElement={{
                primaryText: el[1].title,
                secondaryText: `${el[1].value}`,
                tertiaryText: `${moment(el[0]).format('jD jMMMM jYYYY - h:mm')}`,
              }}
            />
          )}
        </ScrollView>
        <BottomNavigation active={this.state.active} style={{ container: styles.bottomNavigation }}>
          <BottomNavigation.Action
            key="logs"
            label="تاریخچه"
            icon="menu"
          />
          <BottomNavigation.Action
            key="reports"
            label="گزارش‌ها"
            icon="pie-chart"
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
