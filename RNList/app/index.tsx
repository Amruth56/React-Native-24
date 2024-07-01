import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";
import { useState } from "react";

export default function Index() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name here "
      ></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="enter password"
      ></TextInput>
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

      <TextInput
        style={styles.input}
        placeholder="message"
        multiline
      ></TextInput>

      <View style={styles.switchContainer}>
        <Text style={styles.dark}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prevState) => !prevState)}
          trackColor={{ false: "green", true: "blue" }}
          thumbColor={isDarkMode ? "white" : "black"}
        ></Switch>
      </View>
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
  dark: {
    color: "black",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
