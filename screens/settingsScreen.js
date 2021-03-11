import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { mainStyles } from '../styles/mainStyles'

export default function Welcome() {
    return (
        <View style={mainStyles.settingsScreenContainer}>
            <Text>SETTINGS Screen.</Text>        
        </View>
    );
  }