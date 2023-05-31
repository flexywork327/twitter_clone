import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";

const UserTweet = () => {
  const { id } = useSearchParams();

  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) {
    <View>
      <Text>Could not find the tweet</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <Tweet tweet={tweet} />
    </View>
  );
};

export default UserTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
