import { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  Alert,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleTweet = () => {
    if (text.length === 0) {
      return;
    }
    Alert.alert("Tweeted", text);
    router.push("/");
  };
  const handleImage = () => {
    console.log("handle image");
  };

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Link href="../" style={{ fontSize: 18 }}>
              Cancel
            </Link>
            <Pressable onPress={handleTweet} style={styles.button}>
              <Text style={styles.buttonText}>Tweet</Text>
            </Pressable>
          </View>

          <View style={styles.inputContainer}>
            <Image source={{ uri: user.image }} style={styles.image} />
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="What's happening ? "
              multiline
              numberOfLines={5}
              style={{ flex: 1 }}
            />
          </View>

          <View>
            <TextInput
              placeholder="Image url (optional)"
              style={styles.visibility}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={handleImage}>
              <Feather name="image" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: StatusBar.currentHeight,
    paddingHorizontal: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  visibility: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    marginVertical: 10,
  },
});
