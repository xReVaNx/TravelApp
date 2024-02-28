import { View, StyleSheet } from "react-native";

interface CheckboxProps {
    checked?: boolean;
}

export default function Checkbox({checked}: CheckboxProps) {

    const checkboxStyle = checked ? [styles.checked, styles.container] : styles.container;

    return (
        <View style={checkboxStyle}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000'
    },
    checked: {
        backgroundColor: 'red',
    }
})