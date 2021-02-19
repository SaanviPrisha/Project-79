import React from 'react';
import { Image } from 'react-native'
import LoginScreen from './Screens/SignUpLoginScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import ExchangeScreen from './Screens/ExchangeScreen'
import HomeScreen from './Screens/HomeScreen';


export default class App extends React.Component {
  render() {
    return (
        <Container />
    );
  }
}

const Tab = createBottomTabNavigator({
  Exchange: {screen: ExchangeScreen},
  Home: {screen: HomeScreen},
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: () => {
      var routeName = navigation.state.routeName
      if(routeName == "Exchange") {
        return(
          <Image style={{width: 40,height: 40}}source={require('./assets/Donate.png')}></Image>
        )
      } else if(routeName == "Home") {
        return(
          <Image style={{width: 40,height: 40}} source={require('./assets/Request.png')}></Image>
        )
      }
    }
  }) 
}

)
const  Switch = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  tabNavigator: { screen: Tab}
})
const Container = createAppContainer(Switch)
