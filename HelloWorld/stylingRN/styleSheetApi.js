import { View, Text, StyleSheet } from "react-native";

export default function StyleApi() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Style Sheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    padding: 40,
  },
  title:{
    fontSize: 24,
    color:"brown",
  }
});
