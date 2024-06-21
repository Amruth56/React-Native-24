import { View, Text } from "react-native";

import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center"
      }}
    >
   
   <Text  style={{color:"white", textAlign:"center"}}>Hello World</Text>
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
