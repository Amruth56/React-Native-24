import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
const logoImg = require("@/assets/images/partial-react-logo.png");

import React from "react";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <ScrollView>
        <Text style={{ color: "white", textAlign: "center" }}>
          <Text style={{ color: "pink" }}>lorem87</Text> World
        </Text>

        <Pressable onPress={() => console.log("Image Pressed")}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={{ width: 300, height: 300 }}
          ></Image>
        </Pressable>
        <Button
          title="press"
          onPress={() => setIsModalVisible(true)}
          color="midnightblue"
        ></Button>
        <Pressable onPress={() => console.log("Text Pressed")}>
          <Text style={{ color: "white" }}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem eb sites still in their infancy. going through the
            cites of the word in classical literature, disetimes on purpose
            (injected humour and the like). Where does it come from? Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots
            in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Text>
        </Pressable>

        {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ width: 300, height: 300 }}
        ></Image>

        {/* <ImageBackground source={logoImg}  style = {{flex: 1}}>
        <Text style={{ color: "red"}}>Image Text</Text>
      </ImageBackground> */}
      </ScrollView>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)} // if we click on back button
        animationType="fade"
        presentationStyle="fullScreen"  //on;ly affects IOS and not android 
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 20 }}>
          <Text>Modal Content</Text>
          <Button
            title="close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          ></Button>
        </View>
      </Modal>
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
