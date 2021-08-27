import React from "react"
import { View, Text } from "react-native"

// Import Component
import MusicPlayer from "../../Components/MusicPlayer/MusicPlayer"

// Import Hooks
import useStyles from "../../Hooks/useStyles.hook"

// Import Styles
import { HomeStyles } from "../../Styles/Views/index"

const Home = () => {
    const classes = useStyles(HomeStyles)
    return (
        <View styles={classes.container}>
            <MusicPlayer />
        </View>
    )
}

export default Home
