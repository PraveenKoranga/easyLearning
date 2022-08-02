import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action/userAction";
import { useEffect } from "react";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [isUser, setIsUser] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;

  const getUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("profile");
      const data = await JSON.parse(userData);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    // if (email === "") {
    //   setTimeout(() => {
    //     setErrorMessage("");
    //   }, 5000);
    //   return setErrorMessage("Please enter email");
    // }
    // if (password === "") {
    //   setTimeout(() => {
    //     setErrorMessage("");
    //   }, 5000);
    //   return setErrorMessage("Please enter password");
    // } else {
    //   navigation.navigate("Home");
    // }
    dispatch(loginUser(email, password, config, navigation));
  };

  useEffect(() => {
    getUser();
    if (user) {
      navigation.navigate("Home");
    }
  }, []);

  return (
    <View style={styles.formBox}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <View style={styles.error}>
            <Text>
              {error && <Text style={styles.errorMessage}>{error}</Text>}
            </Text>
          </View>
          <TextInput
            placeholder="Email"
            autoFocus={true}
            style={[styles.username, styles.input]}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            placeholder="Password"
            style={[styles.password, styles.input]}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text
              style={[styles.forgotText, { color: "blue", marginVertical: 20 }]}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.loginButton, styles.button]}
            onPress={() => submitHandler()}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={[styles.googleSingButton, styles.button]}>
        <Text style={styles.loginText}>Google Sign In</Text>
      </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.text}>Don't have an accout ? Register</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Login;

const width = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  formBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FFF4DE",
    marginHorizontal: 50,
    marginVertical: 50,
    height: width,
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
  forgotText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  text: {
    marginVertical: 25,
    color: "blue",
  },
});
