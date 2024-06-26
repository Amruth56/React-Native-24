import { Text, View, StyleSheet, Dimensions } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>hi .</Text>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: windowWidth>500? 34 : 24,
  },
  box: {
    width: windowWidth>500 ? '70%' : '90%',
    height: windowHeight>600 ? '60%' : '80%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: 30,
  },
});
