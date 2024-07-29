import { CategoriesStackParamList } from "@/navigation/types"
import CategoriesScreen from "@/screens/categories-screen"
import CategoryScreen from "@/screens/category-screen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator<CategoriesStackParamList>()

const CategoriesStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="Category" component={CategoryScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default CategoriesStackNavigator