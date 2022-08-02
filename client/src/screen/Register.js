import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/action/userAction";

const Register = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useState();

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (localStorage.getItem("profile")) {
  //       history.push("/");
  //     }
  //   }, [history]);
  const navigation = useNavigation();

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password Do Not Match");
    }

    if (username === "") {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Please enter username");
    }
    if (email === "") {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Please enter email");
    }
    if (password === "" || confirmpassword === "") {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Please enter password or confirmpassword");
    }

    dispatch(registerUser(username, email, password, config, navigation));
  };

  const getUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("profile");
      const data = await JSON.parse(userData);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    if (user) {
      navigation.navigate("Home");
    }
  }, [user]);

  return (
    <View style={styles.formBox}>
      <View style={styles.error}>
        <Text>{error && <Text style={styles.errorMessage}>{error}</Text>}</Text>
      </View>
      <TextInput
        placeholder="Enter Userame "
        autoFocus={true}
        style={[styles.username, styles.input]}
        value={username}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput
        placeholder="Enter Email"
        style={[styles.username, styles.input]}
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.password, styles.input]}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={[styles.password, styles.input]}
        value={confirmpassword}
        onChangeText={(e) => setConfirmPassword(e)}
      />

      <TouchableOpacity
        style={[styles.loginButton, styles.button]}
        onPress={() => submitHandler()}
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={[styles.googleSingButton, styles.button]}>
        <Text style={styles.loginText}>Google Sign Up</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.text}>Already have an account ? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const width = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  formBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FFF4DE",
    marginHorizontal: 50,
    marginVertical: 50,
    // height: width,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "white",
    width: width - 150,
    marginVertical: 20,
    paddingVertical: 5,
    paddingLeft: 10,
    fontSize: 20,
    color: "#000",
    // fontWeight: "600",
    elevation: 10,
  },
  forgotPassword: {
    alignSelf: "flex-start",
    marginLeft: 25,
  },
  button: {
    width: width - 150,
    backgroundColor: "red",
    paddingVertical: 6,
    borderRadius: 10,
    marginVertical: 5,
  },
  loginText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  text: {
    marginVertical: 25,
    color: "blue",
  },
});
