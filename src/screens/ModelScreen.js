import { Feather, Entypo, AntDesign, EvilIcons, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
    Modal,
    Button,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity

} from 'react-native';

export default function ModelScreen({ visible, setVisible }) {
    return (

        <Modal
            animationType={'slide'}
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                console.log('Modal has been closed.');
            }}
            style={{ width: "100%", bottom: 0, position: "absolute", borderWidth: 2, borderColor: "red", height: "100%" }}

        >
            <View
                style={styles.parentcontainer}
            >
                <View
                    style={styles.childcontainer}
                >
                    <TouchableOpacity style={{ top: 0, position: "absolute", alignSelf: "center" }} activeOpacity={0.7} onPress={() => setVisible(false)}>
                        <FontAwesome name="play-circle-o" size={20} color="#B9B9B9" />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.LoginBox}>
                        <FontAwesome name="google" size={20} color="#F65B2A" />

                        <Text style={styles.logintext}>
                            Continue with Google
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.LoginBox}>
                        <FontAwesome name="facebook-official" size={20}u color="blue" />

                        <Text style={styles.logintext}>
                            Continue with Facebook
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>


        </Modal>

    );

}

const styles = StyleSheet.create({
    parentcontainer: {
        width: "100%",
        height: "100%",
        backgroundColor: " rgba(0, 0, 0, 0.15)"
    },
    childcontainer: {
        width: "100%",
        height: 180,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: "column",
        bottom: 0,
        backgroundColor: "#F9FAFE",
        position: "absolute",
        justifyContent: "space-evenly",
        shadowColor: "rgba(0, 0, 0, 0.11)",
        elevation: 10,

    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#606070',
        margin: 50,
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
    LoginBox: {
        alignSelf: "center",
        alignItems: "center",
        width: 280,
        height: 44,
        borderRadius: 14,
        shadowColor: "rgba(0, 0, 0, 0.11)",
        flexDirection: "row",
        elevation: 2,
        justifyContent: "center"
    },
    logintext: { alignSelf: "center", padding: 10, color: "#575757", fontWeight: "bold", fontSize: 17, lineHeight: 19.48, fontStyle: "normal" }
});