import AppStackNavigator from "@/navigation/app-stack-navigator";
import AuthStackNavigator from "@/navigation/auth-stack-navigator";
import useUserGlobalStore from "@/store/useUserGlobalStore";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";

const Navigation = () => {
    // const user = true
    const { user, updateUser } = useUserGlobalStore();

    console.log('user', JSON.stringify(user, null, 2));

    useEffect(() => {
        updateUser({
            email: "quyenvu.uzumaki@gmail.com",
            name: "Quyen Vu",
        })
        return () => { }
    }, [])
    return (
        <NavigationContainer>
            {user ? <AppStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}

export default Navigation