import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuBox}>
      <TouchableOpacity onPress={() => navigation.navigate("University")}>
        <View>
          <Image
            style={{ width: "100%", height: 50, aspectRatio: 1 }}
            source={{
              uri: "https://png.pngtree.com/png-clipart/20190919/ourmid/pngtree-work-office-business-training-illustration-png-image_1738981.jpg",
            }}
          />
          <Text style={styles.text}>Course</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Blog")}>
        <View>
          <Image
            style={{ width: "100%", height: 50, aspectRatio: 1 }}
            source={{
              uri: "https://png.pngtree.com/element_pic/17/03/14/e0a5ce77ce4b971b438d3627a6cd0c95.jpg",
            }}
          />
          <Text style={styles.text}>Blog</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Books")}>
        <View>
          <Image
            style={{ width: "100%", height: 50, aspectRatio: 1 }}
            source={{
              uri: "https://png.pngtree.com/png-vector/20190727/ourmid/pngtree-profile-about-contact-delete-file-personal-bold-and-thin-bl-png-image_1617098.jpg",
            }}
          />
          <Text style={styles.text}>Books</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Exercise")}>
        <View>
          <Image
            style={{ width: "100%", height: 50, aspectRatio: 1 }}
            source={{
              uri: "https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-vector-mail-icon-png-image_1005280.jpg",
            }}
          />
          <Text style={styles.text}>Exercise</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 10,
    borderTopColor: "black",
    borderTopWidth: 2,
    paddingVertical: 5,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
  },
});
