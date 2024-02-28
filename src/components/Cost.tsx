import React from "react";
import {StyleSheet, View, Text} from "react-native";

interface CostProps {
    children: string;
}

export default function Cost({children}: React.PropsWithChildren) {
    return (
        <View style={styles.container}>
            <View style={styles.cost}>
                <Text style={styles.dollar}>$</Text>
                <Text style={styles.value}>{children}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
    },
    cost: {
        borderRadius: 20,
        backgroundColor: '#2AD200',
        width: 65,
        height: 20,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10
    },
    dollar: {
        fontSize: 14,
        color: '#7EF461',
        flex: 1
    },
    value: {
        paddingRight: 10,
        color: '#fff'
    }
})