import { ScrollView, StyleSheet } from "react-native";
import TravelCard from '../components/TravelCard';
import { lastTravels } from "../data/lastTravelsData";

export default function LastTravels() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {lastTravels.map((travel, index) => (
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