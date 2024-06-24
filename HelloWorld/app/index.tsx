import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import App1 from "@/components/coreComponents";
import Greet from "@/components/greet";
import React from "react";
import Styling from "@/stylingRN/inLine";
import StyleApi from "@/stylingRN/styleSheetApi";
import Box from "@/RNlayout/box";

export default function Index() {
  return (
    // <App1></App1>

    // <Styling></Styling>
    // <StyleApi></StyleApi>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "brown", alignSelf:'flex-end'}}>Box1</Box>
      <Box style={{ backgroundColor: "black", alignSelf:"center" }}>Box2</Box>
      <Box style={{ backgroundColor: "violet", alignSelf:"stretch" }}>Box3</Box>
      <Box style={{ backgroundColor: "pink", flex: 3 }}>Box4</Box>
       <Box style={{ backgroundColor: "green"  }}>Box5</Box>
      {/* <Box style={{ backgroundColor: "blue", flex: 1 }}>Box6</Box> */}
      {/* <Box style={{ backgroundColor: "indigo" }}>Box7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent:"space-around",
    flexWrap:"wrap",
    // alignItems: "baseline",
    alignContent:"stretch",
    // flexDirection:'column',

    rowGap:20,
    columnGap:20,
    gap:10,
    height:250,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "yellow",
  },
});
