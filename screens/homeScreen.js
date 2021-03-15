import React from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { mainStyles } from '../styles/mainStyles';
import ButtonCard from '../shared/buttonCard';
import { MaterialIcons } from '@expo/vector-icons';

export default function homeScreen({ navigation }) {

    const [buttons, setButtons] = useState([
        {title: 'Button #1', code: '1234', key: '1'},
        {title: 'Button #2', code: 'unodostres', key: '2'},
        {title: 'Button #3', code: '9876', key: '3'},
        {title: 'Button #4', code: '1x2x3', key: '4'},
        {title: 'Button #5', code: 'nr5', key: '5'},
        {title: 'Button #6', code: 'nr6', key: '6'},
        {title: 'Button #7', code: 'nr7', key: '7'},
    ]);

    return (
        <View style={mainStyles.homeScreenContainer}>
            <View style={mainStyles.secondHeader}>
                <MaterialIcons name="apps" size={28} color="black" />
                <MaterialIcons name="border-all" size={28} color="black" />
            </View>
            <FlatList
                numColumns={1}
                data={buttons}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen', item)}>
                        <ButtonCard>
                            <Text adjustsFontSizeToFit style={mainStyles.homeScreenText}>{ item.title }</Text>
                        </ButtonCard>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
  }