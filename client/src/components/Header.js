import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getuserData() {
      try {
        var userData = await AsyncStorage.getItem("profile");
        var data = await JSON.parse(userData);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    getuserData();
  }, []);

  console.log(user);
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {/* <TextInput style={styles.searchBar} placeholder="search courses" /> */}
      <TouchableOpacity
        onPress={() =>
          user ? navigation.navigate("Profile") : navigation.navigate("Login")
        }
      >
        <Text style={styles.profileLogo}>
          {user ? user.user.username : "LOGIN"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const width = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  header: {
    height: width / 7,
    marginTop: 50,
    paddingVertical: 20,
    marginBottom: 5,
    fontSize: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    textAlign: "center",
    backgroundColor: "#D2D3F4",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 20,
  },
  profileLogo: {
    marginHorizontal: 10,
  },
  // searchBar: {
  //   width: width - 150,
  //   // borderWidth: 1,
  //   borderColor: "black",
  // },
});
