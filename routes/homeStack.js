import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import homeScreen from '../screens/homeScreen';
import settingsScreen from '../screens/settingsScreen';
import welcomeScreen from '../screens/welcomeScreen'


const screens = {
    WelcomeScreen: {
        screen: welcomeScreen,
        navigationOptions: {
            headerShown: false,
            title: 'Welcome!'
        }
    },
    HomeScreen: {
        screen: homeScreen,
        navigationOptions: {
            title: 'Your Home Screen'
        }

    },
    SettingsScreen: {
        screen: settingsScreen,
        navigationOptions: {
            title: 'Settings'
        }
    },
    
    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
