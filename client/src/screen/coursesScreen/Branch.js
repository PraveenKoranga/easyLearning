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
  uri: "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9uYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
};

const Branch = ({ route }) => {
  const branch = route.params.branch;
  console.log(branch);
  const navigation = useNavigation();
  return (
    <View style={styles.branchList}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {branch ? (
          <FlatList
            data={branch}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Sem", {
                    branchName: item.branchName,
                    semester: item.semester,
                  })
                }
              >
                <Text style={styles.branchName}>{item.branchName}</Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <CommingSoon />
        )}
      </ImageBackground>
    </View>
  );
};

export default Branch;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  branchList: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  branchName: {
    width: deviceWidth - 50,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 50,
    elevation: 5,
  },
});
