import { Text, View, FlatList, SafeAreaView, StyleSheet } from "react-native";

import listName from ""

export default function Index() {
  return (
    <SafeAreaView style = {styles.container}>
      <FlatList data={listName}
      renderItem={ ({item}) => {
        return (
          <View key = {item.id}>
            <Text>{item.type}</Text>
            <Text>{item.name}</Text>
          </View>
        )
      }}></FlatList>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})