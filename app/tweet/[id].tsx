import React from "react";
import tweets from "../../assets/data/tweets";
import IconButton from "../../components/IconButton";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const UserTweet = () => {
  const tweet = tweets[0];

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>@{tweet.user.username}</Text>
          </View>
          <Pressable style={styles.button}>
            <Text>Suscribe</Text>
          </Pressable>
        </View>

        <Text style={styles.content}>{tweet.content}</Text>

        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.image} />
        )}

        <View style={styles.stats}>
          <Text style={styles.name}>12:09pm</Text>
          <Text style={styles.name}>from Accra</Text>
          <Text style={styles.name}>300 Bookmarks</Text>
          <Text style={styles.name}>24K views</Text>
        </View>

        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="chart" text={tweet.impressions || 0} />
          <IconButton icon="share-apple" />
        </View>
      </View>
    </View>
  );
};

export default UserTweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    borderWidth: 1,
    backgroundColor: "white",
    flex: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "400",
  },
  username: {
    color: "gray",
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 25,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    marginVertical: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1.5,
    paddingBottom: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 30,
    elevation: 3,
    marginLeft: "auto",
    backgroundColor: "skyblue",
  },
  text: {
    fontSize: 12,
    // lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1.5,
  },
});
