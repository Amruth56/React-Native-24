import { Text, View, StyleSheet, StatusBar, SafeAreaView, TextInput } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
    style = {styles.container}>
      <Text>hi</Text>
      <TextInput></TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: StatusBar.currentHeight
  }
})