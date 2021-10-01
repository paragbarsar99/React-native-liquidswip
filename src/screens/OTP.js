import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Vibration } from 'react-native'
import { Feather } from '@expo/vector-icons'
import OTPInputView from '@twotalltotems/react-native-otp-input'

import Lotti from '../utils/lib/LottiLibrary'

import OtpResend from '../compoenets/Others/OtpResend'
import { log } from 'react-native-reanimated'
import ModelScreen from './ModelScreen'


const { width, height } = Dimensions.get("window");
const SIZE = width - 75;



export default function Otp({ route, navigation }) {

    const [showLoading, setshowLoading] = useState(false)
    const [iscodefalse, setcodefalse] = useState(false)
    const [iscodefilled, setiscodefilled] = useState(false)
    const [visibleModel, setVisibileModel] = useState(false)

    useEffect(() => {
        if (showLoading) {
            setTimeout(() => {
                setshowLoading(false)
                setiscodefilled(true)
            }, 2000);
        }
    }, [showLoading])



    return (
        <View style={styles.container}>


            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    Enter OTP
                </Text>
            </View>
            <View style={styles.conatinerSubtitle}>
                <Text style={styles.subTitle_2}>
                    Please enter verification code send to {`${route.params.number}`}
                </Text>
            </View>

            <View style={styles.phoneNumberContainer}>
                <View style={

                    styles.OtpInputcontainer
                }>
                    <OTPInputView
                        style={styles.borderStyleBase}
                        pinCount={6}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({ code }) }}
                        autoFocusOnLoad
                        codeInputFieldStyle={
                            iscodefilled
                                ?
                                iscodefalse
                                    ?

                                    {
                                        ...styles.underlineStyleBase,
                                        borderColor: "#F65B2A"
                                    }
                                    :
                                    {
                                        ...styles.underlineStyleBase,
                                        borderColor: "#00BF86"
                                    }
                                :
                                styles.underlineStyleBase

                        }

                        codeInputHighlightStyle={

                            styles.underlineStyleHighLighted

                        }
                        onCodeFilled={(code => {

                            if (code === "858585") {

                                setshowLoading(true)
                                setTimeout(() => {
                                    setcodefalse(false)
                                }, 2000);
                                setTimeout(() => {
                                    navigation.navigate("Screen_5")
                                    setcodefalse(false)
                                    setshowLoading(false)
                                    setiscodefilled(false)
                                }, 4000);
                            } else {
                                setshowLoading(true)
                                setTimeout(() => {
                                    setiscodefilled(true)
                                    setcodefalse(true)
                                    Vibration.vibrate([10, 30], false)
                                }, 2000);
                            }

                        })}

                    />
                </View>


            </View>

            <View style={{ alignSelf: "center", alignItems: "center", top: -40, position: "absolute" }}>
                {
                    showLoading
                        ?
                        <Lotti />
                        :
                        null
                }
            </View>

            {
                iscodefilled
                    ?

                    iscodefalse
                        ?

                        <View style={{ alignSelf: "center", backgroundColor: "rgba(246, 91, 42, 0.11)", width: 84, height: 32, borderRadius: 6, top: 270 }}>
                            <Text style={{ alignSelf: "center", lineHeight: 10.31, fontSize: 9, color: "#F65B2A", padding: 8 }}>
                                Otp Incorrect
                            </Text>
                        </View>
                        :
                        <View style={{ alignSelf: "center", backgroundColor: "rgba(0, 191, 134, 0.11)", width: 84, height: 32, borderRadius: 6, top: 270 }}>
                            <Text style={{ alignSelf: "center", lineHeight: 10.31, fontSize: 9, color: "#00BF86", padding: 8 }}>
                                Otp Correct
                            </Text>
                        </View>
                    :
                    null
            }

            <View style={{ alignSelf: "center", top: 288, alignItems: "center", }}>

                <OtpResend />
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/lock.png')} style={styles.image} />
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
        borderWidth:2,
        borderColor:"red"
    },


    containerTitle: {
        height: 27,
        width: 183,
        left: 41,
        top: 100,
        position: "absolute"
    },

    title: {
        fontSize: 27,
        fontWeight: "600",
        color: "#4A4A4A",
        fontStyle: "normal",
        lineHeight: 27.3,

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
        width: 236,
        height: 11,
        fontSize: 10,
        fontWeight: "600",
        color: "#A3A4A6",
        fontStyle: "normal",
        lineHeight: 11.46,
        margin: 1
    },
    phoneNumberContainer: {
        alignSelf: "center",
        flexDirection: "row",
        top: 200,
        position: "absolute",
        alignItems: "center",


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
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#64B3FD",
        borderBottomWidth: 2

    },
    OtpInputcontainer: {
        alignSelf: "center",
        alignItems: "center",
        width: 6 * 33,
        height: 24,

    },
    borderStyleBase: {

        // borderWidth: 2, 
        // borderColor: "red"
        borderColor: "#61B1FA"
    },

    borderStyleHighLighted: {
        color: "#62B1FA"
    },

    underlineStyleBase: {
        borderWidth: 0,
        borderBottomWidth: 2,
        color: "#4A4A4A",
        fontSize: 24,
        fontWeight: "600",
        margin: 2,

    },
    underlineStyleHighLighted: {
        borderColor: "#62B1FA"
    },
    imageContainer: {
        width: 167.45,
        height: 274.32,
        alignSelf: "center",
        position: "absolute",
        bottom: 40,

    },
    image: {
        width: 283.45,
        height: 274.32,
        alignSelf: "center",
        bottom: 0,
    },
    login: {
        bottom: 5,
        width: 120,
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

