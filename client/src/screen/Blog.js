import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import {
//   useFonts,
//   josefinSans_100Thin,
//   josefinSans_200ExtraLight,
//   josefinSans_300Light,
//   josefinSans_400Regular,
//   josefinSans_500Medium,
//   josefinSans_600SemiBold,
//   josefinSans_700Bold,
//   josefinSans_800ExtraBold,
//   josefinSans_900Black,
// } from "@expo-google-fonts/josefin-sans";
// import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBlog } from "../redux/action/blogAction";
import { useNavigation } from "@react-navigation/native";

const Blog = () => {
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, Blogs } = blogList;

  // const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(listBlog());
  }, [dispatch]);
  // console.log(Blogs);
  if (Blogs) {
    var uniqueCat = [...new Set(Blogs.map((blog) => blog.category))];
    // console.log(uniqueCat);
  }

  const time = new Date();
  const Time = time.getMilliseconds();

  const navigation = useNavigation();

  // let [fontsLoad] = useFonts({
  //   josefinSans_100Thin,
  //   josefinSans_200ExtraLight,
  //   josefinSans_300Light,
  //   josefinSans_400Regular,
  //   josefinSans_500Medium,
  //   josefinSans_600SemiBold,
  //   josefinSans_700Bold,
  //   josefinSans_800ExtraBold,
  //   josefinSans_900Black,
  // });

  // if (!fontsLoad) {
  //   return <Text>Hello</Text>;
  // }
  return (
    <View style={styles.blogContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          {Blogs && (
            <ScrollView showsVerticalScrollIndicator={false}>
              {uniqueCat.map((uniqueCat) => (
                <View style={styles.blogBox} key={uniqueCat + Time}>
                  <Text style={styles.blogCategory}>{uniqueCat}</Text>
                  <FlatList
                    data={Blogs}
                    keyExtractor={(item, index) => index}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <View>
                        {uniqueCat === "Programming" &&
                        item.category === "Programming" ? (
                          <View style={styles.blogBody}>
                            <Image
                              style={styles.blogBanner}
                              source={{ uri: item.image }}
                            />
                            <Text style={styles.title}>
                              PG program in Data Science and Business Analytics
                            </Text>
                            <View style={styles.learnMoreBox}>
                              <Text style={styles.name}>{item.title}</Text>
                              <TouchableOpacity
                                style={styles.learnMoreButton}
                                onPress={() =>
                                  navigation.navigate("ViewBlog", {
                                    blogId: item._id,
                                  })
                                }
                              >
                                <Text style={styles.buttonText}>
                                  Learn More
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        ) : uniqueCat === "Scripting Language" &&
                          item.category === "Scripting Language" ? (
                          <View style={styles.blogBody}>
                            <Image
                              style={styles.blogBanner}
                              source={{ uri: item.image }}
                            />
                            <Text style={styles.title}>
                              PG program in Data Science and Business Analytics
                            </Text>
                            <View style={styles.learnMoreBox}>
                              <Text style={styles.name}>{item.title}</Text>
                              <TouchableOpacity
                                style={styles.learnMoreButton}
                                onPress={() =>
                                  navigation.navigate("ViewBlog", {
                                    blogId: item._id,
                                  })
                                }
                              >
                                <Text style={styles.buttonText}>
                                  Learn More
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        ) : uniqueCat === "Backend" &&
                          item.category === "Backend" ? (
                          <View style={styles.blogBody}>
                            <Image
                              style={styles.blogBanner}
                              source={{ uri: item.image }}
                            />
                            <Text style={styles.title}>
                              PG program in Data Science and Business Analytics
                            </Text>
                            <View style={styles.learnMoreBox}>
                              <Text style={styles.name}>{item.title}</Text>
                              <TouchableOpacity
                                style={styles.learnMoreButton}
                                onPress={() =>
                                  navigation.navigate("ViewBlog", {
                                    blogId: item._id,
                                  })
                                }
                              >
                                <Text style={styles.buttonText}>
                                  Learn More
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        ) : uniqueCat === "FrontEnd" &&
                          item.category === "FrontEnd" ? (
                          <View style={styles.blogBody}>
                            <Image
                              style={styles.blogBanner}
                              source={{ uri: item.image }}
                            />
                            <Text style={styles.title}>
                              PG program in Data Science and Business Analytics
                            </Text>
                            <View style={styles.learnMoreBox}>
                              <Text style={styles.name}>{item.title}</Text>
                              <TouchableOpacity
                                style={styles.learnMoreButton}
                                onPress={() =>
                                  navigation.navigate("ViewBlog", {
                                    blogId: item._id,
                                  })
                                }
                              >
                                <Text style={styles.buttonText}>
                                  Learn More
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        ) : (
                          <Text></Text>
                        )}
                      </View>
                    )}
                  />
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
};

export default Blog;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  blogContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 5,
  },
  blogCategory: {
    fontSize: 30,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 10,
    textTransform: "capitalize",
    // fontWeight: 600,
  },
  blogBody: {
    width: deviceWidth / 1.5,
    height: deviceWidth / 1.5,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
  },
  blogBanner: {
    width: deviceWidth / 1.5,
    height: deviceWidth / 3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    marginVertical: 10,
    paddingHorizontal: 10,
    textAlign: "justify",
    textTransform: "capitalize",
    fontSize: 17,
  },
  learnMoreBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: "10%",
  },
  name: {
    fontSize: 20,
  },
  buttonText: {
    color: "blue",
    fontSize: 20,
  },
});
