import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {}

    if(!username) errors.username = "username is required"
    if(!password) errors.password = "password is required"; // Corrected the error message
    setErrors(errors)
    return Object.keys(errors).length === 0;
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("@/assets/minions.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.label}>UserName</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        ></TextInput>
        {
          errors.username ? <Text style = {styles.errorText}>{errors.username}</Text> : null
        }
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        {
          errors.password ? <Text style = {styles.errorText}>{errors.password}</Text> : null
        }
        <Button title="login" onPress={() => {}}></Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "f5f5f5",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    marginBottom: 10,
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  errorText:{
    color: "red",
    marginBottom:10,
  }
});
