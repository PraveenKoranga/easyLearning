import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const UserDetail = () => {
  const [user, setUser] = useState();
  const navigation = useNavigation();

  const getuserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("profile");
      const data = await JSON.parse(userData);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuserData();
    console.log(user);
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("profile");
      setUser(null);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);

  return (
    <View style={styles.profileContainer}>
      {user && (
        <View style={styles.userDetail}>
          <View style={styles.profilePhoto}>
            <Text style={styles.userPhoto}>{user.user.username.charAt(0)}</Text>
          </View>
          <View style={styles.profileDetail}>
            <Text style={styles.userName}>{user.user.username}</Text>
            <Text style={styles.email}>{user.user.email}</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.update, styles.button]}
              onPress={() =>
                navigation.navigate("userUpdate", {
                  user: user,
                })
              }
            >
              <Text style={styles.text}>EDIT PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.logout, styles.button]}>
              <Text style={styles.text} onPress={() => logout()}>
                LOGOUT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default UserDetail;

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#17181F",
  },
  userDetail: {
    // backgroundColor: "white",
    // elevation: 5,
    width: deviceWidth / 1.2,
    height: deviceHeight / 1.2,
    // paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  profilePhoto: {
    width: deviceWidth / 4.6,
    height: deviceHeight / 10,
    borderRadius: deviceWidth + deviceHeight / 2,
    backgroundColor: "#CB69C1",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    marginVertical: 10,
    marginTop: "30%",
  },
  userPhoto: {
    fontSize: 30,
    textAlign: "center",
  },
  profileDetail: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  userName: {
    fontSize: 25,
    marginVertical: 10,
    // color: "#EEEDF0",
    // textTransform: "Capitalize",
  },
  email: {
    fontSize: 20,
    marginVertical: 10,
    // color: "#EEEDF0",
  },
  buttons: {
    marginVertical: 10,
    marginTop: "auto",
  },
  button: {
    width: deviceWidth / 1.5,
    marginVertical: 20,
    backgroundColor: "#6C72CB",
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
