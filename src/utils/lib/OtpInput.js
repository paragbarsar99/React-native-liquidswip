import React from 'react'
import { StyleSheet, Text, View } from 'react-native'



export default function Otpinput({ LoadingAnimation }) {



  return (
    <View style={styles.container}>
      <OTPInputView
        style={styles.borderStyleBase}
        pinCount={6}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({ code }) }}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code => {
          codefunction(code)
          LoadingAnimation(true)

        })}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  OtpInputcontainer: {
    alignSelf: "center",
    alignItems: "center",
    width: 6 * 33,
    height: 24
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
})

//blue = #62B1FA

