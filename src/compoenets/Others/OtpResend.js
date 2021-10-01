import React, { useState, useEffect } from 'react'
import { View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function OtpResend() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }
    }, [seconds]);

    return (

        <View style={{ width: 64 + 30, height: 11, alignSelf:"center", }}>
            {
                seconds === 0
                    ?
                    <TouchableOpacity style={{ width: 54, height: 13,alignSelf:"center", }} onPress={() => setSeconds(12)}>
                        <Text style={{ color: "#58AbF9", fontSize: 10, fontStyle: "normal", alignSelf: "center", fontWeight: 'bold' }} >
                            Resend OtP
                        </Text>
                    </TouchableOpacity>
                    :
                    <View style={{flexDirection:"row",width: 64 + 30,justifyContent:"space-around"}}>
                        <Text style={{ fontSize: 11, fontWeight: '600', fontStyle: "normal", lineHeight: 11.46, color: "#999999" }}>
                            Resend Otp in
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontStyle: "normal", lineHeight: 11.46, fontSize: 10, color: "#58ABF9" }}>
                            00:{seconds}
                        </Text>
                    </View>
            }
        </View>
    )
}