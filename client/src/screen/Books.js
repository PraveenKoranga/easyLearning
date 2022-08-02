import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import * as Font from "expo-font";
import NotFound from "../components/NotFound";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isBookLoaded, setIsBookLoaded] = useState(true);
  const [searchBooks, setSearchBooks] = useState();

  const getBooks = async () => {
    try {
      const book = await fetch("https://api.itbook.store/1.0/new");
      const myBooks = await book.json();
      setBooks(myBooks);
      setIsBookLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchbook = async () => {
    try {
      const book = await fetch(
        `https://api.itbook.store/1.0/search/${searchBooks}`
      );
      const myBooks = await book.json();
      setBooks(myBooks);
      setIsBookLoaded(false);
      setSearchBooks("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        NunitoSans_Bold: require("../../assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf"),
        // Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      }))();

    getBooks();
  }, []);

  const OpenWithLinking = (url) => {
    Linking.openURL(`${url}`);
  };
  console.log(books.books);

  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  console.log(searchBooks);
  return (
    <View
      style={[
        styles.booksmainContainer,
        {
          backgroundColor: isBookLoaded
            ? "white"
            : books.books.length
            ? "white"
            : "#FF3838",
        },
      ]}
    >
      {isBookLoaded ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <View>
            <View style={styles.searchBook}>
              <TextInput
                style={styles.searchBar}
                placeholder="search books by title,author,ISBN or keywords"
                value={searchBooks}
                onChangeText={(e) => setSearchBooks(e)}
              />
              <TouchableOpacity
                style={styles.bookSearchButton}
                onPress={() => searchbook()}
                // onFocus={() =>
                //   Alert.alert(
                //     "Note: for more books search like bookName/number between 1 to 50(for example: python/3)"
                //   )
                // }
              >
                <Text style={styles.bookSearchButtonText}>SEARCH</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginVertical: 10, marginHorizontal: 5 }}>
              Note: for more books search like bookName/number between 1 to
              50(for example: python/3)
            </Text>
            {books.books.length ? (
              <FlatList
                data={books.books}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.isbn13}
                legacyImplementation={true}
                renderItem={({ item }) => (
                  <View style={styles.bookBox}>
                    <TouchableOpacity
                      style={styles.bookViewButton}
                      onPress={() => OpenWithLinking(item.url)}
                    >
                      <Image
                        style={styles.bookImage}
                        source={{ uri: item.image }}
                      />
                      <Text style={styles.bookTitle}>
                        {addElipsis(item.title, 50)}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            ) : (
              <View>
                <NotFound />
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Books;

const devicewidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  booksmainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBook: {
    height: devicewidth / 7,
    fontSize: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    alignItems: "center",
    marginVertical: 10,
    elevation: 2,
  },
  searchBar: {
    width: devicewidth - 130,
    borderWidth: 1,
    borderColor: "black",
    elevation: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  bookSearchButton: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  bookSearchButtonText: {
    color: "white",
    fontSize: 20,
  },
  bookBox: {
    flex: 1,
    width: devicewidth / 1.3,
    height: devicewidth / 1.1,
    marginVertical: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    elevation: 10,
    borderRadius: 10,
  },
  bookImage: {
    width: devicewidth,
    height: devicewidth / 1.5,
    aspectRatio: 1,
    alignSelf: "center",
  },
  bookTitle: {
    fontSize: 25,
    marginHorizontal: 2,
    textAlign: "justify",
    fontFamily: "NunitoSans_Bold",
  },
});
