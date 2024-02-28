import {TouchableWithoutFeedback, View, StyleSheet, Text, ViewStyle} from "react-native";
import React from "react";

interface ButtonProps {
    onPress?: () => void;
    children: string;
    style?: ViewStyle;
}

export default function Button({onPress, children, style}: ButtonProps) {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.button, style]}>
                <Text style={styles.content}>
                {children}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 40,
        backgroundColor: '#3d92fd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    content: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})