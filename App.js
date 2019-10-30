import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from './screens/HomeScreen/Home';
import About from './screens/AboutScreen/About';
import Drawer from './screens/DrawerScreen/Drawer';

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  },
}, {
  initialRouteName: "Home",
  contentComponent: Drawer
});

const AppContainer = createAppContainer(AppDrawerNavigator);

class App extends Component {
  render() {
    return (
      <>
        <AppContainer />
      </>
    )
  }
}

export default App