import React from 'react';
import { Button, StyleSheet, View, } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Lotti extends React.Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    }

    resetAnimation = () => {
        this.animation.reset();
        this.animation.play();

    };

    render() {
        return (
            <View style={styles.animationContainer}>
                <LottieView
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 100,
                        height: 100,

                    }}


                    source={require('../../assets/lf30_editor_carimo2y.json')}
                // OR find more Lottie files @ https://lottiefiles.com/featured
                // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    animationContainer: {
        alignSelf: "center",
        top:250
    },
    buttonContainer: {
        paddingTop: 20,
    },
});