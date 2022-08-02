import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const localStorage = () => {
  const [input, setInput] = useState("");
  const [storageData, setStorageData] = useState("");

  const add = async () => {
    try {
      await AsyncStorage.setItem("itemList", input);
      setInput("");
      await getItemList();
      alert("data added");
    } catch (error) {
      console.log(error);
    }
  };

  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem("itemList");
      setStorageData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ marginTop: 100, paddingHorizontal: 20 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "black",
          marginVertical: 10,
          marginHorizontal: 10,
        }}
        value={input}
        onChangeText={(e) => setInput(e)}
      />
      <TouchableOpacity
        style={{ width: "30%", backgroundColor: "blue" }}
        onPress={() => add()}
      >
        <Text style={{ color: "white" }}>submit</Text>
      </TouchableOpacity>
      <Text>Data is: {storageData}</Text>
    </View>
  );
};

export default localStorage;

const styles = StyleSheet.create({});
