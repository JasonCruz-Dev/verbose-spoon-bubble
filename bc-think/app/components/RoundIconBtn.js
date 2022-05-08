import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';


const RoundIconBtn = ({antIconName, size, color, style}) => {
  return (
    <AntDesign 
    name={antIconName} 
    size={size || 24} 
    color={color || colors.LIGHT} 
    style={[styles.icon, {...style}]}
    />
  );
};

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.PRIMARY,
        padding: 15,
        borderRadius: 50,
        elevation: 5
    },
})

export default RoundIconBtn

