import { ScrollView, Text, Image, StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { incommingTravels } from "../data/incommingTravelsData";
import { lastTravels } from "../data/lastTravelsData";
import Checkbox from "../components/Checkbox";
import ThingToDo from "../components/ThingToDo";

export default function Travel() {

    const router: any = useRoute();

    const travel = incommingTravels.find(travel => travel.id === router.params.travelId) || lastTravels.find(travel => travel.id === router.params.travelId)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={{ uri: travel.image }} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{travel.city}</Text>
                <Text>{`${travel.startDate.toLocaleDateString()} - ${travel.endDate.toLocaleDateString()}`}</Text>
            </View>
            <View style={styles.listContainer}>
                <ThingToDo>Sagrada La Famillia</ThingToDo>
                <ThingToDo>La Bouqiera</ThingToDo>
                <ThingToDo>Morze</ThingToDo>
                <ThingToDo>Coś tam</ThingToDo>
                <ThingToDo>I jescze tam</ThingToDo>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '30%',
        resizeMode: 'cover',
        marginBottom: 5
    },
    titleContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 25
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    listContainer: {
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
    }
})