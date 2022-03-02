import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.body}>
      <StatusBar style="light" translucent={false} />
      <View style={styles.top}>
        <View style={styles.box1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.mid}>
        <View style={styles.box4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.box6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.box7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  top: {
    flexDirection: "row",
    flex: 1,
  },
  box1: {
    backgroundColor: "#FCD8D4",
    flex: 1,
    justifyContent: "center",
  },
  box2: {
    backgroundColor: "#F8E2CF",
    flex: 2,
    justifyContent: "center",
  },
  box3: {
    backgroundColor: "#F5C6AA",
    flex: 3,
    justifyContent: "center",
  },
  mid: {
    flex: 2,
  },
  box4: {
    flex: 1,
    backgroundColor: "#B5EAEA",
    justifyContent: "center",
  },
  box5: {
    flex: 1,
    backgroundColor: "#EDF6E5",
    justifyContent: "center",
  },
  bottom: {
    flexDirection: "row",
    flex: 7,
  },
  box6: {
    backgroundColor: "#FFBCBC",
    flex: 1,
    justifyContent: "center",
  },
  box7: {
    backgroundColor: "#F38BA0",
    flex: 1,
    justifyContent: "center",
  },
});
