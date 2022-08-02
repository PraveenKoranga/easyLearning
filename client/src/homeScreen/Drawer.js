import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Intro from "./jsTutorial/Intro";
import FirstExample from "./jsTutorial/FirstExample";
import JsComment from "./jsTutorial/JsComment";
import Variable from "./jsTutorial/Variable";
import DataType from "./jsTutorial/DataType";

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator initialRouteName="Intro">
      <Drawer.Screen name="Intro" component={Intro} />
      <Drawer.Screen name="FirstExample" component={FirstExample} />
      <Drawer.Screen name="Comment" component={JsComment} />
      <Drawer.Screen name="Variables" component={Variable} />
      <Drawer.Screen name="DataTypes" component={DataType} />
    </Drawer.Navigator>
  );
}
