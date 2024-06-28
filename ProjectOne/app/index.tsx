import { Text, View, StyleSheet, SafeAreaView, Platform, ScrollView} from "react-native";
import PokemonCard from "@/components/PokemonCard";
// import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  const luffyData ={
      name : "Monkey D Luffy",
      age:'19',
      image: require("@/assets/luffy.jpg"),
      type:"anime",
      power: ['Gum Gum No Mi'], 
      category:"adventure"
  }
  const minionData ={
      name : "minion",
      age:'19',
      image: require("@/assets/minion.png"),
      type:"anime",
      power: ['Gum Gum No Mi'], 
      category:"adventure"
  }
  const overLordData ={
      name : "OverLord",
      age:'19',
      image: require("@/assets/overLord.jpg"),
      type:"anime",
      power: ['Gum Gum No Mi'], 
      category:"adventure"
  }
  const zoroData ={
      name : "Zoro",
      age:'19',
      image: require("@/assets/zoro.png"),
      type:"anime",
      power: ['Gum Gum No Mi'], 
      category:"adventure"
  }
  return (

    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...luffyData}></PokemonCard>
      <PokemonCard {...minionData}></PokemonCard>
      <PokemonCard {...overLordData}></PokemonCard>
      <PokemonCard {...zoroData}></PokemonCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  text: {},
});
