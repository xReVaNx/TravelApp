import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import Checkbox from "./Checkbox";
import React, {useState} from "react";
import Cost from "./Cost";

export default function ThingToDo({children}: React.PropsWithChildren) {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const toggleIsCheked = (): void => {
        setIsChecked(!isChecked);
    }

    return (
        <TouchableWithoutFeedback onPress={toggleIsCheked}>
            <View style={styles.container}>
                <Checkbox checked={isChecked}/>
                <Text style={styles.text}>{children}</Text>
                <Cost>200</Cost>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
})