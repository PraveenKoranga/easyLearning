import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constant/user";

const URL = "https://mernelearning.herokuapp.com";
// const URL = "http://10.0.2.2:8030";

export const registerUser =
  (username, email, password, config, navigation) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const { data } = await axios.post(
        `${URL}/auth/register`,
        {
          username,
          email,
          password,
        },
        config
      );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      navigation.navigate("Home");
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const loginUser =
  (email, password, config, navigation) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const { data } = await axios.post(
        `${URL}/auth/login`,
        {
          email,
          password,
        },
        config
      );

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      navigation.navigate("Home");
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: "Invalid Email Or Password",
      });
    }
  };
