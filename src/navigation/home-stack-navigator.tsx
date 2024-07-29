import { HomeStackParamList } from "@/navigation/types"
import EditTaskScreen from "@/screens/edit-task-screen"
import HomeScreen from "@/screens/home-screen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="EditTask" component={EditTaskScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator