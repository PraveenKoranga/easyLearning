import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { UniversityCourses } from "../../components/UniversityCourses";
import { useState } from "react";
import { useEffect } from "react";
import CommingSoon from "../../components/CommingSoon";

let colors = [
  "https://png.pngtree.com/background/20210710/original/pngtree-simple-opening-learning-background-picture-image_984737.jpg",
  "https://png.pngtree.com/background/20210711/original/pngtree-simple-fashion-reading-time-reading-moment-picture-image_1080752.jpg",
  "https://png.pngtree.com/background/20210709/original/pngtree-green-cartoon-hand-painted-reading-education-banner-picture-image_899117.jpg",
  "https://png.pngtree.com/background/20210710/original/pngtree-simple-opening-learning-background-picture-image_984737.jpg",
  "https://png.pngtree.com/background/20210711/original/pngtree-simple-fashion-reading-time-reading-moment-picture-image_1080752.jpg",
  "https://png.pngtree.com/background/20210709/original/pngtree-green-cartoon-hand-painted-reading-education-banner-picture-image_899117.jpg",
  "https://png.pngtree.com/background/20210710/original/pngtree-simple-opening-learning-background-picture-image_984737.jpg",
];
const Courses = ({ route }) => {
  // const [course, setCourse] = useState();
  // const [searchCourse, setSearchCourse] = useState("");
  // const [isCourse, setIsCourse] = useState(true);

  const uni = route.params.universityName;

  const navigation = useNavigation();
  return (
    <View style={styles.courseContainer}>
      <ScrollView>
        {/* <View style={styles.searchCourse}>
          <TextInput
            style={styles.searchBar}
            placeholder="search Courses"
            // value={searchUniversity}
            // onChangeText={(e) => setSearchUniversity(e)}
          />
          <TouchableOpacity
            style={styles.courseSearchButton}
            // onPress={() => searchUni()}
          >
            <Text style={styles.courseSearchButtonText}>SEARCH</Text>
          </TouchableOpacity>
        </View> */}

        <View>
          <Image
            source={{
              uri: "https://png.pngtree.com/template/20210727/ourmid/pngtree-online-course-distance-learning-banner-image_552670.jpg",
            }}
            style={styles.courseBanner}
          />
        </View>

        <View style={styles.courseBox}>
          {UniversityCourses.map((university) => (
            <View key={university.university}>
              {uni === university.university && (
                <View>
                  {university.courses.map((course) => (
                    <TouchableOpacity
                      key={course.name}
                      style={styles.universitySearchButton}
                      onPress={() =>
                        navigation.navigate("Stream", {
                          course: course.branches,
                        })
                      }
                    >
                      <Text style={styles.buttonText}>{course.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Courses;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  courseContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  courseBanner: {
    width: deviceWidth,
    height: deviceWidth / 2,
    marginVertical: 10,
  },
  courseBox: {
    textAlign: "center",
  },

  universitySearchButton: {
    backgroundColor: "white",
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 17,
    textTransform: "capitalize",
  },
});
