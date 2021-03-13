import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { mainStyles } from '../styles/mainStyles'


export default function Welcome({ navigation }) {

  const pressHandler = () => {
    console.log("welcome pressed");
    navigation.navigate('HomeScreen');
  }

    return (
      <View style={mainStyles.welcomeContainer}>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={mainStyles.logo}>PrograMe</Text>
          <Text style={mainStyles.slogan}>Your customizable IR Blaster.</Text>
        </TouchableOpacity>
      </View>
    );
  }