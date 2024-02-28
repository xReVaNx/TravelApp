import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

interface TravelCardProps {
    image: string;
    id: number;
    city: string;
}

export default function TravelCard({ image, id, city }: TravelCardProps) {

    const navigation: any = useNavigation();

    const navigateToTravel = () => {
        navigation.navigate('Travel', { travelId: id, city: city })
    }

    return (
        <TouchableWithoutFeedback onPress={navigateToTravel}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} imageStyle={{ borderRadius: 10 }} source={{ uri: image }}>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'linen',
        width: 300,
        height: 200,
        borderRadius: 10,
    },
    image: {
        flex: 1,
    }
})