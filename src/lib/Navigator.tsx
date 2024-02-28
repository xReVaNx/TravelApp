import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from "../screens/HomeScreen";
import Icon from 'react-native-vector-icons/FontAwesome5'
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

export default function StackNavigator() {
    return (
        <>
            <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#000', tabBarInactiveTintColor: '#ababab' }}>
                <Tab.Screen name={'Home'} component={HomeScreen} options={{ unmountOnBlur: true, headerShown: false, tabBarIcon: ({ color, size }) => (<Icon name={'home'} color={color} size={size} />) }} />
                <Tab.Screen name={'Map'} component={MapScreen} options={{
                    tabBarIcon: ({ color, size }) =>
                        (<Icon name={'map'} color={color} size={size} />)
                }} />
            </Tab.Navigator>
        </>
    )
}