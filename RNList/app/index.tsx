import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function Index() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name here "
      ></TextInput>
      <TextInput style={styles.input} secureTextEntry placeholder="enter password"></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter number"
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
      <Text style={styles.text}>hi {name}</Text>

      <TextInput style={styles.input} placeholder="message" multiline></TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 9,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "orange",
  },
});
