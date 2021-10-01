import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'



const { width, height } = Dimensions.get("screen");
const SIZE = width - 75;
//color: "#FBFCFE",
//     DesciriptionColor: "#A9A9A9",
//     title: "Prepare for the",
//     titlecolor: "#64B3FD",
//     subTitle: "RealWorld",
//     ImageSubTitle: require("./assets/Building.png"),
//     description:
//       "We'll show you exactly what to do to make your dream job a reality",
//     picture: require("./assets/Uncle.png"),
export default function Screen_3() {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/Uncle.png")} />

            <View style={styles.containerTitle}>
                <Text style={styles.title}>Prepare for the</Text>
            </View>

            <View style={styles.conatinerSubtitle}>
                <Text style={styles.subTitle}>RealWorld</Text>
                <Image style={styles.imageNinja} source={require('../assets/Building.png')} />
            </View>

            <View style={styles.containerdiscription}>
                <Text style={styles.description}>We'll show you exactly what to do to make your dream job a reality</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,=> left=0 ,right=0,top=0,bottom=0
        // padding: 75,
        // paddingTop: 150,",
        justifyContent: "space-around",
    },

    image: {
        width: SIZE,
        height: SIZE,
        marginTop: "25%",
        alignSelf: "center",
    },
    containerTitle: {
        height: 22,
        width: 133,
        left: 34,
        marginTop: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: "700",
        color: "#64B3FD",
        fontStyle: "normal",
        lineHeight: 21.77,
    },
    conatinerSubtitle: {
        left: 34,
        width: 212,
        height: 57,
        flexDirection: "row",
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 40,
        fontWeight: "700",
        color: "#193853",
        fontStyle: "normal",
    },
    imageNinja: {
        height: 40,
        width: 40,
        margin: 5,
    },
    containerdiscription: {
        height: 84,
        width: 229,
        left: 34,
    },
    description: {
        fontSize: 15,
        letterSpacing: 0.5,
        lineHeight: 21.25,
        fontWeight: "400",
        color: "#A9A9A9",
        fontFamily: "Roboto",
    },
})
