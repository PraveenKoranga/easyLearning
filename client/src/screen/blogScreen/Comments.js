import {
  StyleSheet,
  Text,
  TextBase,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postComment } from "../../redux/action/commentAction";
import { useNavigation } from "@react-navigation/native";

const commentDate = new Date().toDateString();

const Comments = ({ blog }) => {
  const [name, setName] = useState("");
  const [postId, setPostId] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const getuserData = async () => {
      try {
        var userData = await AsyncStorage.getItem("profile");
        var data = await JSON.parse(userData);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getuserData();
    if (user) {
      setName(user.user.name || user.user.username);
      setPostId(blog._id);
      setEmail(user.user.email);
      setDate(commentDate);
    }
  }, [blog, user]);

  const postComments = () => {
    dispatch(postComment(name, postId, email, date, comment));

    navigation.navigate("ViewBlog", {
      blogId: blog._id,
    });
    // window.location.reload();
    console.log("clicked");
  };

  const redirect = () => {
    navigation.navigate("Login");
    console.log("clicked");
  };

  // console.log(user);

  return (
    <View>
      <Text>{error && <Text>{error}</Text>}</Text>
      <View style={styles.CommentsContainer}>
        <View style={styles.userProfile}>
          <Text style={styles.image}>p</Text>
        </View>

        <TextInput
          multiline
          numberOfLines={3}
          style={styles.commentBox}
          value={comment}
          onChangeText={(e) => setComment(e)}
        />
        {user ? (
          <TouchableOpacity
            style={styles.postComment}
            onPress={() => postComments()}
          >
            <Text style={styles.postText}>POST</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.postComment}
            onPress={() => redirect()}
          >
            <Text style={styles.postText}>POST</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <CommentList blog={blog} key={blog._id} />
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  CommentsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  userProfile: {
    width: 50,
    borderWidth: 1,
    textAlign: "center",
    marginRight: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  image: {},
  commentBox: {
    borderWidth: 1,
    flex: 2,
    borderRadius: 10,
  },
  postComment: {
    // borderWidth: 1,
    marginLeft: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    backgroundColor: "blue",
  },
  postText: {
    color: "white",
  },
});
