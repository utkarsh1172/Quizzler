import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home';
import Quiz from '../screens/Quiz'

const Stack = createStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Quiz' component={Quiz} />

        </Stack.Navigator>
    )
}