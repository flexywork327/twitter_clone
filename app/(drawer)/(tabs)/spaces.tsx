import { StyleSheet, Text, View } from "react-native";
import Spaces from "../../../components/spaces/spaces";

export default function SpacesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happening Now</Text>
      <Text style={styles.subtitle}>Spaces going on right now</Text>

      <View style={styles.trends} />

      <Spaces />
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
  subtitle: {
    fontSize: 15,
    fontWeight: "200",
    color: "grey",
  },
  trends: {
    paddingTop: 20,
  },
});
