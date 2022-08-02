import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constant/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerUserReducer = async (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, RegisteredUser: [] };
    case USER_REGISTER_SUCCESS:
      // localStorage.setItem("profile", JSON.stringify(action.payload));
      await AsyncStorage.setItem("profile", JSON.stringify(action.payload));

      return { loading: false, RegisteredUser: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const loginUserReducer = async (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, LoginUser: [] };
    case USER_LOGIN_SUCCESS:
      // localStorage.setItem("profile", JSON.stringify(action.payload));
      await AsyncStorage.setItem("profile", JSON.stringify(action.payload));
      return { loading: false, LoginUser: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
