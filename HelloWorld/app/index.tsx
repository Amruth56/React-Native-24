import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("@/assets/images/partial-react-logo.png");

import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>
        <Text style={{ color: "pink" }}>Hello</Text> World
      </Text>

      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
      {/* <Image source = {{uri: "https://picsum.photos/200/300"}} style={{width: 300, height: 300}}></Image> */}

      <ImageBackground source={logoImg}  style = {{flex: 1}}>
        <Text style={{ color: "red"}}>Image Text</Text>
      </ImageBackground>
    </View>
  );
}

// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "black"

//       }}
//     >
//       <Text style={{color:'white'}}>hello World</Text>
//     </View>
//   );
// }
