import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native';
import { mainStyles } from '../styles/mainStyles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={mainStyles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={mainStyles.icon} />
            <View>
                <Text style={mainStyles.headerText}> {title} </Text>
            </View>
        </View>
    )
}