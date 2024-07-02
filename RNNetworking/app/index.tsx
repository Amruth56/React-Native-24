import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    //convert response to json
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };

  const handelRefresh = () => {
    setRefresh(true);
    fetchData(20);
    setRefresh(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: postTitle, body: postBody }),
    });
    const newPost = await response.json()
    setPostList([newPost, ...postList]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="0000ff"></ActivityIndicator>
        <Text>LoAdInG...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Post title"
            value={postTitle}
            onChangeText={setPostTitle}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Post body"
            value={postBody}
            onChangeText={setPostBody}
          ></TextInput>
          <Button
            title={isPosting ? "Adding..." : "Add Post"}
            onPress={addPost}
            disabled={isPosting}
          ></Button>
        </View>
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
            ListHeaderComponent={
              <Text style={styles.headerText}>Post List</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}>End of list</Text>
            }
            refreshing={refresh}
            onRefresh={handelRefresh}
          ></FlatList>
        </View>
      </>
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
  loadingContainer: {
    flex: 1,
    backgroundColor: "f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
});
