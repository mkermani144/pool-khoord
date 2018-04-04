import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  COLOR,
  Icon,
  ListItem,
  Subheader,
} from 'react-native-material-ui';
import moment from 'moment-jalaali';

export default class Reports extends Component {
  dataAvailable = totalDays => {
    if (!this.props.list.length) {
      return false;
    }
    const today = moment().startOf('day').valueOf();
    const totalDaysAgo = moment(today).subtract(totalDays, 'days').valueOf();
    return this.props.list[0][0] <= totalDaysAgo;
  }
  recentMonthList = list => {
    const today = moment().startOf('day').valueOf();
    const oneMonthAgo = moment(today).subtract(30, 'days').valueOf();
    return list.filter(el => el[0] > oneMonthAgo);
  }
  recentWeekList = list => {
    const today = moment().startOf('day').valueOf();
    const oneWeekAgo = moment(today).subtract(1, 'week').valueOf();
    return list.filter(el => el[0] > oneWeekAgo);
  }
  sum = list => 0 | list.reduce((prev, cur) => prev + cur[1].value, 0);
  avg = (list, totalDays) => 0 | list.reduce((prev, cur) => prev + cur[1].value , 0) / totalDays;
  incomeAvg = (list, totalDays) => this.avg(list.filter(el => el[1].value > 0), totalDays);
  expenseAvg = (list, totalDays) => this.avg(list.filter(el => el[1].value < 0), totalDays);
  render() {
    if (!this.dataAvailable(7)) {
      return (
        <View style={StyleSheet.flatten([styles.container, styles.emptyState])}>
          <Icon name="pie-chart" size={72} />
          <Text style={styles.emptyStateTitle}>داده‌ای جهت چاپ موجود نیست</Text>
          <Text style={styles.emptyStateDescription}>گزارش‌ها پس از حداقل یک هفته استفاده از اپ نمایان می‌شوند.</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        {this.dataAvailable(30) &&
          <View style={styles.container}>
            <Subheader text="گزارش ۳۰ روز اخیر" />
            <ListItem
              style={{
                primaryText: styles.alignLeft,
                secondaryText: styles.alignLeft,
                tertiaryText: styles.alignLeft,
              }}
              divider
              centerElement={{
                primaryText: 'مجموع درآمدها و هزینه‌ها',
                secondaryText: `${this.sum(this.recentMonthList(this.props.list))}`,
              }}
            />
            <ListItem
              style={{
                primaryText: styles.alignLeft,
                secondaryText: styles.alignLeft,
                tertiaryText: styles.alignLeft,
              }}
              divider
              centerElement={{
                primaryText: 'میانگین مجموع درآمد و هزینه‌ی روزانه',
                secondaryText: `${this.avg(this.recentMonthList(this.props.list), 30)}`,
              }}
            />
            <ListItem
              style={{
                primaryText: styles.alignLeft,
                secondaryText: styles.alignLeft,
                tertiaryText: styles.alignLeft,
              }}
              divider
              centerElement={{
                primaryText: 'میانگین درآمد روزانه',
                secondaryText: `${this.incomeAvg(this.recentMonthList(this.props.list), 30)}`,
              }}
            />
            <ListItem
              style={{
                primaryText: styles.alignLeft,
                secondaryText: styles.alignLeft,
                tertiaryText: styles.alignLeft,
              }}
              divider
              centerElement={{
                primaryText: 'میانگین مخارج روزانه',
                secondaryText: `${-this.expenseAvg(this.recentMonthList(this.props.list), 30)}`,
              }}
            />
          </View>
        }
        <Subheader text="گزارش ۷ روز اخیر" />
        <ListItem
          style={{
            primaryText: styles.alignLeft,
            secondaryText: styles.alignLeft,
            tertiaryText: styles.alignLeft,
          }}
          divider
          centerElement={{
            primaryText: 'مجموع درآمدها و هزینه‌ها',
            secondaryText: `${this.sum(this.recentWeekList(this.props.list))}`,
          }}
        />
        <ListItem
          style={{
            primaryText: styles.alignLeft,
            secondaryText: styles.alignLeft,
            tertiaryText: styles.alignLeft,
          }}
          divider
          centerElement={{
            primaryText: 'میانگین مجموع درآمد و هزینه‌ی روزانه',
            secondaryText: `${this.avg(this.recentWeekList(this.props.list), 7)}`,
          }}
        />
        <ListItem
          style={{
            primaryText: styles.alignLeft,
            secondaryText: styles.alignLeft,
            tertiaryText: styles.alignLeft,
          }}
          divider
          centerElement={{
            primaryText: 'میانگین درآمد روزانه',
            secondaryText: `${this.incomeAvg(this.recentWeekList(this.props.list), 7)}`,
          }}
        />
        <ListItem
          style={{
            primaryText: styles.alignLeft,
            secondaryText: styles.alignLeft,
            tertiaryText: styles.alignLeft,
          }}
          divider
          centerElement={{
            primaryText: 'میانگین مخارج روزانه',
            secondaryText: `${-this.expenseAvg(this.recentWeekList(this.props.list), 7)}`,
          }}
        />
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
  emptyState: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  emptyStateDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: COLOR.grey700,
  },
});
