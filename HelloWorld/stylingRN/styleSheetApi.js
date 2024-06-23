import { View, Text, StyleSheet } from "react-native";

export default function StyleApi() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Style Sheet API</Text>
      <View style={styles.darkMode}>
        <Text style={styles.title}>Style Inheritance</Text>
      </View>

      <View
        style={[
          styles.lightGreenBg,
          styles.box,
          styles.border,
          styles.boxShadow,
        ]}
      >
        <Text style={{ borderRadius: 5, backgroundColor: "white" }}>
          Light green box
        </Text>
      </View>
      <View
        style={[
          styles.lightBlueBg,
          styles.box,
          styles.border,
          styles.androidShadow,
        ]}
      >
        <Text>Light blue box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
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
    height: 250,
    // padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 20,
  },
  border: {
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "black",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  androidShadow: {
    elevation: 90,
    shadowColor: "midnightblue",
  },
  darkMode: {
    backgroundColor:"black"
  },
});
