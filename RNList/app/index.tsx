import { Text, View, StyleSheet, StatusBar, SafeAreaView, TextInput } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
    style = {styles.container}>
      <Text>hi</Text>
      <TextInput style = {styles.input}></TextInput>
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
  },
  input:{
    height: 50,
    margin:12,
    padding:10,
    borderWidth:1,
    borderRadius:9
  }
})