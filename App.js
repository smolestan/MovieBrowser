import React from 'react';
import {
  createAppContainer, 
  createStackNavigator, 
  createBottomTabNavigator 
} from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons'
import SearchListScreen from './screens/SearchListScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'
import SettingsScreen from './screens/SettingsScreen'

const MoviesTab = createStackNavigator(
  {
    SearchList: SearchListScreen,
    MovieDetails: MovieDetailsScreen
  },
  {
    initialRouteName: 'SearchList'
  }
)

MoviesTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-search"
      size={25}
      color={tintColor}
    />
  )
}

SettingsScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-options"
      size={25}
      color={tintColor}
    />
  )
}

const AppNavigator = createBottomTabNavigator(
  {
    Search: MoviesTab,
    Settings: SettingsScreen
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {  
  render() {
    return (
      <AppContainer />
    )
  }
}