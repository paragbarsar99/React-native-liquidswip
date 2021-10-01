import React, { useState } from "react";

import Slider from "../compoenets/Animations/Slider";
import Slide from "../compoenets/Animations/Slide";

import PhoneEnter from "./PhoneEnter";
import Screen_1 from "./Screen_1";
import Screen_2 from "./Screen_2";
import Screen_3 from "./Screen_3";
import Screen_4 from "./Screen_4";

const slides = [
  {
    Component: Screen_1,
    color:"#FBFCFE"
  },
  {
    Component:Screen_2,
    color:"#64B3FD"
  },
  {
    Component:Screen_3,
    color:"#FBFCFE"
  },
  {
    Component:Screen_4,
    color:"#64B3FD"
  }
   
];

// const slides = [
//   {
//     color: "#FBFCFE",
//     DesciriptionColor: "#A9A9A9",
//     title: "Explor Like a",
//     titlecolor: "#64B3FD",
//     subTitle: "Ninja",
//     ImageSubTitle: require("./assets/Ninja.png"),
//     description:
//       "Take your career to next level with personalized career info based on your interests, skill & personality.",
//     picture: require("./assets/boyreading.png"),
//   },
//   {
//     color: "#64B3FD",
//     titlecolor: "#FBFCFE",
//     DesciriptionColor: "#FBFCFE",
//     title: "Choose like a ",
//     subTitle: "Pro",
//     ImageSubTitle: require("./assets/Ninja.png"),
//     description:
//       "No matter what aspect of college life you are looking for, we provide listings and rankings based on your preferences",
//     picture: require("./assets/Laptop.png"),
//   },
//   {
//     color: "#FBFCFE",
//     DesciriptionColor: "#A9A9A9",
//     title: "Prepare for the",
//     titlecolor: "#64B3FD",
//     subTitle: "RealWorld",
//     ImageSubTitle: require("./assets/Building.png"),
//     description:
//       "We'll show you exactly what to do to make your dream job a reality",
//     picture: require("./assets/Uncle.png"),
//   },
//   {
//     color: "#64B3FD",
//     DesciriptionColor: "#FBFCFE",
//     title: "How can we",
//     titlecolor: "#FBFCFE",
//     subTitle: "Help",
//     ImageSubTitle: require("./assets/Ninja.png"),
//     description:
//       "Get ready for your transition from school to college and finally to a perfect career with us!",
//     picture: require("./assets/Laptop.png"),
//   },

// ];

//export const assets = slides.map(({ picture }) => picture);

const LiquidSwipe = () => {
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];

  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      <Slide slide={slides[index]!} />
    </Slider>
  );
};

export default LiquidSwipe;
