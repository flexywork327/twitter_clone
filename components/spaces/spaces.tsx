import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Spaces = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.content}>
          <View style={styles.live}>
            <View
              style={{
                flexDirection: "row",
              }}>
              <Ionicons name="ios-barcode-outline" size={24} color="#fff" />
              <Text style={styles.liveText}>Live</Text>
            </View>
            <Text>
              <Ionicons name="ios-ellipsis-vertical" size={20} color="#fff" />
            </Text>
          </View>

          <View>
            <Text style={styles.title}>Andrew Tate - Top G </Text>
          </View>
          <Text style={styles.trendItem}># Andrew Tate</Text>
          <Text>15.2K Tweets</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Spaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#a77de3",
    borderRadius: 15,
    height: 300,
  },

  content: {
    marginTop: -10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 10,
    backgroundColor: "#b58feb",
  },
  live: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  liveText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
});
