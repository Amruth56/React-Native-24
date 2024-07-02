import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    //convert response to json
    const data = await response.json();
    setPostList(data);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(isLoading){
    return(
      <SafeAreaView style = {styles.loadingContainer}>
        <ActivityIndicator size = 'large' color = '0000ff'></ActivityIndicator>
        <Text>LoAdInG...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
          ListEmptyComponent={<Text>No post available</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={
            <Text style={styles.footerText}>End of list</Text>
          }
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 20,
  },
  bodyText: {
    fontSize: 15,
    color: "#666666",
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 12,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  loadingContainer:{
    flex:1,
    backgroundColor:'f5f5f5',
    paddingTop:StatusBar.currentHeight,
    justifyContent:"center",
    alignItems: "center",
  }
});
