import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NotFound from "../components/NotFound";
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
};
const University = () => {
  const [university, setUniversity] = useState();
  const [searchUniversity, setSearchUniversity] = useState("");
  const [isUniversity, setIsUniversity] = useState(true);

  const getUniversity = async () => {
    try {
      const university = await fetch(
        `http://universities.hipolabs.com/search?name=maharishi&country=india`
      );
      const universities = await university.json();
      console.log(universities);
      setUniversity(universities);
      setIsUniversity(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchUni = async () => {
    try {
      const university = await fetch(
        `http://universities.hipolabs.com/search?name=${searchUniversity}&country=india`
      );
      const universities = await university.json();
      setUniversity(universities);
      setIsUniversity(false);
      setSearchUniversity("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUniversity();
    // console.log();
  }, []);

  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.unimainContainer,
        {
          backgroundColor: isUniversity
            ? "white"
            : university.length
            ? "white"
            : "#FF3838",
        },
      ]}
    >
      {isUniversity ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.searchUniversity}>
              <TextInput
                style={styles.searchBar}
                placeholder="search University"
                value={searchUniversity}
                onChangeText={(e) => setSearchUniversity(e)}
              />
              <TouchableOpacity
                style={styles.universitySearchButton}
                onPress={() => searchUni()}
              >
                <Text style={styles.universitySearchButtonText}>SEARCH</Text>
              </TouchableOpacity>
            </View>
            {university.length ? (
              <FlatList
                data={university}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Courses", {
                        universityName: item.name,
                      })
                    }
                  >
                    <View style={styles.universityBox}>
                      <Text style={styles.universityName}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <View>
                <NotFound />
              </View>
            )}
          </ImageBackground>
        </View>
      )}
    </View>
  );
};

export default University;

const devicewidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  unimainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 7,
  },
  image: {
    flex: 1,
  },
  searchUniversity: {
    width: devicewidth,
    height: devicewidth / 7,
    fontSize: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    alignItems: "center",
    marginVertical: 10,
    // marginHorizontal: 5,
    elevation: 2,
  },
  searchBar: {
    width: devicewidth - 120,
    borderWidth: 1,
    borderColor: "black",
    elevation: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  universitySearchButton: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  universitySearchButtonText: {
    color: "white",
    fontSize: 20,
  },
  universityBox: {
    backgroundColor: "white",
    elevation: 3,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 6,
    borderRadius: 50,
  },
  universityName: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});
