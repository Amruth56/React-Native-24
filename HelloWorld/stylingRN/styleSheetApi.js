import { View, Text, StyleSheet } from "react-native";

export default function StyleApi() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Style Sheet API</Text>

      <View style = {styles.lightGreenBox}>
        <Text>Light green box</Text>
      </View>
      <View style = {styles.lightBlueBox}>
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
  title:{
    fontSize: 24,
    color:"white",
  },
  lightBlueBox:{
    backgroundColor: "lightblue",
    // fontSize: 25,
    width:100,
    height:100,
    padding:20
  },
  lightGreenBox:{
    backgroundColor:"lightgreen",
    
  }
  box:{
    
  }

});
