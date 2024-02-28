import { ScrollView, StyleSheet } from "react-native";
import React from "react";

const Carousel = ({ children }: React.PropsWithChildren) => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} horizontal={true} showsHorizontalScrollIndicator={false}>
            {children}
        </ScrollView>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 16,
        paddingRight: 16
    }
})