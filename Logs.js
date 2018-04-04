import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  COLOR,
  ListItem,
} from 'react-native-material-ui';
import moment from 'moment-jalaali';

export default class Logs extends Component {
  render() {
    return (
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
  expense: {
    color: COLOR.red400,
  },
  income: {
    color: COLOR.green400,
  },
});
