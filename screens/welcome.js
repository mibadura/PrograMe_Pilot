import React from 'react';
import { Text, View } from 'react-native';
import { mainStyles } from '../styles/mainStyles'

export default function Welcome() {
    return (
      <View style={mainStyles.welcomeContainer}>
        <Text style={mainStyles.logo}>PrograMe</Text>
        <Text style={mainStyles.slogan}>Your customizable IR Blaster.</Text>
      </View>
    );
  }