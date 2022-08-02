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
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
};

const Stream = ({ route }) => {
  const stream = route.params.course;
  const navigation = useNavigation();
  return (
    <View style={styles.streamList}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <FlatList
          data={stream}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.courseName}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Branch", {
                  branch: item.subBranch,
                })
              }
              style={styles.button}
            >
              <Text style={styles.streamName}>{item.courseName}</Text>
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default Stream;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  streamList: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  streamName: {
    width: deviceWidth - 50,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 50,
    elevation: 5,
  },
  button: {
    // width: deviceWidth - 50,
  },
});
