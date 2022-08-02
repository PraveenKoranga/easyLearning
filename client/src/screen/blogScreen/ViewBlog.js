import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogDetail } from "../../redux/action/blogAction";
import Comments from "./Comments";

const ViewBlog = ({ route }) => {
  const id = route.params.blogId;
  const dispatch = useDispatch();
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, BlogDetail } = blogDetails;
  useEffect(() => {
    console.log(id);
    dispatch(blogDetail(id));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {BlogDetail && (
            <View style={styles.mainContainer}>
              <View style={styles.blogBox}>
                <View style={styles.blogtitleBox}>
                  <Text style={styles.title}>Blog On {BlogDetail.title}</Text>
                  <Text style={styles.username}>By:{BlogDetail.username}</Text>
                </View>

                <Text style={styles.category}>
                  Blog Category - {BlogDetail.category}
                </Text>

                <Text style={styles.blogDescription}>
                  {BlogDetail.description}
                </Text>
              </View>

              <View>
                <Comments blog={BlogDetail} />
              </View>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ViewBlog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    margin: 10,
  },
  blogBox: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  blogtitleBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    letterSpacing: 1,
    marginVertical: 5,
  },
  username: {
    fontSize: 20,
    letterSpacing: 1,
    marginVertical: 5,
  },
  category: {
    fontSize: 14,
    marginVertical: 5,
    color: "#5656",
  },
  blogDescription: {
    textAlign: "justify",
    fontSize: 17,
    lineHeight: 30,
    marginBottom: 30,
  },
});
