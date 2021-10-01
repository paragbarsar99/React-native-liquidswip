import React from "react"
import {Image, StyleSheet, Text, View, Dimensions } from "react-native"

const Height = Dimensions.get("window").height
const Width = Dimensions.get("window").width

export default function Loading() {
	return (
		<View style={styles.container}>
		  <Image style={styles.image} source={require('../assets/Splash.png')}/>
        </View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#64B3FD",
        height:Height,
        width:Width
	},
	image: {
		alignSelf: "center",
		height: 97,
		width: 154,
		marginTop: Height / 2,
	},
})
