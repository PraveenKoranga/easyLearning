import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useSelector, useDispatch } from "react-redux";
import { courseList } from "../redux/action/courseAction";
import Header from "../components/Header.js";

import Menu from "../components/Menu";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const dispatch = useDispatch();

  const CourseList = useSelector((state) => state.CourseList);
  const { courses } = CourseList;

  useEffect(() => {
    dispatch(courseList());
  }, []);

  let colors = [
    "#89F3BE",
    "#92F3A1",
    "#E7F367",
    "#9294F3",
    "#D2D3F3",
    "#F36858",
    "#92F3E5",
  ];
  const navigation = useNavigation();
  return (
    // <View>
    // {/* <Header /> */}

    <View style={styles.homeContainer}>
      {courses && (
        <View style={styles.cardBox}>
          <Header />
          {/* <Text style={styles.courseHeading}>Our populer courses</Text> */}
          <FlatList
            key={"-"}
            data={courses}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[
                  styles.CourseCard,
                  {
                    backgroundColor: colors[index % colors.length],
                    marginTop: index % 2 !== 0 ? 20 : 0,
                  },
                ]}
                onPress={() =>
                  navigation.navigate("CourseDetails", {
                    courseId: item._id,
                  })
                }
              >
                <Text style={styles.courseTitle}>{item.name}</Text>
                <Text style={styles.lesson}>50 Lessons</Text>
                <Image
                  style={styles.courseImage}
                  source={{ uri: item.image }}
                />
              </TouchableOpacity>
            )}
          />
          {/* <ScrollView>
            <Text>Explore All courses</Text>
          </ScrollView> */}

          <View>
            <Menu />
          </View>
        </View>
      )}
    </View>
    // </View>
  );
};

export default Home;

const deviceWidth = Math.round(Dimensions.get("window").width);

const cardRadius = 10;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  mainContiner: {
    width: deviceWidth / 2,
    marginVertical: 5,
    borderRadius: cardRadius,
  },
  // courseHeading: {
  //   textTransform: "uppercase",
  //   fontSize: 30,
  //   color: "red",
  //   textAlign: "center",
  // },
  CourseCard: {
    width: deviceWidth / 2.2,
    // backgroundColor: "rgb(63, 73, 127)",
    height: deviceWidth / 2,
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
    marginHorizontal: 5,
  },
  courseImage: {
    width: deviceWidth / 3,
    height: 100,
    borderRadius: cardRadius * 3,
    marginTop: 5,
    marginLeft: 40,
  },
  courseTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    marginHorizontal: 10,
    marginVertical: 5,
    textAlign: "justify",
    textTransform: "capitalize",
  },
  lesson: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 20,
    color: "black",
    fontWeight: "400",
  },
});
