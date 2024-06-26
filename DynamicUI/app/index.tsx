import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style = {styles.box}>
      <Text style = {styles.text}>hi
        .</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"plum",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize:34
  },
  box:{
    width:300,
    height:300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"lightblue",
    borderRadius:30

  }
})