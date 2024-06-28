import { View, Text, StyleSheet, Platform, Image } from "react-native";

import React from "react";
const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "anime":
      return { borderColor: "#ffd700", emoji: "⚡" };
    case "cartoon":
      return { borderColor: "#6493ea", emoji: "🤣" };
    case "sports":
      return { borderColor: "#ff5733", emoji: "⚽" };
    default:
      return { borderColor: "#000", emoji: "❓" }; // Default case added
  }
};

function PokemonCard({ name, age, image, type, power, category }) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>AGE: {age}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibility={`${name}`} /*resizeMode="contain"*/
      ></Image>

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.powerContainer}>
        <Text style={styles.powerText}>POWER: {power}</Text>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Category: {category}</Text>
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
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft:50
    
  },
  age: {
    fontSize: 22,
    fontStyle: "italic",
    color:"darkgreen",
    paddingTop:8
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 15,
    borderRadius: 40,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 4,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 25,
    marginRight: 12,
  },
  typeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  powerContainer: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "center",

  },
  powerText: {
    fontWeight: "bold",
    fontSize: 22,
    color:'blue'
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 22,
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
