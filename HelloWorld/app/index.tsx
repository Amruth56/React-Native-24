import { View } from "react-native";

import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          backgroundColor: "lightblue",
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "lightgreen",
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
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
