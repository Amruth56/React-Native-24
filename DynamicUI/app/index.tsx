import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

export default function Index() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style = {styles.safeContainer}>
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            {
              width: windowWidth > 500 ? "30%" : "90%",
              height: windowHeight > 600 ? "30%" : "90%",
            },
          ]}
        >
          <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>hi .</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, 
    backgroundColor:"plum"
   },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   fontSize: windowWidth>500? 34 : 24,
  // },
  box: {
    // width: windowWidth>500 ? '70%' : '90%',
    // height: windowHeight>600 ? '60%' : '80%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: 30,
  },
});
