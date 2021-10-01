import Color from "color";
import React, { ReactElement } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Svg, { RadialGradient, Defs, Rect, Stop } from "react-native-svg";
import PhoneEnter from "../../screens/PhoneEnter";

const { width, height } = Dimensions.get("screen");
const SIZE = width - 75;

export interface SlideProps {
  slide: {
    Component:React.ReactNode
    color: "string";
  };
}

const Slide = ({ slide: { color, Component } }: SlideProps) => {
  const lighterColor = Color(color).lighten(0.8).toString();
  return (
    <>
      <Svg style={[StyleSheet.absoluteFillObject]}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>

      <Component/>
    </>
  );
};

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
    color: "#64B3FD",
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
    color: "#A9A9A9",
    fontFamily: "Roboto",
  },
});

export default Slide;
