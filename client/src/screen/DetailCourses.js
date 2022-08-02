import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { courseDetail } from "../redux/action/courseAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const DetailCourses = ({ route }) => {
  const id = route.params.courseId;
  const dispatch = useDispatch();

  const CourseDetail = useSelector((state) => state.CourseDetail);
  const { loading, error, courseDetails } = CourseDetail;

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(courseDetail(id));
  }, [id]);

  return (
    <View style={styles.courseDetal}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          {courseDetails && (
            <View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ height: "98%" }}
              >
                <Text style={styles.overview}> Overview</Text>
                <Text style={styles.decription}>
                  {courseDetails.description}
                </Text>
              </ScrollView>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Tutorial")}
              >
                <Text style={styles.startLearning}>
                  {courseDetails.gotolearnpage}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default DetailCourses;

const deviceHeight = Math.round(Dimensions.get("window").height);
// console.log(deviceHeight);

const styles = StyleSheet.create({
  courseDetal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  decription: {
    textAlign: "justify",
    fontSize: 17,
    lineHeight: 30,
    marginBottom: 30,
    marginHorizontal: 7,
    paddingHorizontal: 3,
  },
  overview: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 10,
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    // top: 665,
  },
  startLearning: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
  },
});
