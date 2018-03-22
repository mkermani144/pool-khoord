import React, { Component } from 'react';
import {
  Root,
  Container,
  Toast
} from 'native-base';
import * as Expo from 'expo';

import AppBar from './AppBar';
import MainPart from './MainPart';
import FAB from './FAB';
import NewItem from './NewItem';
import { AsyncStorage } from 'react-native';

export default class App extends Component {
  state = {
    newItemPageOpen: false,
    newItemType: 1,
    isReady: false,
    currentTitle: '',
    currentValue: '',
    list: [],
    titleError: '',
    valueError: '',
  };
  toggleNewItemPage = type => this.setState({ newItemPageOpen: true, newItemType: type });
  onPressBack = () => this.setState({ newItemPageOpen: false });
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
        await AsyncStorage.setItem(`${Date.now()}`, JSON.stringify(newItem));
        this.setState(prev => ({
          list: [...prev.list, newItem],
        }));
        this.onPressBack();
        Toast.show({
          text: this.state.newItemType === 1 ? 'درآمد با موفقیت افزوده شد' : 'هزینه با موفقیت افزوده شد',
          position: 'bottom',
        });
      } catch (error) {
        console.error(error);
        this.onPressBack();
      }
    }
  }
  async loadList() {
    const objectListKeys = await AsyncStorage.getAllKeys();
    const objectList = await AsyncStorage.multiGet(objectListKeys);
    const list = objectList.map(value => JSON.parse(value[1]));
    this.setState({ list });
  }
  componentWillMount() {
    this.loadFonts();
    this.loadList();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Root>
        <Container>
          <AppBar
            newItemPageOpen={this.state.newItemPageOpen}
            newItemType={this.state.newItemType}
            onPressBack={this.onPressBack}
            onConfirm={this.addCurrent}
          />
          {!this.state.newItemPageOpen ?
            <MainPart /> :
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
        </Container>
      </Root>
    );
  }
}
