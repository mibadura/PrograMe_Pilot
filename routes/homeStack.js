import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import homeScreen from '../screens/homeScreen';
import settingsScreen from '../screens/settingsScreen';
import welcomeScreen from '../screens/welcomeScreen';
import Header from '../shared/header';
import React from 'react';
import { vintagePalette } from '../styles/mainStyles'

const screens = {
    
    HomeScreen: {
        screen: homeScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Your Pilot' />
            }
        }

    },
    SettingsScreen: {
        screen: settingsScreen,
        navigationOptions: {
            title: 'Settings'
        }
    },
    WelcomeScreen: {
        screen: welcomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: { backgroundColor: vintagePalette.Artichoke, height: 60}
    }
});

export default HomeStack;
