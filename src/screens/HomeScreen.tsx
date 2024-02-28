import { createStackNavigator } from "@react-navigation/stack";
import IncommingTravels from "./IncommingTravels";
import Overview from "./Overview";
import LastTravels from "./LastTravels";
import Travel from "./Travel";

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Overview">
            <Stack.Screen name='Overview' component={Overview} />
            <Stack.Screen name='Incomming Travels' component={IncommingTravels} />
            <Stack.Screen name='Last Travels' component={LastTravels} />
            <Stack.Screen name='Travel' component={Travel} options={({ route }: any) => ({ title: route.params.city })} />
        </Stack.Navigator>
    )
}