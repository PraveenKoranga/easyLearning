import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ExcerSize } from "../components/ExerciseApi";
import { useNavigation } from "@react-navigation/native";

const Exercise = () => {
  const image = {
    uri: `https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
  };
  const navigation = useNavigation();
  return (
    <View style={styles.exerciseConatiner}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <FlatList
          data={ExcerSize}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Questions", {
                  Question: item.questions,
                  Name: item.name,
                })
              }
            >
              <View style={styles.nameBox}>
                <Text style={styles.exercisemName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default Exercise;

const deviceWidth = Math.floor(Dimensions.get("window").width);
const deviceHeight = Math.floor(Dimensions.get("window").height);

const styles = StyleSheet.create({
  exerciseConatiner: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  nameBox: {
    alignItems: "center",
    // justifyContent: "center",
  },
  exercisemName: {
    fontWeight: "700",
    fontSize: 20,
    // lineHeight: 40,
    color: "white",
    textShadowColor: "white",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 10,
    lineHeight: 40,
    textTransform: "uppercase",
    marginVertical: 5,
  },
});
