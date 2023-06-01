import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Trends = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Trending</Text>
        <Text style={styles.trendItem}># Andrew Tate</Text>
        <Text>15.2K Tweets</Text>
      </View>

      <View style={styles.subContainer}>
        <Text>Education . Trending</Text>
        <Text style={styles.trendItem}># Artificial Intelligence</Text>
        <Text>15.2K Tweets</Text>
      </View>

      <View style={styles.subContainer}>
        <Text>Music . Trending</Text>
        <Text style={styles.trendItem}>Bongo Ideas</Text>
        <Text>15.2K Tweets</Text>
      </View>

      <View style={styles.subContainer}>
        <Text>Trending in Ghana</Text>
        <Text style={styles.trendItem}># 42000 Jobs</Text>
        <Text>15.2K Tweets</Text>
      </View>

      <View style={styles.subContainer}>
        <Text>Education . Trending</Text>
        <Text style={styles.trendItem}># Artificial Intelligence</Text>
        <Text>15.2K Tweets</Text>
      </View>

      <View style={styles.subContainer}>
        <Text>Education . Trending</Text>
        <Text style={styles.trendItem}># Artificial Intelligence</Text>
        <Text>15.2K Tweets</Text>
      </View>
    </ScrollView>
  );
};

export default Trends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  trendItem: {
    fontWeight: "700",
  },
});
