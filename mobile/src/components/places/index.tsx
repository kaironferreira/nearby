import { Text, useWindowDimensions, View } from "react-native";
import { s } from "./styles";
import Place, { PlaceProps } from "../place";
import { useRef } from "react";
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { router } from "expo-router";

type Props = {
    data: PlaceProps[]
}
export default function Places({ data }: Props) {
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)
    const snapPoints = {
        min: 278,
        max: dimensions.height - 128
    }
    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Place
                        data={item}
                        onPress={() => router.navigate(`../market/${item.id}`)}
                    />
                )}
                contentContainerStyle={s.content}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <Text style={s.tittle}>Explore locais perto de você</Text>}
            />
        </BottomSheet>
    )
}