import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Login = () => {
  const onPressLearnMore = () => {
    alert("Hello World");
  };

  const handleGoogle = () => {
    alert("coming soon");
  };

  return (
    <View style={styles.container}>
      <>
        <View style={{ width: 300, backgroundColor: "white" }}>
          <Text style={styles.header}>Sign in to X</Text>

          <TouchableOpacity style={styles.googleField} onPress={handleGoogle}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="person-circle-outline" size={24} color="black" />
              <Text
                style={{ color: "#000", fontWeight: 100, marginHorizontal: 5 }}>
                sign in as guest
              </Text>
            </View>
            <View>
              <AntDesign name="google" size={24} color="#ab2727" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleField} onPress={handleGoogle}>
            <AntDesign name="apple1" size={24} color="black" />
            <Text style={{ color: "#000", fontWeight: 100 }}>
              sign in with Apple
            </Text>
          </TouchableOpacity>
          <View style={styles.breakPoint}>
            <Text>
              ------------------------------ or ------------------------------
            </Text>
          </View>

          <View>
            <TextInput
              style={styles.accountField}
              placeholder="Enter Email or Username"
              autoComplete="email"
            />
          </View>

          <View>
            <TextInput
              style={styles.accountField}
              placeholder="Enter Password"
              autoComplete="password"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onPressLearnMore}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgot} onPress={onPressLearnMore}>
            <Text style={{ color: "#000", fontWeight: 900 }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </>

      <>
        <Text style={{ marginVertical: 40 }}>
          Dont have an account?{" "}
          <Link style={{ color: "blue" }} href="/">
            Sign up
          </Link>
        </Text>
      </>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
  },
  googleField: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginVertical: 12,
    padding: 10,
    borderRadius: 25,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  appleField: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginVertical: 12,
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  accountField: {
    height: 60,
    width: 300,
    backgroundColor: "whitesmoke",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginVertical: 12,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    marginVertical: 20,
    borderRadius: 25,
    backgroundColor: "black",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  forgot: {
    marginVertical: 20,
    borderRadius: 25,
    backgroundColor: "white",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  breakPoint: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
