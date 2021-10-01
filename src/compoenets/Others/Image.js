import React from 'react'
import {Image, StyleSheet, Text, View } from 'react-native'

export default function Image({image}) {
    return (
        <View style={styles.imagecontainer}>
         <Image source={image} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({})
