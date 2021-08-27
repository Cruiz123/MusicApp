import React from "react"
import { View, Text, StatusBar, StyleSheet } from "react-native"

// Import Container
import Container from "./Components/Container/Container"
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer"

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <MusicPlayer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default App
