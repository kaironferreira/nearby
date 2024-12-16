import { colors } from "@/styles/colors";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler"

import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"
import { Loading } from "@/components/loading";

export default function Layout() {
    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold
    })

    if (!fontLoaded) {
        return <Loading />
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.gray[100] }
                }}
            />
        </GestureHandlerRootView>
    )
}