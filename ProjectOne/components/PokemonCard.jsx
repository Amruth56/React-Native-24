import { View, Text, StyleSheet, Platform, Image } from "react-native";

import React from "react";

function PokemonCard({ name, age, image, type, category }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>AGE: {age}</Text>
      </View>
      <Image source={image} style = {styles.image} accessibility="" /*resizeMode="contain"*/></Image>

      <View>
        <Text>{type}</Text>
        <Text>{category}</Text>
      </View>
    </View>
  );
}

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 11,
      },
    }),
  },
  nameContainer:{
    flexDirection:"row",
    justifyContent: "space-between",
    marginBottom:32,
  },
  name:{
    fontSize: 30,
    fontWeight: "bold"
  },
  age:{
    fontSize:22,
  },
  image:{
    width:'100%',
    height:300,
    marginBottom:15,
    borderRadius:40,
  }
});
