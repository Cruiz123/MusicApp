import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

// Import Component
import Slider from "@react-native-community/slider"
import Icons from "react-native-vector-icons/Ionicons"

// Import Constants
import { Colors, RFValue } from "../../Data/Utils/constants"

const SliderMusic = ({
    funtionsNext,
    funtionPrevious,
    play,
    state,
    playbackState,
}) => {
    return (
        <View style={styles.container}>
            <Slider
                style={styles.containerProgress}
                value={10}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor={Colors.colorWhite}
                minimumTrackTintColor={Colors.colorSecondary}
                maximumTrackTintColor={Colors.colorSecondary}
                onSlidingComplete={() => {}}
            />

            <View style={styles.progressLabelContainer}>
                <Text style={styles.progressLabel}>0:00</Text>
                <Text style={styles.progressLabel}>3:55</Text>
            </View>

            <View style={styles.musicControlls}>
                <TouchableOpacity onPress={() => funtionPrevious()}>
                    <Icons
                        name="play-skip-back-outline"
                        size={RFValue(35)}
                        color={Colors.colorWhite}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => play(playbackState)}>
                    <Icons
                        name={"ios-play-circle"}
                        size={RFValue(75)}
                        color={Colors.colorWhite}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => funtionsNext()}>
                    <Icons
                        name="play-skip-forward-outline"
                        size={RFValue(35)}
                        color={Colors.colorWhite}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerProgress: {
        width: RFValue(350),
        height: RFValue(40),
        marginTop: RFValue(20),
        flexDirection: "row",
    },
    progressLabelContainer: {
        width: RFValue(320),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    progressLabel: {
        color: Colors.colorWhite,
        fontSize: RFValue(16),
    },
    musicControlls: {
        justifyContent: "center",
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-between",
        marginTop: RFValue(10),
        alignItems: "center",
    },
})

export default SliderMusic
