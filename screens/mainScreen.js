import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { mainStyles } from '../styles/mainStyles'

export default function Welcome() {
    return (
        <View style={mainStyles.mainScreenContainer}>
            <Text>The Main Screen.</Text>        
        </View>
    );
  }