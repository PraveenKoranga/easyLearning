import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./src/screen/Home";
import store from "./src/redux/store";
import Books from "./src/screen/Books";
import Blog from "./src/screen/Blog";
import Exercise from "./src/screen/Exercise";
import Courses from "./src/screen/coursesScreen/Courses";
import DetailCourses from "./src/screen/DetailCourses";
import Login from "./src/screen/Login";
import Register from "./src/screen/Register";
import ViewBlog from "./src/screen/blogScreen/ViewBlog";
import UserDetail from "./src/screen/userProfile/UserDetail";
import Branch from "./src/screen/coursesScreen/Branch";
import Semester from "./src/screen/coursesScreen/Semester";
import CourseList from "./src/screen/coursesScreen/CourseList";
import University from "./src/screen/University";
import Stream from "./src/screen/coursesScreen/Stream";
import DrawerMenu from "./src/homeScreen/Drawer";
import Tutorial from "./src/homeScreen/Tutorial";
import Questions from "./src/screen/exercise/Questions";
import Solutions from "./src/screen/exercise/Solutions";
import Read from "./src/screen/coursesScreen/Read";
import UpdateUser from "./src/screen/userProfile/UpdateUser";
import Quize from "./src/screen/exercise/Quize";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "LOGIN",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Register",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Profile"
            component={UserDetail}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Profile",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="userUpdate"
            component={UpdateUser}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Edit Profile",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseDetails"
            component={DetailCourses}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "CoursesDetails",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Tutorial"
            component={DrawerMenu}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Tutorial",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="University"
            component={University}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "University",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Courses"
            component={Courses}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Course List",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Stream"
            component={Stream}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Stream List",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Branch"
            component={Branch}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Branch List",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Sem"
            component={Semester}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Sem List",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Subjests"
            component={CourseList}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Subject List",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="ReadBook"
            component={Read}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Syllabus",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Blog"
            component={Blog}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Blogs",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="ViewBlog"
            component={ViewBlog}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "blog",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Books"
            component={Books}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Books",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Exercise"
            component={Exercise}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Exercise",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Questions"
            component={Questions}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Questions",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Quize"
            component={Quize}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Quize",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Solutions"
            component={Solutions}
            options={{
              headerTitleStyle: { fontSize: 25 },
              headerTitle: "Solutions",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
