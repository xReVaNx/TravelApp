import { ScrollView, StyleSheet } from "react-native";
import ArrowLink from "../components/ArrowLink";
import Carousel from "../components/Carousel";
import TravelCard from "../components/TravelCard";
import { incommingTravels } from "../data/incommingTravelsData";
import { lastTravels } from "../data/lastTravelsData";
import AddTravelCard from "../components/AddTravelCard";
import AddTravelModal from "../components/AddTravelModal";
import {useState} from "react";


export default function Overview({ navigation }) {
    const [addTravelModalOpen, setAddTravelModalOpen] = useState<boolean>(false);
    return (
        <ScrollView style={styles.container}>
            <ArrowLink content={'Nadchodzące podróże'} onPress={() => navigation.navigate('Incomming Travels')} />
            <Carousel>
                <AddTravelCard onPress={() => setAddTravelModalOpen(true)}/>
                {incommingTravels.map((travel, index) => (
                    <TravelCard key={index} id={travel.id} city={travel.city} image={travel.image} />
                ))}
            </Carousel>
            <ArrowLink content={'Ostatnie podróże'} onPress={() => navigation.navigate('Last Travels')} />
            <Carousel>
                {lastTravels.map((travel, index) => (
                    <TravelCard key={index} id={travel.id} city={travel.city} image={travel.image} />
                ))}
            </Carousel>
            <AddTravelModal isOpen={addTravelModalOpen} onClose={() => setAddTravelModalOpen(false)}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingLeft: 20
    },
})