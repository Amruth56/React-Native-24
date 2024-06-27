import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import CustomButton from '@/components/CustomButton/CustomButton';

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
          <Text style={styles.text}>hi .</Text>
          <CustomButton title="press me" onPress={()=>alert("pressed")}></CustomButton>
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
    backgroundColor: Platform.OS === 'android' ? "black" :"plum",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android"?25:0,
  },
  text: {
    ...Platform.select({
      ios:{
        color:"purple",
        fontSize: 24,
        fontStyle: "italic"
      },
      android:{
        color:"midnightblue",
        fontSize: 34,
      }
    }),
    fontWeight:"bold",
    textAlign: "center",
  },
  box: {
    // width: windowWidth>500 ? '70%' : '90%',
    // height: windowHeight>600 ? '60%' : '80%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    borderRadius: 30,
  },
});
