import React from "react"
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from "react-native"

// Import Components
import Icons from "react-native-vector-icons/Ionicons"
import MusicImages from "../MusicImages/MusicImages"

// Import Constants
import { Colors, RFValue } from "../../Data/Utils/constants"

const MusicPlayer = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subcontainer}>
                <MusicImages />
            </View>

            <View style={styles.containerIcons}>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <Icons
                            name="heart-outline"
                            size={RFValue(30)}
                            color={Colors.colorWhite}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icons
                            name="repeat"
                            size={RFValue(30)}
                            color={Colors.colorWhite}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icons
                            name="share-outline"
                            size={RFValue(30)}
                            color={Colors.colorWhite}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icons
                            name="ellipsis-horizontal"
                            size={RFValue(30)}
                            color={Colors.colorWhite}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorMain,
    },
    subcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerIcons: {
        borderTopColor: "#393E46",
        borderTopWidth: 1,
        width: "100%",
        alignItems: "center",
        paddingVertical: RFValue(10),
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "85%",
    },
})

export default MusicPlayer
