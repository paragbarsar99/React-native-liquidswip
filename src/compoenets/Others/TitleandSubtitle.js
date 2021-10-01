import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TitleandSubtitle({title,subtitle,imagesubtitle}) {
    return (
        <>
            <View style={styles.containertitle}>
                <Text style={styles.title}></Text>
            </View>

            <View style={styles.container}>
                <Text></Text>
                <Image />
            </View>
        </>
    )
}

const styles = StyleSheet.create({})
