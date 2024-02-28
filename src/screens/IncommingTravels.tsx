import { View, Text, ScrollView, StyleSheet } from "react-native";
import { incommingTravels } from "../data/incommingTravelsData"; import TravelCard from "../components/TravelCard";

export default function IncommingTravels() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {incommingTravels.map((travel, index) => (
                <TravelCard key={index} id={travel.id} image={travel.image} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 40
    }
})