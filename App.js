import React, { Component } from 'react';
import { Container } from 'native-base';
import * as Expo from 'expo';

import AppBar from './AppBar';
import MainPart from './MainPart';
import FAB from './FAB';
import NewItem from './NewItem';

export default class App extends Component {
  state = {
    newItemPageOpen: false,
    newItemType: 1,
    isReady: false,
  };
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  toggleNewItemPage = type => this.setState({ newItemPageOpen: true, newItemType: type });
  onPressBack = () => this.setState({ newItemPageOpen: false });
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <AppBar
          newItemPageOpen={this.state.newItemPageOpen}
          newItemType={this.state.newItemType}
          onPressBack={this.onPressBack}
        />
        {!this.state.newItemPageOpen ?
          <MainPart /> :
          <NewItem />
        }
        {!this.state.newItemPageOpen &&
          <FAB onPress={this.toggleNewItemPage} />
        }
      </Container>
    );
  }
}
