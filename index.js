import "react-native-gesture-handler"
import { AppRegistry } from "react-native"
import App from "./Src/App"
import { name as appName } from "./app.json"
// import TrackPlayer from "react-native-track-player"

AppRegistry.registerComponent(appName, () => App)

// TrackPlayer.registerPlaybackService(() => require("./services"))
