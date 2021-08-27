import { Platform, Dimensions, StatusBar } from "react-native"

// Import Funtions
import { isIphoneX } from "react-native-iphone-x-helper"

const { height, width } = Dimensions.get("window")
const standardLength = width > height ? width : height
const offset =
    width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight // iPhone X style SafeAreaView size in portrait

const deviceHeight =
    isIphoneX() || Platform.OS === "android"
        ? standardLength - offset
        : standardLength

// guideline height for standard 5" device screen is 680
export const RFValue = (fontSize = 0, standardScreenHeight = 680) => {
    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
    return Math.round(heightPercent)
}

export const Colors = {
    colorMain: "#222831",
    colorBlack: "#1d1d1d",
    colorSecondary: "#9ed3da",
    colorYellow: "#ffcb08",
    colorRed: "#c0392b",
    colorGreen: "#33d9b2",
    colorWhite: "#FFFFFF",
}
