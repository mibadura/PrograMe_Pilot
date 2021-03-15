import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native';
import { mainStyles } from '../styles/mainStyles';

export default function ButtonCard(props) {
    return (
        <View style={mainStyles.cardContainer}>
            <View style={mainStyles.cardContent}>
                { props.children }
            </View> 
        </View>
    )
}