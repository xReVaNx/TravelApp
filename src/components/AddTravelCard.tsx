import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

interface AddTravelCardProps {
    onPress: () => void;
}

export default function AddTravelCard({onPress}: AddTravelCardProps) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <FontAwesome style={styles.icon} name={'plus'}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        backgroundColor: '#3d92fd',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 50,
        color: '#fff'
    }
})