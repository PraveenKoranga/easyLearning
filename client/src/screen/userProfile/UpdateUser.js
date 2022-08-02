import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { updateUser } from "../../redux/action/profileAction";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const UpdateUser = ({ route }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const user = route.params.user;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(user);

  useEffect(() => {
    if (user.user.name) {
      setTimeout(() => {
        setNoupdate("");
        history.push(`/profile/${user.user.email}`);
      }, 5000);
      return setNoupdate(
        "You Can't Update Your Profile, Because You Logged In Through Google !!!"
      );
    } else {
      setName(user.user.username);

      setEmail(user.user.email);
    }
  }, [user.user.email, user.user.username, user.user.name, navigation]);

  const userUpdate = () => {
    dispatch(updateUser(user.user._id, name, email, navigation));
    // navigation.navigate("Home");
    // console.log("updated");
  };

  return (
    <View style={styles.updateBox}>
      <View style={styles.profilePhoto}>
        <Text style={styles.userPhoto}>{user.user.username.charAt(0)}</Text>
      </View>
      <Text style={styles.text}>Change profile picture</Text>
      <View style={styles.box}>
        <View style={styles.inputLebelBox}>
          <Text style={styles.headingInput}>Email Address</Text>
          <TextInput
            value={email}
            onChangeText={(e) => setEmail(e)}
            style={styles.inputBox}
          />
        </View>
        <View style={styles.inputLebelBox}>
          <Text style={styles.headingInput}>Username</Text>
          <TextInput
            value={name}
            onChangeText={(e) => setName(e)}
            style={styles.inputBox}
          />
        </View>
        <View style={styles.inputLebelBox}>
          <TouchableOpacity onPress={() => userUpdate()}>
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputLebelBox}>
          <TouchableOpacity>
            <Text>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpdateUser;

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  updateBox: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color: "black",
    // fontSize: 20,
    // fontWeight: "800",
    // letterSpacing: 1,
    // textTransform: "uppercase",
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
  box: {
    marginTop: 50,
  },
  inputBox: {
    width: deviceWidth - 50,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputLebelBox: {
    marginVertical: 10,
  },
  headingInput: {
    fontWeight: "800",
    fontSize: 16,
  },
});
