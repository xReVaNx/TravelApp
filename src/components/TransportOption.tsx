import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect, useState} from "react";

type TransportType = 'walking' | 'car' | 'plane' | 'ship' | 'bicycle' | 'motorcycle' | 'bus' | 'train';

export interface TransportOptionProps {
    type: TransportType;
    selected?: boolean;
    onPress?: () => void;
}

interface StyleState {
    containerStyle: Object;
    iconStyle: Object;
}

export default function TransportOption ({type, onPress, selected}: TransportOptionProps) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container, selected ? styles.containerActive : styles.containerNotActive]}>
            <FontAwesome style={selected ? styles.iconActive : styles.icon} size={30} name={type}/>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    containerNotActive: {
        backgroundColor: '#adadad',
    },
    icon: {
        color: '#000',
    },
    containerActive: {
        backgroundColor: '#3d92fd'
    },
    iconActive: {
        color: '#fff'
    }
})