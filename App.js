import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from "./src/lib/Navigator";

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
}


