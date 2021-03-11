import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import mainScreen from '../screens/mainScreen';
import settingsScreen from '../screens/settingsScreen';

const screens = {
    HomeScreen: {
        screen: mainScreen
    },
    SettingsScreen: {
        screen: settingsScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
