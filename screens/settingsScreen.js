import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { mainStyles } from '../styles/mainStyles'

export default function SettingsScreen({ navigation }) {
    return (
        <View style={mainStyles.settingsScreenContainer}>
            <Text style={mainStyles.settingsScreenText}>{navigation.getParam('title')}</Text>
            <Text style={mainStyles.settingsScreenText}>Code: {navigation.getParam('code')}</Text>        
        </View>
    );
  }