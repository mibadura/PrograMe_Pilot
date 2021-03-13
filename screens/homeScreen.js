import React from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { mainStyles } from '../styles/mainStyles'

export default function homeScreen({ navigation }) {

    const [buttons, setButtons] = useState([
        {title: 'Button #1', code: '1234', key: '1'},
        {title: 'Button #2', code: 'unodostres', key: '2'},
        {title: 'Button #3', code: '9876', key: '3'},
        {title: 'Button #4', code: '1x2x3', key: '4'},
    ]);

    return (
        <View style={mainStyles.homeScreenContainer}>
            <FlatList
                data={buttons}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen', item)}>
                        <Text style={mainStyles.homeScreenText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
  }