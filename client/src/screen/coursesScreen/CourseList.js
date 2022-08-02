import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { subjects } from "../../components/subjectApi";
import { useNavigation } from "@react-navigation/native";
import CommingSoon from "../../components/CommingSoon";

const CourseList = ({ route }) => {
  const sem = route.params.sem;
  const subjects = route.params.subjects;
  const university = route.params.universityName;
  const navigation = useNavigation();
  // console.log(subjects);
  return (
    <View style={styles.subjects}>
      {subjects ? (
        <FlatList
          data={subjects}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <Text style={styles.name}>{item.name}</Text>

              <View>
                {item.units &&
                  item.units.map((unit) => (
                    <View style={styles.unitBox}>
                      <Text style={[styles.unitHeading, styles.heading]}>
                        Unit: {unit.unit}
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("ReadBook", {
                            topicDetails: unit.topicDetails,
                          })
                        }
                      >
                        <Text style={styles.topics}>
                          <Text style={styles.heading}>
                            {unit.syllabus.Heading}
                          </Text>
                          {unit.syllabus.topics}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>
            </View>
          )}
        />
      ) : (
        <CommingSoon />
      )}
    </View>
  );
};

export default CourseList;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  subjects: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 20,
  },
  box: {
    width: deviceWidth - 50,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 25,
    marginVertical: 10,
  },

  unitBox: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  topics: {
    textAlign: "justify",
    lineHeight: 25,
  },
  heading: {
    textAlign: "justify",
    fontWeight: "600",
  },
});
