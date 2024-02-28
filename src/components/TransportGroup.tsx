import {ScrollView, StyleSheet, View} from "react-native";
import React, {Children, ReactElement, useState, forwardRef, useImperativeHandle} from "react";

interface TransportGroupProps {
    children: ReactElement | Array<ReactElement>;
    onChange: (value: string) => void;
}

const TransportGroup =  forwardRef(({children, onChange}: TransportGroupProps, ref) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionPress = (option: string) => {
        setSelectedOption(option);
        onChange(option);
    }

    useImperativeHandle(ref, () => ({
        handleOptionPress,
    }));

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollview} contentContainerStyle={styles.transportContainer}>
            {Children.map(children, (child) =>
                React.cloneElement(child, {
                    onPress: () => handleOptionPress(child.props.type),
                    selected: selectedOption === child.props.type,
                })
            )}
        </ScrollView>
    )
});

const styles = StyleSheet.create({
    scrollview: {
        width: '75%'
    },
    transportContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 3,
    }
})

export default TransportGroup;