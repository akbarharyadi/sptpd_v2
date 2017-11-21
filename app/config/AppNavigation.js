import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screen/LoginScreen'
import { Colors, NavigationStyles } from '../themes';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
			title: 'Login',
      header: null
		})
  }
}, {
  // Default config for all screens
  headerMode:'screen',
  navigationOptions: ({ navigation }) => ({
    title: navigation.state && navigation.state.params && navigation.state.params.title,
    headerTintColor: Colors.black,
    headerStyle: NavigationStyles.header

  })

})

export default PrimaryNav
