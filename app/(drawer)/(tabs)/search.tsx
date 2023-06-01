import { StyleSheet, Text, View } from "react-native";
import Trends from "../../../components/trends/trends";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trends for you</Text>
      <View style={styles.trends} />

      <Trends />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "200",
  },
  trends: {
    paddingTop: 20,
  },
});
