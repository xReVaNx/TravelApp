import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";

interface ArrowLinkProps {
    content: string;
    onPress?: () => void;
}

const ArrowLink = ({ content, onPress }: ArrowLinkProps) => {
    return (
        <TouchableOpacity style={styles.linkContainer} onPress={onPress}>
            <Text style={styles.content}>{content}</Text>
            <MaterialIcons name={'arrow-forward-ios'} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 2,
        marginBottom: 20,
    },
    content: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default ArrowLink;