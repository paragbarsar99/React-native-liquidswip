import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { log } from 'react-native-reanimated';

const { width, height } = Dimensions.get("screen");
const SIZE = width - 75;

//color: "#64B3FD",
//     DesciriptionColor: "#FBFCFE",
//     title: "How can we",
//     titlecolor: "#FBFCFE",
//     subTitle: "Help",
//     ImageSubTitle: require("./assets/Ninja.png"),
//     description:
//       "Get ready for your transition from school to college and finally to a perfect career with us!",
//     picture: require("./assets/Laptop.png"),
//   },
export default function Screen_4({ navigation }) {

    const Navigation = useNavigation()

    setTimeout(() => {
        Navigation.navigate("PhoneEnter")
    }, 4000);

    return (
        <View>
            <Image style={styles.image} source={require("../assets/Laptop.png")} />

            <View style={styles.containerTitle}>
                <Text style={styles.title}>How can we</Text>
            </View>

            <View style={styles.conatinerSubtitle}>
                <Text style={styles.subTitle}>Help</Text>
                <Image style={styles.imageNinja} source={require('../assets/Ninja.png')} />
            </View>

            <View style={styles.containerdiscription}>
                <Text style={styles.description}>Get ready for your transition from school to college and finally to a perfect career with us!</Text>
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
        color: "#FBFCFE",
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
        color: "#FBFCFE",
        fontFamily: "Roboto",
    },
    
})
