import React, { useState, useEffect, useMemo } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Lotti from '../utils/lib/LottiLibrary'

import ModelScreen from './ModelScreen'


const { width, height } = Dimensions.get("screen");
const SIZE = width - 75;

export default function PhoneEnter({ navigation }) {
  const [Number, setNumber] = useState(0)
  const [showLoading, setshowLoading] = useState(false)
  const [visibleModel, setVisibileModel] = useState(false)


  useEffect(() => {
    if (showLoading) {
      setTimeout(() => {
        setshowLoading(false)

        navigation.navigate("Otp", {
          number: Number
        })
      }, 2000);
    }
  }, [showLoading])

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          Enter your
        </Text>
      </View>
      <View style={styles.conatinerSubtitle}>
        <Text style={styles.subTitle}>
          Mobile number
        </Text>
        <Text style={styles.subTitle_2}>
          we will send you a One Time Password (OTP)
        </Text>

        <View style={styles.phoneNumberContainer}>
          <Text style={styles.CountryCode}>
            +91
          </Text>

          <TextInput
            style={[styles.PhoneNumber]}
            placeholder="Enter here"
            placeholderTextColor="#C2C3C3"
            onChangeText={text => setNumber(text)}
            value={Number}
            numberOfLines={1}
            maxLength={10}
            onEndEditing={() => setshowLoading(true)}
            keyboardType="phone-pad"
          >
          </TextInput>
        </View>

      </View>
      {
        showLoading
          ?
          <Lotti />
          :
          null
      }

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Aunty.png')} style={styles.image} />
      </View>

      <Text style={styles.login} onPress={() => setVisibileModel(true)}>
        more login options
      </Text>

      <ModelScreen visible={visibleModel} setVisible={setVisibileModel} />

      {/* <Text style={styles.title}>
          Enter your
        </Text>
        <Text style={styles.subTitle}>
          Mobile number
        </Text>
        <Text style={styles.subTitle_2}>
          we will send you a One Time Password (OTP)
        </Text>
      <Image source={require('../assets/Aunty.png')} style={styles.image} />  */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,=> left=0 ,right=0,top=0,bottom=0
    // padding: 75,
    // paddingTop: 150,",
    height: height,
    width: width,
    flexDirection: "column",
  },


  containerTitle: {
    height: 18,
    width: 83,
    left: 41,
    top: 100,
    position: "absolute"
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#64B3FD",
    fontStyle: "normal",
    lineHeight: 18.2,
  },
  conatinerSubtitle: {
    left: 41,
    width: 183,
    height: 27,
    top: 150,
    justifyContent: "space-between",
    position: "absolute"
  },
  subTitle: {
    fontSize: 27,
    fontWeight: "600",
    color: "#4A4A4A",
    fontStyle: "normal",
    lineHeight: 27.3,

  },
  subTitle_2: {
    width: 198,
    height: 11,
    fontSize: 10,
    fontWeight: "600",
    color: "#A3A4A6",
    fontStyle: "normal",
    lineHeight: 11.46,
    margin: 5
  },
  phoneNumberContainer: {
    width: 38 + 65,
    height: 26,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 100,
    position: "absolute"
  },
  CountryCode: {
    fontWeight: "500",
    fontStyle: 'normal',
    fontSize: 23,
    lineHeight: 26.36,
    color: "#A4A4A4",
    alignSelf: "center"
  },
  PhoneNumber: {
    height: 18,
    fontStyle: "normal",
    alignSelf: "center",
    marginLeft: 20,
    fontSize: 18,
    alignItems: "center",
    color: "#A4A4A4",
    width: 109,
    borderBottomColor: "#64B3FD",
    borderBottomWidth: 2

  },
  imageContainer: {
    width: 167.45,
    height: 274.32,
    alignSelf: "center",
    position: "absolute",
    bottom: 50,

  },
  image: {
    width: 167.45,
    height: 274.32,
    alignSelf: "center",
    bottom: 0,
  },
  login: {
    bottom: 5,
    width: 109,
    height: 15,
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 14.9,
    fontStyle: 'normal',
    color: "#A3A4A6",
    position: "absolute"
  },


})

