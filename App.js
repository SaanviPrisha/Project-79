import React from 'react';
import { Image } from 'react-native'
import LoginScreen from './Screens/SignUpLoginScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DonateScreen from './Screens/ExchangeScreen'
import RequestScreen from './Screens/HomeScreen';


export default class App extends React.Component {
  render() {
    return (
        <Container />
    );
  }
}

const Tab = createBottomTabNavigator({
  Donate: {screen: DonateScreen},
  Request: {screen: RequestScreen},
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: () => {
      var routeName = navigation.state.routeName
      if(routeName == "Donate") {
        return(
          <Image style={{width: 40,height: 40}}source={require('./assets/favicon.png')}></Image>
        )
      } else if(routeName == "Request") {
        return(
          <Image style={{width: 40,height: 40}} source={require('./assets/favicon.png')}></Image>
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