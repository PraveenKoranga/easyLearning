import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NotFound = () => {
  return (
    <View style={styles.notFondContainer}>
      <Text style={[styles.page404, styles.text]}>404</Text>
      <Text style={[styles.error, styles.text]}>Error</Text>
      <Text style={[styles.pageNotFound, styles.text]}>Page Not Found</Text>
      <Text style={[styles.nonExistingText, styles.text]}>
        I think you just went to a page non-existing page.
      </Text>
      <Text style={[styles.searchRelatedText, styles.text]}>
        Please Search again related to our content..
      </Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  page404: {
    textAlign: "center",
    fontSize: 100,
    color: "white",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  error: {
    fontSize: 50,
  },
  pageNotFound: {
    fontSize: 40,
  },
  nonExistingText: {
    fontSize: 17,
  },
  searchRelatedText: {
    fontSize: 17,
  },
});
