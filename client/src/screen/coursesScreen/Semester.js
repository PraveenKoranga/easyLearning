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
import CommingSoon from "../../components/CommingSoon";

const image = {
  uri: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
};

const Semester = ({ route }) => {
  const branchName = route.params.branchName;
  const sem = route.params.semester;

  const navigation = useNavigation();

  return (
    <View style={styles.semList}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {sem ? (
          <FlatList
            data={sem}
            keyExtractor={(item) => item.sem}
            showsVerticalScrollIndicator={false}
            //   horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ marginHorizontal: 5 }}
                onPress={() =>
                  navigation.navigate("Subjests", {
                    sem: item.sem,
                    subjects: item.subjects,
                  })
                }
              >
                <Text style={styles.semName}>SEM {item.sem}</Text>
              </TouchableOpacity>
            )}
            style={styles.list}
          />
        ) : (
          <CommingSoon />
        )}
      </ImageBackground>
    </View>
  );
};

export default Semester;
const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  semList: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  semName: {
    width: deviceWidth - 60,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 50,
    elevation: 5,
  },
  list: {
    marginHorizontal: 5,
  },
});
