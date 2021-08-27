import React, { useEffect, useState, useRef } from "react"
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
    Animated,
} from "react-native"

// Import Assets
import Song from "../../Data/Data"

// Import Constants
import { RFValue, Colors } from "../../Data/Utils/constants"

// Import Components
import SliderMusic from "../SliderMusic/SliderMusic"
// import TrackPlayer, {
//     Capability,
//     Event,
//     RepeatMode,
//     State,
//     usePlaybackState,
//     useProgress,
//     useTrackPlayerEvents,
// } from "react-native-track-player"

const { width, height } = Dimensions.get("window")

// const setupPlay = async () => {
//     try {
//         await TrackPlayer.setupPlayer()
//         await TrackPlayer.add(Song)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const togglePlayBack = async (playbackState) => {
//     const currentTrack = await TrackPlayer.getCurrentTrack()

//     if (currentTrack === null) {
//         if (playbackState === State.Paused) {
//             await TrackPlayer.play()
//         } else {
//             await TrackPlayer.pause()
//         }
//     }
// }

const MusicImages = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const [songIndex, setSongIndex] = useState(0)
    const songSlider = useRef(null)
    // const playbackState = usePlaybackState()

    const skipNext = () => {
        songSlider.current.scrollToOffset({ offset: (songIndex + 1) * width })
    }

    const skipToPrevious = () => {
        songSlider.current.scrollToOffset({ offset: (songIndex - 1) * width })
    }

    useEffect(() => {
        // setupPlay()

        scrollX.addListener(({ value }) => {
            const index = Math.round(value / width)
            setSongIndex(index)
        })

        return () => {
            scrollX.removeAllListeners()
        }
    }, [])

    const RenderSong = ({ index, item }) => {
        return (
            <Animated.View style={styles.containerList}>
                <View style={styles.containerImage}>
                    <Image source={item.image} style={styles.Images} />
                </View>
            </Animated.View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ width: width }}>
                <Animated.FlatList
                    ref={songSlider}
                    data={Song}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderSong}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { x: scrollX },
                                },
                            },
                        ],
                        { useNativeDriver: true },
                    )}
                />
            </View>

            <View style={styles.containerTitle}>
                <Text style={styles.title}>{Song[songIndex].title}</Text>
                <Text style={styles.artist}>{Song[songIndex].artist}</Text>
            </View>

            <View style={styles.containerSlider}>
                <SliderMusic
                    funtionsNext={skipNext}
                    funtionPrevious={skipToPrevious}
                    // play={togglePlayBack}
                    // state={State}
                    // playbackState={playbackState}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: RFValue(10),
    },
    containerList: {
        width: width,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: RFValue(10),
    },
    containerSlider: {
        // paddingBottom: RFValue(50),
    },
    containerImage: {
        width: RFValue(300),
        height: RFValue(340),
        marginBottom: RFValue(10),
        shadowColor: "#CCC",
        shadowOffset: {
            width: RFValue(10),
            height: RFValue(10),
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.85,
        elevation: 5,
    },
    containerTitle: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: RFValue(16),
        fontWeight: "600",
        color: Colors.colorWhite,
    },
    artist: {
        fontSize: RFValue(14),
        fontWeight: "200",
        color: Colors.colorWhite,
    },
    Images: {
        width: "100%",
        height: "100%",
        borderRadius: RFValue(15),
    },
})

export default MusicImages
