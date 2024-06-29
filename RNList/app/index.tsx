import { Text, View, FlatList, SafeAreaView, StyleSheet } from "react-native";
import FlatLis from "@/components/flatList";

export default function Index() {
  return (
    // <FlatLis></FlatLis>
    <View>
      <Text style = {styles.text}>hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'

  },
  text:{
    backgroundColor:"black",
    color :"white",
    textAlign: "center"
  }
});
