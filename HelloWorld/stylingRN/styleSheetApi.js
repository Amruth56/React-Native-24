import { View, Text, StyleSheet } from "react-native";

export default function StyleApi() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Style Sheet API</Text>

      <View style={[styles.lightGreenBg, styles.box]}>
        <Text>Light green box</Text>
      </View>
      <View style={[styles.lightBlueBg, styles.box]}>
        <Text>Light blue box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    padding: 40,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontStyle: "italic",
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
    // fontSize: 25,
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  box: {
    width: "50%",
    height: 100,
    // padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 20,
    borderRadius: 15,
  },
});
