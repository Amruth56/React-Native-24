import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";
import PokemonCard from "@/components/PokemonCard";

export default function Index() {
  const luffyData ={
      name : "Monkey D Luffy",
      age:'19',
      image: require("@/assets/luffy.jpg"),
      type:"Gum Gum No Mi",
      category: 'anime',
  }
  return (

    
    <SafeAreaView style={styles.container}>
      <PokemonCard {...luffyData}></PokemonCard>
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
