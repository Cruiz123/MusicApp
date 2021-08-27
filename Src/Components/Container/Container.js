import React from "react"
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"

// Import Constanst
import { Colors, RFValue } from "../../Data/Utils/constants"

//Import Component
import MusicPlayerIcons from "../../Components/MusicPlayer/MusicPlayer"

const Container = () => {
    return <SafeAreaView style={styles.container}></SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorMain,
        position: "relative",
    },
})

export default Container
