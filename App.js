import React, { Component } from 'react';
import {
  AsyncStorage,
  I18nManager,
  StyleSheet,
  ToastAndroid,
  UIManager,
  View,
} from 'react-native';
import {
  Container,
  COLOR,
  ThemeProvider,
} from 'react-native-material-ui';
import * as Expo from 'expo';
import moment from 'moment-jalaali';

import AppBar from './AppBar';
import MainPart from './MainPart';
import FAB from './FAB';
import NewItem from './NewItem';

const uiTheme = {
  palette: {
    accentColor: COLOR.yellow600,
  },
};

moment.loadPersian({
  dialect: 'persian-modern',
  usePersianDigits: true,
});

export default class App extends Component {
  state = {
    newItemPageOpen: false,
    newItemType: 1,
    currentTitle: '',
    currentValue: '',
    list: [],
    titleError: '',
    valueError: '',
  };
  toggleNewItemPage = type => this.setState({ newItemPageOpen: true, newItemType: type });
  onPressBack = () => this.setState({
    newItemPageOpen: false,
    currentTitle: '',
    currentValue: '',
    titleError: '',
    valueError: '',
  });
  updateCurrentTitle = newTitle =>
    newTitle.length ?
    this.setState({ currentTitle: newTitle, titleError: '' }) :
    this.setState({ titleError: 'لطفا عنوان را وارد کنید' });
  updateCurrentValue = newValue => 
    newValue.match(/^\d+$/) ? 
    this.setState({ currentValue: newValue, valueError: '' }) :
    this.setState({ valueError: 'لطفا یک عدد وارد کنید' });
  addCurrent = async () => {
    if (!this.state.currentTitle) {
      this.setState({ titleError: 'لطفا عنوان را وارد کنید' });
    }
    if (!this.state.currentValue) {
      this.setState({ valueError: 'لطفا یک عدد وارد کنید' });
    }
    if (this.state.currentTitle && this.state.currentValue.match(/^\d+$/)) {
      try {
        const newItem = {
          title: this.state.currentTitle,
          value: this.state.newItemType * this.state.currentValue,
        };
        const now = Date.now();
        await AsyncStorage.setItem(`${now}`, JSON.stringify(newItem));
        this.setState(prev => ({
          list: [...prev.list, [now, newItem]],
        }));
        this.onPressBack();
        ToastAndroid.show(
          this.state.newItemType === 1 ? 'درآمد با موفقیت افزوده شد' : 'هزینه با موفقیت افزوده شد',
          ToastAndroid.SHORT,
        );
      } catch (error) {
        console.error(error);
        this.onPressBack();
      }
    }
  }
  async loadList() {
    const objectListKeys = await AsyncStorage.getAllKeys();
    const objectList = await AsyncStorage.multiGet(objectListKeys);
    const list = objectList.map(value => [+value[0], JSON.parse(value[1])]);
    this.setState({ list });
    
  }
  componentWillMount() {
    I18nManager.forceRTL(true);
    UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);
    this.loadList();
  }
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          <AppBar
            newItemPageOpen={this.state.newItemPageOpen}
            newItemType={this.state.newItemType}
            onPressBack={this.onPressBack}
            onConfirm={this.addCurrent}
          />
          {!this.state.newItemPageOpen ?
            <MainPart list={this.state.list} /> :
            <NewItem
              updateCurrentTitle={this.updateCurrentTitle}
              updateCurrentValue={this.updateCurrentValue}
              titleError={this.state.titleError}
              valueError={this.state.valueError}
            />
          }
          {!this.state.newItemPageOpen &&
            <FAB onPress={this.toggleNewItemPage} />
          }
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
