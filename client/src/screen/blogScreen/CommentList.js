import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { deleteComment, listComments } from "../../redux/action/commentAction";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const CommentList = ({ blog }) => {
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const comments = useSelector((state) => state.comments);
  const { Comments } = comments;

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

  useEffect(() => {
    dispatch(listComments(blog._id));
  }, [dispatch, blog._id]);

  const removeComment = (comment) => {
    dispatch(deleteComment(comment._id, navigation, blog._id));
  };
  return (
    <View>
      {Comments && (
        <View>
          {Comments.map((comment) => (
            <View style={styles.comment_detail} key={comment._id}>
              <View>
                <Text style={styles.commenter_name}>{comment.name}</Text>
                <Text>{comment.comment}</Text>
              </View>

              <View>
                <Text style={styles.commentcreated_date}>{comment.date}</Text>
                {user && user.user.email === comment.email ? (
                  <TouchableOpacity onPress={() => removeComment(comment)}>
                    <Text>delete</Text>
                  </TouchableOpacity>
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default CommentList;

const styles = StyleSheet.create({
  comment_detail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    backgroundColor: "white",
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  commenter_name: {
    fontSize: 17,
  },
});
