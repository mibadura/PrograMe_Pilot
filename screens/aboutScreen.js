import React from 'react';
import { Text, View } from 'react-native';

import { mainStyles } from '../styles/mainStyles'

export default function aboutScreen({ navigation }) {



    return (
        <View style={mainStyles.homeScreenContainer}>
            <Text>About the app... there's nothing here!</Text>
        </View>
    );
  }