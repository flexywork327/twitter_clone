import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useNavigation } from "expo-router";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function AvatarHeader() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          marginLeft: 15,
          aspectRatio: 1,
        }}
      />
    </Pressable>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}>
      {/* home tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: " ",

          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="home" size={24} color="#2f95dc" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),

          headerLeft: () => <AvatarHeader />,
          headerTitle: () => (
            <Image
              source={require("../../../assets/images/twitter.png")}
              style={styles.logo}
            />
          ),
        }}
      />

      {/* search tab */}
      <Tabs.Screen
        name="search"
        options={{
          title: " ",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="search1" size={24} color="#2f95dc" />
            ) : (
              <AntDesign name="search1" size={24} color="#000" />
            ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="md-settings-outline"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          // HeaderTitle as a search bar centered
          headerTitle: () => (
            <Pressable style={styles.searchBar}>
              <AntDesign
                name="search1"
                size={20}
                color={Colors[colorScheme ?? "light"].text}
                style={{ marginLeft: 10 }}
              />
              <TextInput
                placeholder="Search Twitter"
                style={{
                  color: Colors[colorScheme ?? "light"].text,
                  marginLeft: 10,
                }}
              />
            </Pressable>
          ),

          headerLeft: () => <AvatarHeader />,
        }}
      />

      {/* spaces tab */}
      <Tabs.Screen
        name="spaces"
        options={{
          title: " ",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="mic" size={24} color="#2f95dc" />
            ) : (
              <Ionicons name="mic" size={24} color="#000" />
            ),
          headerLeft: () => <AvatarHeader />,
          headerTitle: "Twitter",
        }}
      />

      {/* notification tab */}
      <Tabs.Screen
        name="notification"
        options={{
          title: " ",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <Ionicons name="notifications" size={24} color="#2f95dc" />
                <View style={styles.notificationCount}>
                  <Text style={styles.notificationCountText}>2</Text>
                </View>
              </View>
            ) : (
              <View>
                <Ionicons name="notifications-outline" size={24} color="#000" />
                <View style={styles.notificationCount}>
                  <Text style={styles.notificationCountText}>2</Text>
                </View>
              </View>
            ),
          headerTitle: "Notifications",
          headerLeft: () => <AvatarHeader />,
        }}
      />

      {/* email tab */}
      <Tabs.Screen
        name="email"
        options={{
          title: " ",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="email" size={24} color="#2f95dc" />
            ) : (
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#000"
              />
            ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="md-settings-outline"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          // HeaderTitle as a search bar centered
          headerTitle: () => (
            <Pressable style={styles.searchBar}>
              <AntDesign
                name="search1"
                size={20}
                color={Colors[colorScheme ?? "light"].text}
                style={{ marginLeft: 10 }}
              />
              <TextInput
                placeholder="Search Direct Messages"
                style={{
                  color: Colors[colorScheme ?? "light"].text,
                  marginLeft: 10,
                }}
              />
            </Pressable>
          ),

          headerLeft: () => <AvatarHeader />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#e6e6e6",
    borderRadius: 30,
    width: Dimensions.get("window").width - 110,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  notificationCount: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationCountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  logo: {
    width: 25,
    height: 25,
    marginLeft: Dimensions.get("window").width / 2 - 70,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
