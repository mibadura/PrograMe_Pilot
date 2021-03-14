import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import aboutScreen from '../screens/aboutScreen';
import Header from '../shared/header';
import React from 'react';
import { mainStyles } from '../styles/mainStyles';
import { vintagePalette } from '../styles/mainStyles'

const screens = {
    AboutScreen: {
        screen: aboutScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About' />
            }
        }
    },  
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: { backgroundColor: vintagePalette.Artichoke, height: 60}
    }
});

export default AboutStack;
